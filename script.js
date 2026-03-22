class WodTimer {
    constructor() {
        this.audio = new AudioManager();

        // DOM Elements
        this.display = document.querySelector('.timer-display');
        this.statusLabel = document.querySelector('.status-label');
        this.roundInfo = document.querySelector('.round-info');
        this.startBtn = document.getElementById('btn-start');
        this.resetBtn = document.getElementById('btn-reset');
        this.settingsPanel = document.querySelector('.settings-panel');

        // State
        this.mode = 'clock';
        this.state = 'idle';
        this.interval = null;
        this.startTime = null;
        this.endTime = null;
        this.remainingTime = 0;
        this.elapsedTime = 0; // For stopwatch accumulation

        // Multi-State Persistence
        this.savedStates = {}; // Stores { mode: { state, remaining, elapsed, round, paused } }

        // Settings defaults
        this.settings = {
            timerTime: 5,
            amrapTime: 10,
            emomInterval: 60,
            emomRounds: 10,
            tabataWork: 20,
            tabataRest: 10,
            tabataRounds: 8
        };

        // Runtime variables
        this.currentRound = 1;
        this.prepareTime = 10;
        this.isPaused = false;

        this.bindEvents();
        this.updateClock();
        setInterval(() => {
            if (this.mode === 'clock' && this.state === 'idle') this.updateClock();
        }, 1000);
    }

    bindEvents() {
        this.startBtn.addEventListener('click', () => this.toggleStart());
        this.resetBtn.addEventListener('click', () => this.reset());

        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.switchMode(e.target.dataset.mode));
        });

        document.getElementById('input-timer-time')?.addEventListener('change', (e) => this.settings.timerTime = parseInt(e.target.value));
        document.getElementById('input-amrap-time')?.addEventListener('change', (e) => this.settings.amrapTime = parseInt(e.target.value));
        document.getElementById('input-emom-interval')?.addEventListener('change', (e) => this.settings.emomInterval = parseInt(e.target.value));
        document.getElementById('input-emom-rounds')?.addEventListener('change', (e) => this.settings.emomRounds = parseInt(e.target.value));
    }

    switchMode(newMode) {
        if (this.mode === newMode) return;

        // 1. Save current state (if not clock)
        if (this.mode !== 'clock') {
            this.saveCurrentState();
        }

        this.mode = newMode;

        // Update UI Tabs
        document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector(`[data-mode="${newMode}"]`).classList.add('active');

        // 2. Try to restore state
        if (this.savedStates[newMode]) {
            this.restoreState(newMode);
        } else {
            // No saved state, reset to fresh
            this.reset();
        }

        this.updateSettingsVisibility();
    }

    saveCurrentState() {
        // If it's running, pause it first
        if (this.state !== 'idle' && !this.isPaused) {
            this.pause();
        }

        // Store vital stats
        this.savedStates[this.mode] = {
            state: this.state,
            remainingTime: this.remainingTime,
            elapsedTime: this.elapsedTime, // For stopwatch
            currentRound: this.currentRound,
            isPaused: true // Always saved as paused
        };
    }

    restoreState(mode) {
        const saved = this.savedStates[mode];
        if (!saved || saved.state === 'idle') {
            this.reset();
            return;
        }

        clearInterval(this.interval); // Safety

        this.state = saved.state;
        this.remainingTime = saved.remainingTime;
        this.elapsedTime = saved.elapsedTime || 0;
        this.currentRound = saved.currentRound;
        this.isPaused = true; // Always restore as paused

        // UI Update
        this.startBtn.textContent = 'RESUME';
        this.startBtn.classList.remove('running');
        this.updateUIState(this.state);

        // Display Time Update
        if (this.mode === 'fortime') {
            this.display.textContent = this.formatTime(Math.floor(this.elapsedTime));
        } else {
            this.display.textContent = this.formatTime(Math.ceil(this.remainingTime));
        }

        // Visual warning check
        if (this.remainingTime <= 5 && this.remainingTime > 0 && this.mode !== 'fortime') {
            document.body.classList.add('state-warning');
        } else {
            document.body.classList.remove('state-warning');
        }
    }

    updateSettingsVisibility() {
        const inputs = document.querySelectorAll('.input-group');
        inputs.forEach(el => el.style.display = 'none');

        this.settingsPanel.classList.remove('active');

        // Only show settings if in IDLE state (fresh start)
        // If resumed (PAUSED/WORK), hide settings to avoid confusion
        if (this.state !== 'idle') return;

        if (this.mode === 'timer') {
            document.querySelector('#group-timer-time').style.display = 'flex';
            this.settingsPanel.classList.add('active');
            this.display.textContent = this.formatTime(this.settings.timerTime * 60);
        } else if (this.mode === 'amrap') {
            document.querySelector('#group-amrap-time').style.display = 'flex';
            this.settingsPanel.classList.add('active');
            this.display.textContent = this.formatTime(this.settings.amrapTime * 60);
        } else if (this.mode === 'emom') {
            document.querySelector('#group-emom-interval').style.display = 'flex';
            document.querySelector('#group-emom-rounds').style.display = 'flex';
            this.settingsPanel.classList.add('active');
            this.display.textContent = this.formatTime(this.settings.emomInterval);
        } else if (this.mode === 'tabata') {
            this.display.textContent = "20 / 10";
        } else if (this.mode === 'fortime') {
            this.display.textContent = "00:00";
        } else if (this.mode === 'clock') {
            this.updateClock();
        }
    }

    toggleStart() {
        if (this.mode === 'clock') return;

        this.audio.init();

        if (this.state === 'idle' || this.state === 'finished') {
            this.startWorkout();
        } else {
            if (this.isPaused) {
                this.resume();
            } else {
                this.pause();
            }
        }
    }

    startWorkout() {
        this.resetRuntime();
        this.state = 'prepare';
        this.remainingTime = this.prepareTime;
        this.elapsedTime = 0; // Reset stopwatch
        this.updateUIState('prepare');
        this.startLoop();
    }

    pause() {
        this.isPaused = true;
        clearInterval(this.interval);
        this.startBtn.textContent = 'RESUME';
        this.startBtn.classList.remove('running');
    }

    resume() {
        this.isPaused = false;
        this.startBtn.textContent = 'PAUSE';
        this.startBtn.classList.add('running');
        this.lastFrameTime = performance.now();

        if (this.mode === 'fortime') {
            this.startTime = performance.now(); // Reset start reference
            this.runForTimeLoop();
        } else {
            this.loop();
            this.interval = setInterval(() => this.loop(), 100);
        }
    }

    startLoop() {
        this.isPaused = false;
        this.startBtn.textContent = 'PAUSE';
        this.startBtn.classList.add('running');
        this.lastFrameTime = performance.now();
        this.interval = setInterval(() => this.loop(), 100);
    }

    loop() {
        const now = performance.now();
        const delta = (now - this.lastFrameTime) / 1000;
        this.lastFrameTime = now;

        if (this.remainingTime > 0) {
            this.checkAudioCues(this.remainingTime, this.remainingTime - delta);

            this.remainingTime -= delta;
            if (this.remainingTime < 0) this.remainingTime = 0;

            // Visual Warning for last 5 seconds
            if (this.remainingTime <= 5 && this.remainingTime > 0) {
                document.body.classList.add('state-warning');
            } else {
                document.body.classList.remove('state-warning');
            }

            this.display.textContent = this.formatTime(Math.ceil(this.remainingTime));
        } else {
            this.handlePhaseTransition();
        }
    }

    checkAudioCues(prevTime, newTime) {
        const currentSec = Math.ceil(newTime);
        const prevSec = Math.ceil(prevTime);

        if (currentSec !== prevSec) {
            if (currentSec <= 5 && currentSec > 0) {
                this.audio.playCountdown();
            }
        }
    }

    handlePhaseTransition() {
        if (this.state === 'prepare') {
            this.audio.playGo();

            if (this.mode === 'fortime') {
                this.state = 'work';
                this.startTime = performance.now();
                this.elapsedTime = 0;
                this.runForTimeLoop();
                return;
            }

            this.startNextRound();
        }
        else if (this.state === 'work') {
            if (this.mode === 'tabata') {
                if (this.currentRound >= this.settings.tabataRounds) {
                    this.finish();
                } else {
                    this.state = 'rest';
                    this.remainingTime = this.settings.tabataRest;
                    this.audio.playRest();
                    this.updateUIState('rest');
                }
            }
            else if (this.mode === 'emom') {
                if (this.currentRound >= this.settings.emomRounds) {
                    this.finish();
                } else {
                    this.currentRound++;
                    this.remainingTime = this.settings.emomInterval;
                    this.audio.playGo();
                    this.updateUIState('work');
                }
            }
            else if (this.mode === 'amrap' || this.mode === 'timer') {
                this.finish();
            }
        }
        else if (this.state === 'rest') {
            if (this.mode === 'tabata') {
                this.currentRound++;
                this.state = 'work';
                this.remainingTime = this.settings.tabataWork;
                this.audio.playGo();
                this.updateUIState('work');
            }
        }
    }

    runForTimeLoop() {
        clearInterval(this.interval);
        this.updateUIState('work');

        this.interval = setInterval(() => {
            if (this.isPaused) return;

            const now = performance.now();
            const currentDelta = (now - this.startTime) / 1000;
            const totalElapsed = this.elapsedTime + currentDelta;

            // Note: We don't update this.elapsedTime continuously, only on pause.
            // But to save state correctly on "switchMode" without pausing explicitly in UI, 
            // saveCurrentState() calls pause(), which updates elapsedTime.

            this.display.textContent = this.formatTime(Math.floor(totalElapsed));
        }, 100);
    }

    // Override pause to capture elapsed time for stopwatch
    pause() {
        this.isPaused = true;
        clearInterval(this.interval);
        this.startBtn.textContent = 'RESUME';
        this.startBtn.classList.remove('running');

        if (this.mode === 'fortime' && this.state === 'work') {
            const now = performance.now();
            this.elapsedTime += (now - this.startTime) / 1000;
        }
    }

    startNextRound() {
        this.state = 'work';
        this.updateUIState('work');

        if (this.mode === 'timer') {
            this.remainingTime = this.settings.timerTime * 60;
        } else if (this.mode === 'amrap') {
            this.remainingTime = this.settings.amrapTime * 60;
        } else if (this.mode === 'emom') {
            this.remainingTime = this.settings.emomInterval;
        } else if (this.mode === 'tabata') {
            this.remainingTime = this.settings.tabataWork;
        }
    }

    finish() {
        this.state = 'finished';
        clearInterval(this.interval);
        this.display.textContent = 'DONE';
        this.audio.playComplete();
        this.startBtn.textContent = 'START';
        this.startBtn.classList.remove('running');
        this.statusLabel.textContent = 'FINISHED';
        this.statusLabel.className = 'status-label visible';
        document.body.className = 'state-finished';

        // Clear saved state for this mode on finish
        delete this.savedStates[this.mode];
    }

    reset() {
        clearInterval(this.interval);
        this.state = 'idle';
        this.isPaused = false;
        this.currentRound = 1;
        this.elapsedTime = 0;
        this.remainingTime = 0;

        this.startBtn.textContent = 'START';
        this.startBtn.classList.remove('running');
        this.updateSettingsVisibility();
        this.roundInfo.textContent = '';
        this.statusLabel.classList.remove('visible');
        document.body.className = '';
        document.body.classList.remove('state-warning');

        delete this.savedStates[this.mode]; // Clear memory
    }

    resetRuntime() {
        this.currentRound = 1;
        this.elapsedTime = 0;
    }

    updateUIState(phase) {
        document.body.className = `state-${phase}`;
        this.statusLabel.textContent = phase.toUpperCase();
        this.statusLabel.classList.add('visible');

        if (this.mode === 'emom' || this.mode === 'tabata') {
            const total = this.mode === 'tabata' ? this.settings.tabataRounds : this.settings.emomRounds;
            this.roundInfo.textContent = `ROUND ${this.currentRound} / ${total}`;
        } else {
            this.roundInfo.textContent = '';
        }
    }

    formatTime(seconds) {
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }

    updateClock() {
        const now = new Date();
        this.display.textContent = now.toLocaleTimeString([], { hour12: false });
    }
}

const timer = new WodTimer();
