class ParticleBackground {
    constructor() {
        this.container = null;
        this.camera = null;
        this.scene = null;
        this.renderer = null;
        this.particles = null;

        // Configuration
        this.particleCount = window.innerWidth < 768 ? 8000 : 25000; // Optimize for mobile
        this.particleSize = window.innerWidth < 768 ? 0.03 : 0.015;
        this.autoRotateSpeed = 0.0005;
        this.morphSpeed = 0.005;

        // Shapes data
        this.shapes = []; // [Sphere, Helix, Grid, ...]
        this.currentShapeIndex = 0;
        this.nextShapeIndex = 1;
        this.morphAlpha = 0; // 0 to 1 progress of morph
        this.morphState = 'waiting'; // waiting, morphing
        this.lastMorphTime = Date.now();
        this.morphDelay = 8000; // 8 seconds per shape

        this.init();
    }

    init() {
        this.container = document.createElement('div');
        this.container.id = 'canvas-container';
        this.container.style.position = 'fixed';
        this.container.style.top = '0';
        this.container.style.left = '0';
        this.container.style.width = '100%';
        this.container.style.height = '100%';
        this.container.style.zIndex = '-1';
        this.container.style.pointerEvents = 'none';
        this.container.style.opacity = '0.6';
        document.body.prepend(this.container);

        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.FogExp2(0x000000, 0.0006);

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000);
        this.camera.position.z = 1000;

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.container.appendChild(this.renderer.domElement);

        this.generateShapes();
        this.createParticles();

        window.addEventListener('resize', () => this.onWindowResize(), false);
        this.animate();
    }

    generateShapes() {
        // 1. SPHERE
        const spherePos = [];
        const radius = 800;
        for (let i = 0; i < this.particleCount; i++) {
            const phi = Math.acos(-1 + (2 * i) / this.particleCount);
            const theta = Math.sqrt(this.particleCount * Math.PI) * phi;
            spherePos.push(
                radius * Math.cos(theta) * Math.sin(phi),
                radius * Math.sin(theta) * Math.sin(phi),
                radius * Math.cos(phi)
            );
        }
        this.shapes.push(spherePos);

        // 2. HELIX
        const helixPos = [];
        for (let i = 0; i < this.particleCount; i++) {
            const h_r = 600;
            const h_y = (i / this.particleCount) * 1800 - 900;
            const h_theta = i * 0.05 + Math.PI;
            helixPos.push(
                h_r * Math.cos(h_theta),
                h_y,
                h_r * Math.sin(h_theta)
            );
        }
        this.shapes.push(helixPos);

        // 3. TORUS 
        const torusPos = [];
        for (let i = 0; i < this.particleCount; i++) {
            const u = Math.random() * Math.PI * 2;
            const v = Math.random() * Math.PI * 2;
            const tubR = 250;
            const mainR = 700;
            torusPos.push(
                (mainR + tubR * Math.cos(v)) * Math.cos(u),
                (mainR + tubR * Math.cos(v)) * Math.sin(u),
                tubR * Math.sin(v)
            );
        }
        this.shapes.push(torusPos);

        // 4. WAVE PLANE / COSMIC DUST
        const wavePos = [];
        for (let i = 0; i < this.particleCount; i++) {
            const x = (Math.random() - 0.5) * 2000;
            const y = (Math.random() - 0.5) * 2000;
            const z = (Math.random() - 0.5) * 2000;
            // Push to a sphere shell roughly, basically chaos
            wavePos.push(x, y, z);
        }
        this.shapes.push(wavePos);
    }

    createParticles() {
        const geometry = new THREE.BufferGeometry();
        // Start shape
        const positions = new Float32Array(this.shapes[0]);
        // We will modify THIS array directly
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({
            color: 0xffffff,
            size: this.particleSize * 200,
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.8,
            map: this.createTexture(),
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });

        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
    }

    createTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');
        const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        grad.addColorStop(0, 'rgba(255,255,255,1)');
        grad.addColorStop(0.2, 'rgba(255,255,255,0.8)');
        grad.addColorStop(0.5, 'rgba(255,255,255,0.2)');
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 32, 32);
        return new THREE.Texture(canvas);
    }

    // Call texture.needsUpdate only once. Texture creation is synchronous mostly but mapping needs update flag.
    // Actually Texture() constructor handles canvas directly fine generally. 
    // Let's refine createTexture to be cleaner.

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        const now = Date.now();

        // Rotate entire system
        this.particles.rotation.y += this.autoRotateSpeed;
        this.particles.rotation.z += this.autoRotateSpeed * 0.5;

        // Visual Warning Reaction (Speed up)
        if (document.body.classList.contains('state-warning')) {
            this.particles.rotation.y += 0.005; // Spin faster
        }

        // Morph Logic
        if (this.morphState === 'waiting') {
            if (now - this.lastMorphTime > this.morphDelay) {
                this.morphState = 'morphing';
                this.morphAlpha = 0;
                this.currentShapeIndex = this.nextShapeIndex;
                this.nextShapeIndex = (this.nextShapeIndex + 1) % this.shapes.length;
            }
        } else if (this.morphState === 'morphing') {
            this.morphAlpha += this.morphSpeed;
            if (this.morphAlpha >= 1) {
                this.morphAlpha = 1;
                this.morphState = 'waiting';
                this.lastMorphTime = now;
            }
            this.renderMorph();
        }

        this.renderer.render(this.scene, this.camera);
    }

    renderMorph() {
        const positions = this.particles.geometry.attributes.position.array;

        // Get stored shapes
        const fromShape = this.shapes[(this.currentShapeIndex - 1 + this.shapes.length) % this.shapes.length];
        const toShape = this.shapes[this.currentShapeIndex];

        let ease = this.morphAlpha;
        // Cubic Ease InOut
        // ease = ease < 0.5 ? 4 * ease * ease * ease : 1 - Math.pow(-2 * ease + 2, 3) / 2;
        // Simple smoothstep
        ease = ease * ease * (3 - 2 * ease);

        for (let i = 0; i < positions.length; i++) {
            positions[i] = fromShape[i] + (toShape[i] - fromShape[i]) * ease;
        }

        this.particles.geometry.attributes.position.needsUpdate = true;
    }
}

// Fixed Texture Helper because Canvas Texture needs explicit needsUpdate usually
ParticleBackground.prototype.createTexture = function () {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.2, 'rgba(255,255,255,0.8)');
    grad.addColorStop(0.5, 'rgba(255,255,255,0.2)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);
    const tex = new THREE.Texture(canvas);
    tex.needsUpdate = true;
    return tex;
}

window.onload = () => {
    // Wait for Three.js
    if (typeof THREE !== 'undefined') {
        new ParticleBackground();
    }
};
