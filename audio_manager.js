class AudioManager {
    constructor() {
        this.context = null;
        this.gainNode = null;
        this.isMuted = false;
        this.isPrimed = false;

        this.shortBeepEl = null;
        this.longBeepEl = null;

        // Intentar enlazar elementos si ya están en el DOM
        this.bindAudioElements();
    }

    bindAudioElements() {
        if (!this.shortBeepEl) {
            this.shortBeepEl = document.getElementById('timer-short-beep');
        }
        if (!this.longBeepEl) {
            this.longBeepEl = document.getElementById('timer-long-beep');
        }
    }

    init() {
        this.bindAudioElements();

        // Desbloquear AudioContext para navegadores que lo requieran
        if (!this.context) {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (AudioContextClass) {
                this.context = new AudioContextClass();
                this.gainNode = this.context.createGain();
                this.gainNode.connect(this.context.destination);
                this.gainNode.gain.value = 0.5;
            }
        }

        if (this.context && this.context.state === 'suspended') {
            this.context.resume().catch(() => {});
        }

        // Inicializar/Desbloquear audios HTML5 (Técnica primeBeeps para auto-play)
        this.primeBeeps();
    }

    primeBeeps() {
        if (this.isPrimed) return;
        this.bindAudioElements();

        [this.shortBeepEl, this.longBeepEl].forEach(el => {
            if (!el) return;
            const originalMuted = el.muted;
            el.muted = true;
            const p = el.play();
            const reset = () => {
                el.pause();
                el.currentTime = 0;
                el.muted = originalMuted;
            };
            if (p && typeof p.then === 'function') {
                p.then(reset, reset);
            } else {
                reset();
            }
        });

        this.isPrimed = true;
    }

    // =========================================
    // REPRODUCCIÓN DE BEEP CORTO
    // =========================================
    playShortBeep() {
        if (this.isMuted) return;
        this.bindAudioElements();

        if (this.shortBeepEl) {
            try {
                this.shortBeepEl.pause();
                this.shortBeepEl.currentTime = 0;
                const p = this.shortBeepEl.play();
                if (p && typeof p.catch === 'function') {
                    p.catch(() => this.fallbackShortBeep());
                }

                // El beep corto se trunca a 500ms para máxima precisión
                setTimeout(() => {
                    if (this.shortBeepEl) {
                        this.shortBeepEl.pause();
                        this.shortBeepEl.currentTime = 0;
                    }
                }, 500);
                return;
            } catch (e) {
                this.fallbackShortBeep();
            }
        } else {
            this.fallbackShortBeep();
        }
    }

    // =========================================
    // REPRODUCCIÓN DE BEEP LARGO / CAMBIO
    // =========================================
    playLongBeep() {
        if (this.isMuted) return;
        this.bindAudioElements();

        if (this.longBeepEl) {
            try {
                this.longBeepEl.pause();
                this.longBeepEl.currentTime = 0;
                const p = this.longBeepEl.play();
                if (p && typeof p.catch === 'function') {
                    p.catch(() => this.fallbackLongBeep());
                }
                return;
            } catch (e) {
                this.fallbackLongBeep();
            }
        } else {
            this.fallbackLongBeep();
        }
    }

    // Métodos alias para compatibilidad
    playCountdown() {
        this.playShortBeep();
    }

    playGo() {
        this.playLongBeep();
    }

    playRest() {
        this.playLongBeep();
    }

    playComplete() {
        this.playLongBeep();
    }

    // =========================================
    // FALLBACKS SINTETIZADOS (WEB AUDIO API)
    // =========================================
    fallbackShortBeep() {
        if (this.isMuted || !this.context) return;
        this.playTone(880, 0.12, 'square');
    }

    fallbackLongBeep() {
        if (this.isMuted || !this.context) return;
        this.playTone(1760, 0.7, 'square');
    }

    playTone(frequency, duration, type = 'sine') {
        if (this.isMuted || !this.context) return;
        try {
            const oscillator = this.context.createOscillator();
            const gain = this.context.createGain();

            oscillator.type = type;
            oscillator.frequency.setValueAtTime(frequency, this.context.currentTime);

            gain.gain.setValueAtTime(0, this.context.currentTime);
            gain.gain.linearRampToValueAtTime(0.5, this.context.currentTime + 0.01);
            gain.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + duration);

            oscillator.connect(gain);
            gain.connect(this.context.destination);

            oscillator.start();
            oscillator.stop(this.context.currentTime + duration);
        } catch (e) {}
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        if (this.shortBeepEl) this.shortBeepEl.muted = this.isMuted;
        if (this.longBeepEl) this.longBeepEl.muted = this.isMuted;
        return this.isMuted;
    }
}
