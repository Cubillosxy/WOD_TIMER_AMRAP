/**
 * ====================================================================
 * WOD TIMER - 3D INTERACTIVE PARTICLE UNIVERSE (THREE.JS)
 * ====================================================================
 * Características:
 * - Morfología 3D fluida: Esfera, Doble Hélice, Toroide, Océano Cósmico.
 * - Interacción por cursor/touch: Parallax 3D y campo de repulsión interactivo.
 * - Ondas de choque (Shockwaves) al hacer clic o cambiar de estado.
 * - Reactividad dinámica de color según el estado del WOD:
 *   PREPARE (Ámbar), WORK (Verde Neón), REST (Rojo Carmesí),
 *   WARNING (Alerta Rápida), FINISHED (Dorado Victoria).
 */

class InteractiveParticleBackground {
    constructor() {
        this.container = null;
        this.camera = null;
        this.scene = null;
        this.renderer = null;
        this.particles = null;
        this.geometry = null;
        this.material = null;

        // Configuración según dispositivo
        this.isMobile = window.innerWidth < 768;
        this.particleCount = this.isMobile ? 8000 : 20000;
        this.baseParticleSize = this.isMobile ? 12 : 7;
        this.autoRotateSpeed = 0.0007;

        // Formas 3D
        this.shapes = [];
        this.currentShapeIndex = 0;
        this.nextShapeIndex = 1;
        this.morphAlpha = 0;
        this.morphState = 'waiting'; // 'waiting' | 'morphing'
        this.lastMorphTime = Date.now();
        this.morphDelay = 9000; // 9s por forma
        this.morphSpeed = 0.008;

        // Arrays de posiciones
        this.currentPositions = null;
        this.originalPositions = null;
        this.displacements = null; // Vector de desplazamiento interactivo

        // Interacción con ratón / touch
        this.mouseX = 0;
        this.mouseY = 0;
        this.targetCamX = 0;
        this.targetCamY = 0;
        this.mouseWorld = new THREE.Vector3(-9999, -9999, 0);
        this.raycaster = new THREE.Raycaster();
        this.mouseNDC = new THREE.Vector2(-9999, -9999);
        this.interactionPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

        // Ondas de choque (Shockwaves)
        this.shockwaves = []; // { x, y, radius, maxRadius, speed, strength }

        // Colores reactivos según el estado del entrenamiento
        this.colorCurrent = new THREE.Color(0xd0e8ff);
        this.colorTarget = new THREE.Color(0xd0e8ff);

        this.init();
    }

    init() {
        // Contenedor WebGL
        this.container = document.createElement('div');
        this.container.id = 'canvas-container';
        this.container.style.position = 'fixed';
        this.container.style.top = '0';
        this.container.style.left = '0';
        this.container.style.width = '100%';
        this.container.style.height = '100%';
        this.container.style.zIndex = '0';
        this.container.style.pointerEvents = 'none'; // Permite clics en toda la UI
        document.body.prepend(this.container);

        // Escena y Niebla profunda
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.FogExp2(0x000000, 0.00055);

        // Cámara
        this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 3000);
        this.camera.position.z = 1050;

        // Renderizador con fondo transparente
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.container.appendChild(this.renderer.domElement);

        // Generar geometrías y partículas
        this.generateShapes();
        this.createParticles();

        // Listeners de eventos interactivos
        this.bindEvents();

