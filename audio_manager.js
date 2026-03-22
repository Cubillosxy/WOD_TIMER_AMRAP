class AudioManager {
    constructor() {
        this.context = null;
        this.gainNode = null;
        this.isMuted = false;
    }

    init() {
        if (!this.context) {
            // Support for legacy webkitAudioContext
            this.context = new (window.AudioContext || window.webkitAudioContext)();
            this.gainNode = this.context.createGain();
            this.gainNode.connect(this.context.destination);
            // Volume control
            this.gainNode.gain.value = 0.5;
        }
        
        if (this.context.state === 'suspended') {
            this.context.resume();
        }
    }

    playTone(frequency, duration, type = 'sine') {
        if (this.isMuted || !this.context) return;
        
        const oscillator = this.context.createOscillator();
        const gain = this.context.createGain();

        oscillator.type = type;
        oscillator.frequency.setValueAtTime(frequency, this.context.currentTime);

        // Envelope for smoother sound to avoid clicking
        gain.gain.setValueAtTime(0, this.context.currentTime);
        gain.gain.linearRampToValueAtTime(0.5, this.context.currentTime + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + duration);

        oscillator.connect(gain);
        gain.connect(this.context.destination);

        oscillator.start();
        oscillator.stop(this.context.currentTime + duration);
    }

    // Standard short beep for countdown (5, 4, 3, 2, 1)
    playCountdown() {
        // 1000Hz is a standard digital watch beep frequency
        this.playTone(880, 0.1, 'square'); 
    }

    // "GO" sound - Higher pitch, slightly longer
    playGo() {
        this.playTone(1760, 0.6, 'square');
    }

    // "REST" sound - Lower pitch, distinct
    playRest() {
        // Two quick low tones
        this.playTone(440, 0.1, 'sine');
        setTimeout(() => {
            this.playTone(440, 0.1, 'sine');
        }, 150);
    }

    // "Complete" sound - Victory trill
    playComplete() {
        const now = this.context.currentTime;
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C major arpeggio
        
        notes.forEach((freq, i) => {
            setTimeout(() => {
                this.playTone(freq, 0.15, 'triangle');
            }, i * 150);
        });
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        return this.isMuted;
    }
}