        // Iniciar bucle de animación
        this.animate();
    }

    generateShapes() {
        // 1. ESFERA DE FIBONACCI
        const spherePos = [];
        const sphereR = 750;
        for (let i = 0; i < this.particleCount; i++) {
            const phi = Math.acos(-1 + (2 * i) / this.particleCount);
            const theta = Math.sqrt(this.particleCount * Math.PI) * phi;
            spherePos.push(
                sphereR * Math.cos(theta) * Math.sin(phi),
                sphereR * Math.sin(theta) * Math.sin(phi),
                sphereR * Math.cos(phi)
            );
        }
        this.shapes.push(spherePos);

        // 2. DOBLE HÉLICE (ADN / ENERGÍA ATLETA)
        const helixPos = [];
        for (let i = 0; i < this.particleCount; i++) {
            const strand = (i % 2 === 0) ? 0 : Math.PI;
            const progress = (i / this.particleCount);
            const y = (progress - 0.5) * 1900;
            const theta = progress * Math.PI * 14 + strand;
            const r = 480 + (Math.sin(progress * Math.PI * 8) * 80);
            helixPos.push(
                r * Math.cos(theta) + (Math.random() - 0.5) * 60,
                y,
                r * Math.sin(theta) + (Math.random() - 0.5) * 60
            );
        }
        this.shapes.push(helixPos);

        // 3. TOROIDE CÓSMICO (RING OF POWER)
        const torusPos = [];
        const mainR = 680;
        const tubeR = 240;
        for (let i = 0; i < this.particleCount; i++) {
            const u = Math.random() * Math.PI * 2;
            const v = Math.random() * Math.PI * 2;
            torusPos.push(
                (mainR + tubeR * Math.cos(v)) * Math.cos(u),
                (mainR + tubeR * Math.cos(v)) * Math.sin(u),
                tubeR * Math.sin(v)
            );
        }
        this.shapes.push(torusPos);

        // 4. OCÉANO CÓSMICO (WAVE MATRIX)
        const wavePos = [];
        const gridSize = Math.floor(Math.sqrt(this.particleCount));
        const spacing = 1800 / gridSize;
        for (let i = 0; i < this.particleCount; i++) {
            const gx = (i % gridSize) - gridSize / 2;
            const gy = Math.floor(i / gridSize) - gridSize / 2;
            const x = gx * spacing;
            const y = gy * spacing;
            const dist = Math.sqrt(x * x + y * y);
            const z = Math.sin(dist * 0.008) * 260 + Math.cos(x * 0.01) * 120;
            wavePos.push(x, y, z);
        }
        this.shapes.push(wavePos);
    }

    createTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');
        const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        grad.addColorStop(0, 'rgba(255,255,255,1)');
        grad.addColorStop(0.2, 'rgba(255,255,255,0.85)');
        grad.addColorStop(0.5, 'rgba(255,255,255,0.3)');
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 64, 64);
        const texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;
        return texture;
    }

    createParticles() {
        this.geometry = new THREE.BufferGeometry();
        this.currentPositions = new Float32Array(this.shapes[0]);
        this.originalPositions = new Float32Array(this.shapes[0]);
        this.displacements = new Float32Array(this.particleCount * 3);

        this.geometry.setAttribute('position', new THREE.BufferAttribute(this.currentPositions, 3));

        this.material = new THREE.PointsMaterial({
            color: this.colorCurrent,
            size: this.baseParticleSize,
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.75,
            map: this.createTexture(),
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });

        this.particles = new THREE.Points(this.geometry, this.material);
        this.scene.add(this.particles);
    }

    bindEvents() {
        window.addEventListener('resize', () => this.onResize(), false);

        // Seguimiento interactivo del ratón
        window.addEventListener('mousemove', (e) => {
            this.mouseX = (e.clientX - window.innerWidth / 2);
            this.mouseY = (e.clientY - window.innerHeight / 2);

            this.targetCamX = (this.mouseX * 0.35);
            this.targetCamY = (-this.mouseY * 0.35);

            this.mouseNDC.x = (e.clientX / window.innerWidth) * 2 - 1;
            this.mouseNDC.y = -(e.clientY / window.innerHeight) * 2 + 1;

            this.raycaster.setFromCamera(this.mouseNDC, this.camera);
            this.raycaster.ray.intersectPlane(this.interactionPlane, this.mouseWorld);
        }, { passive: true });

        // Touch interactivo en móviles
        window.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                const touch = e.touches[0];
                this.mouseX = (touch.clientX - window.innerWidth / 2);
                this.mouseY = (touch.clientY - window.innerHeight / 2);

                this.targetCamX = (this.mouseX * 0.25);
                this.targetCamY = (-this.mouseY * 0.25);

                this.mouseNDC.x = (touch.clientX / window.innerWidth) * 2 - 1;
                this.mouseNDC.y = -(touch.clientY / window.innerHeight) * 2 + 1;
                this.raycaster.setFromCamera(this.mouseNDC, this.camera);
                this.raycaster.ray.intersectPlane(this.interactionPlane, this.mouseWorld);
            }
        }, { passive: true });

        // Click / Tap genera una onda expansiva (Shockwave)
        window.addEventListener('pointerdown', (e) => {
            this.triggerShockwave(this.mouseWorld.x, this.mouseWorld.y);
        });

        // Doble click cambia inmediatamente de forma
        window.addEventListener('dblclick', () => {
            this.nextShape();
        });
    }

    triggerShockwave(x, y, strength = 180) {
        if (!isNaN(x) && !isNaN(y)) {
            this.shockwaves.push({
                x: x,
                y: y,
                radius: 0,
                maxRadius: 1100,
                speed: 36,
                strength: strength
            });
        }
    }

    nextShape() {
        this.morphState = 'morphing';
        this.morphAlpha = 0;
        this.currentShapeIndex = this.nextShapeIndex;
        this.nextShapeIndex = (this.nextShapeIndex + 1) % this.shapes.length;
    }

    onResize() {
        if (!this.camera || !this.renderer) return;
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    updateThemeColors() {
        // Detectar estado actual del temporizador en el body
        const classList = document.body.classList;

        if (classList.contains('state-prepare')) {
            this.colorTarget.setHex(0xffcc00); // Ámbar dorado (Prepare)
        } else if (classList.contains('state-work')) {
            this.colorTarget.setHex(0x00ff88); // Verde eléctrico (Work)
        } else if (classList.contains('state-rest')) {
            this.colorTarget.setHex(0xff2a40); // Rojo carmesí intenso (Rest)
        } else if (classList.contains('state-warning')) {
            this.colorTarget.setHex(0xff0033); // Rojo alarma (Warning)
        } else if (classList.contains('state-finished')) {
            this.colorTarget.setHex(0xffd700); // Oro victoria (Finished)
        } else {
            this.colorTarget.setHex(0xd0e8ff); // Azul cósmico limpio (Menú / Clock)
        }

        // Transición suave de color
        this.colorCurrent.lerp(this.colorTarget, 0.04);
        if (this.material) {
            this.material.color.copy(this.colorCurrent);
        }
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        const now = Date.now();
        const pos = this.geometry.attributes.position.array;

        // 1. Suave seguimiento de cámara al cursor (Parallax Damping)
        this.camera.position.x += (this.targetCamX - this.camera.position.x) * 0.04;
        this.camera.position.y += (this.targetCamY - this.camera.position.y) * 0.04;
        this.camera.lookAt(0, 0, 0);

        // 2. Rotación base del sistema de partículas
        let rotSpeed = this.autoRotateSpeed;
        if (document.body.classList.contains('state-warning')) {
            rotSpeed *= 3.5; // Acelerar rotación en alerta
        } else if (document.body.classList.contains('state-work')) {
            rotSpeed *= 1.4; // Mayor dinamismo durante el trabajo
        }
        this.particles.rotation.y += rotSpeed;
        this.particles.rotation.z += rotSpeed * 0.4;

        // 3. Morfología entre figuras 3D
        if (this.morphState === 'waiting') {
            if (now - this.lastMorphTime > this.morphDelay) {
                this.nextShape();
            }
        } else if (this.morphState === 'morphing') {
            this.morphAlpha += this.morphSpeed;
            if (this.morphAlpha >= 1) {
                this.morphAlpha = 1;
                this.morphState = 'waiting';
                this.lastMorphTime = now;
            }
        }

        const fromIdx = (this.currentShapeIndex - 1 + this.shapes.length) % this.shapes.length;
        const fromShape = this.shapes[fromIdx];
        const toShape = this.shapes[this.currentShapeIndex];
        const ease = this.morphAlpha * this.morphAlpha * (3 - 2 * this.morphAlpha);

        // 4. Actualizar ondas de choque activas
        for (let s = this.shockwaves.length - 1; s >= 0; s--) {
            const wave = this.shockwaves[s];
            wave.radius += wave.speed;
            if (wave.radius > wave.maxRadius) {
                this.shockwaves.splice(s, 1);
            }
        }

        // 5. Deformación interactiva por onda de choque y repulsión del cursor
        const mx = this.mouseWorld.x;
        const my = this.mouseWorld.y;
        const repulseRadius = 260;
        const repulseStrength = 140;

        for (let i = 0; i < this.particleCount; i++) {
            const i3 = i * 3;

            // Posición base interpolada de la forma actual
            let bx = fromShape[i3] + (toShape[i3] - fromShape[i3]) * ease;
            let by = fromShape[i3 + 1] + (toShape[i3 + 1] - fromShape[i3 + 1]) * ease;
            let bz = fromShape[i3 + 2] + (toShape[i3 + 2] - fromShape[i3 + 2]) * ease;

            // A) Repulsión interactiva del cursor en el plano frontal
            let dx = bx - mx;
            let dy = by - my;
            let distSq = dx * dx + dy * dy;

            if (distSq < repulseRadius * repulseRadius && distSq > 1) {
                const dist = Math.sqrt(distSq);
                const factor = (1 - dist / repulseRadius) * repulseStrength;
                bx += (dx / dist) * factor;
                by += (dy / dist) * factor;
                bz += Math.sin(factor) * 60;
            }

            // B) Empuje por ondas de choque (Shockwaves)
            for (let w = 0; w < this.shockwaves.length; w++) {
                const wave = this.shockwaves[w];
                const wdx = bx - wave.x;
                const wdy = by - wave.y;
                const wdist = Math.sqrt(wdx * wdx + wdy * wdy);
                const diff = Math.abs(wdist - wave.radius);

                if (diff < 90) {
                    const waveFactor = (1 - diff / 90) * (1 - wave.radius / wave.maxRadius) * wave.strength;
                    if (wdist > 0.1) {
                        bx += (wdx / wdist) * waveFactor;
                        by += (wdy / wdist) * waveFactor;
                        bz += (wdist > wave.radius ? 1 : -1) * waveFactor * 0.5;
                    }
                }
            }

            pos[i3] = bx;
            pos[i3 + 1] = by;
            pos[i3 + 2] = bz;
        }

        this.geometry.attributes.position.needsUpdate = true;

        // 6. Actualizar tema de color del timer
        this.updateThemeColors();

        // 7. Render
        this.renderer.render(this.scene, this.camera);
    }
}

// Inicialización automática
document.addEventListener('DOMContentLoaded', () => {
    if (typeof THREE !== 'undefined') {
        window.particleBg = new InteractiveParticleBackground();
    }
});
