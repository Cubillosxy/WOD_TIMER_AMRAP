class OfflineToolsManager {
    constructor() {
        // Playlists organizadas por categoría (archivos comprimidos en assets/media/)
        const challengeTracks = [
            {
                id: 'ch-daledon',
                title: 'Dale Don Dale',
                artist: 'Don Omar',
                mediaType: 'audio',
                badge: 'CHALLENGE',
                src: 'assets/media/challenges/dale-don-dale.m4a',
                challenge: 'Un abdominal por cada “dale”.'
            },
            {
                id: 'ch-gasolina',
                title: 'Gasolina',
                artist: 'Daddy Yankee',
                mediaType: 'video',
                badge: 'VIDEO · RETO',
                src: 'assets/media/challenges/gasolina.mp4',
                challenge: 'Un burpee / sentadilla por cada “gasolina”.'
            },
            {
                id: 'ch-dogs',
                title: 'Who Let the Dogs Out',
                artist: 'Baha Men',
                mediaType: 'video',
                badge: 'VIDEO · RETO',
                src: 'assets/media/challenges/who-let-the-dogs-out.mp4',
                challenge: 'Un burpee / sentadilla por cada ladrido.'
            },
            {
                id: 'ch-thunder',
                title: 'Thunderstruck',
                artist: 'AC/DC',
                mediaType: 'audio',
                badge: 'CHALLENGE',
                src: 'assets/media/challenges/thunderstruck.m4a',
                challenge: 'Sentadilla con salto por cada “thunder”.'
            },
            {
                id: 'ch-azul',
                title: 'Azul',
                artist: 'Cristian Castro',
                mediaType: 'audio',
                badge: 'CHALLENGE',
                src: 'assets/media/challenges/azul.m4a',
                challenge: 'Una sentadilla / burpee por cada “azul”.'
            },
            {
                id: 'ch-sally',
                title: 'Bring Sally Up',
                artist: 'Workout Song · Moby',
                mediaType: 'audio',
                badge: 'CHALLENGE',
                src: 'assets/media/challenges/bring-sally-up.m4a',
                challenge: 'Cuando diga "UP" se sube y cuando diga "DOWN" se baja (mantén abajo). PRO: con disco.'
            }
        ];

        this.playlists = {
            tabata: [
                {
                    id: 'tb-rocky',
                    title: 'Tabata Rocky',
                    artist: 'Rocky Theme · Tabata 20/10',
                    mediaType: 'video',
                    badge: 'VIDEO MP4',
                    src: 'assets/media/tabata/tabata-rocky.mp4'
                },
                {
                    id: 'tb-africa',
                    title: 'Tabata Africa',
                    artist: 'Toto · Tabata Workout',
                    mediaType: 'video',
                    badge: 'VIDEO MP4',
                    src: 'assets/media/tabata/tabata-africa.mp4'
                },
                {
                    id: 'tb-justdance',
                    title: 'Tabata Just Dance',
                    artist: 'Lady Gaga · Tabata Workout',
                    mediaType: 'video',
                    badge: 'VIDEO MP4',
                    src: 'assets/media/tabata/tabata-just-dance.mp4'
                }
            ],
            challenges: challengeTracks,
            music: [
                {
                    id: 'mu-30min',
                    title: '30 Min Mix — Reggaetón Viejo',
                    artist: 'Old School Mix · 30 Minutos',
                    mediaType: 'audio',
                    badge: '30 MIN',
                    src: 'assets/media/music/30-min-reggaeton-old-school.m4a'
                },
                {
                    id: 'mu-10min',
                    title: '10 Minutes Workout Mix',
                    artist: 'High Energy · 10 Minutos',
                    mediaType: 'audio',
                    badge: '10 MIN',
                    src: 'assets/media/music/10-min-workout.m4a'
                },
                {
                    id: 'mu-grave',
                    title: 'O Grave Bater',
                    artist: 'MC Kevinho · Workout',
                    mediaType: 'audio',
                    badge: 'AUDIO',
                    src: 'assets/media/music/o-grave-bater.m4a'
                },
                {
                    id: 'mu-explosao',
                    title: 'Olha a Explosão',
                    artist: 'MC Kevinho · Workout',
                    mediaType: 'audio',
                    badge: 'AUDIO',
                    src: 'assets/media/music/olha-a-explosao.m4a'
                },
                {
                    id: 'mu-soltar',
                    title: 'Pode Se Soltar',
                    artist: 'Jerry Smith · Workout',
                    mediaType: 'audio',
                    badge: 'AUDIO',
                    src: 'assets/media/music/pode-se-soltar.m4a'
                },
                ...challengeTracks.map(t => ({ ...t, id: 'mu-' + t.id }))
            ]
        };

        // Estado del panel y reproductor
        this.isOpen = false;
        this.selectedCategory = 'tabata';
        this.playingCategory = 'tabata';
        this.playingIndex = -1;
        this.currentTrack = null;
        this.isPlaying = false;
        this.autoAdvance = true;
        this.isSeeking = false;

        // Bóveda persistente (IndexedDB + Blob URL en memoria) para descomprimir/preparar 1 sola vez
        this.dbName = 'wod_offline_media_vault_v1';
        this.storeName = 'tracks';
        this.dbPromise = null;
        this.blobUrlCache = new Map();
        this.readyTracks = new Set(this.loadReadySet());
        this.unpackingSrc = null;

        // Referencias DOM
        this.dock = document.getElementById('offline-dock');
        this.fab = document.getElementById('offline-tools-fab');
        this.panel = document.getElementById('offline-tools-panel');
        this.collapseBtn = document.getElementById('offline-tools-collapse');
        this.overlay = document.getElementById('offline-tools-overlay');
        this.statusDot = document.getElementById('offline-status-dot');
        this.tabsContainer = document.getElementById('offline-music-tabs');
        this.trackListEl = document.getElementById('offline-track-list');

        // Reproductor interno
        this.videoStage = document.getElementById('player-video-stage');
        this.mediaEl = document.getElementById('workout-media-video');
        this.btnVideoFs = document.getElementById('btn-video-fullscreen');
        this.challengeBanner = document.getElementById('player-challenge-banner');
        this.trackTitleEl = document.getElementById('player-track-title');
        this.trackSubEl = document.getElementById('player-track-sub');
        this.btnAuto = document.getElementById('btn-player-auto');
        this.seekBar = document.getElementById('player-seek-bar');
        this.timeCurrentEl = document.getElementById('player-time-current');
        this.timeTotalEl = document.getElementById('player-time-total');
        this.btnPrev = document.getElementById('btn-player-prev');
        this.btnToggle = document.getElementById('btn-player-toggle');
        this.btnNext = document.getElementById('btn-player-next');

        // Mini barra externa (visible en toda parte cuando el menú está cerrado)
        this.miniBar = document.getElementById('offline-mini-bar');
        this.miniPlayBtn = document.getElementById('mini-bar-play');
        this.miniExpandBtn = document.getElementById('mini-bar-expand');
        this.miniTitleEl = document.getElementById('mini-bar-title');
        this.miniTimeEl = document.getElementById('mini-bar-time');
        this.miniNextBtn = document.getElementById('mini-bar-next');
        this.miniProgressFill = document.getElementById('mini-bar-progress-fill');

        this.init();
    }

    init() {
        if (!this.panel || !this.mediaEl) return;
        this.initVaultKeys();
        this.renderTrackList();
        this.bindEvents();
    }

    // =========================================
    // BÓVEDA DE DESCOMPRESIÓN ÚNICA (INDEXEDDB)
    // =========================================
    loadReadySet() {
        try {
            const raw = localStorage.getItem('wod_ready_tracks_v1');
            return raw ? JSON.parse(raw) : [];
        } catch {
            return [];
        }
    }

    markTrackReady(src) {
        this.readyTracks.add(src);
        try {
            localStorage.setItem('wod_ready_tracks_v1', JSON.stringify([...this.readyTracks]));
        } catch {}
    }

    openVaultDB() {
        if (this.dbPromise) return this.dbPromise;
        this.dbPromise = new Promise((resolve) => {
            if (!window.indexedDB) {
                resolve(null);
                return;
            }
            const req = indexedDB.open(this.dbName, 1);
            req.onupgradeneeded = (e) => {
                const db = e.target.result;
                if (!db.objectStoreNames.contains(this.storeName)) {
                    db.createObjectStore(this.storeName);
                }
            };
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => resolve(null);
        });
        return this.dbPromise;
    }

    async initVaultKeys() {
        const db = await this.openVaultDB();
        if (!db) return;
        try {
            const tx = db.transaction(this.storeName, 'readonly');
            const store = tx.objectStore(this.storeName);
            const req = store.getAllKeys();
            req.onsuccess = () => {
                if (Array.isArray(req.result)) {
                    req.result.forEach(k => this.markTrackReady(k));
                    this.renderTrackList();
                }
            };
        } catch {}
    }

    async getFromVault(src) {
        const db = await this.openVaultDB();
        if (!db) return null;
        return new Promise((resolve) => {
            try {
                const tx = db.transaction(this.storeName, 'readonly');
                const req = tx.objectStore(this.storeName).get(src);
                req.onsuccess = () => resolve(req.result || null);
                req.onerror = () => resolve(null);
            } catch {
                resolve(null);
            }
        });
    }

    async saveToVault(src, blob) {
        const db = await this.openVaultDB();
        if (!db) return;
        return new Promise((resolve) => {
            try {
                const tx = db.transaction(this.storeName, 'readwrite');
                tx.objectStore(this.storeName).put(blob, src);
                tx.oncomplete = () => resolve(true);
                tx.onerror = () => resolve(false);
            } catch {
                resolve(false);
            }
        });
    }

    /**
     * Obtiene la URL reproducible de una pista:
     * 1. Si ya está en memoria en esta sesión, la devuelve al instante.
     * 2. Si ya fue descomprimida/preparada antes en IndexedDB, la carga sin volver a descomprimir.
     * 3. Si es la primera vez, la descarga/descomprime (soporta .gz vía DecompressionStream),
     *    la guarda en IndexedDB para siempre y devuelve el ObjectURL.
     * 4. Si se abre por protocolo file:// (donde fetch no aplica), usa el stream comprimido directo y lo marca listo.
     */
    async resolvePlayableUrl(track) {
        const src = track.src;

        if (this.blobUrlCache.has(src)) {
            this.markTrackReady(src);
            return this.blobUrlCache.get(src);
        }

        const cachedBlob = await this.getFromVault(src);
        if (cachedBlob instanceof Blob && cachedBlob.size > 0) {
            const url = URL.createObjectURL(cachedBlob);
            this.blobUrlCache.set(src, url);
            this.markTrackReady(src);
            return url;
        }

        if (window.location.protocol !== 'file:') {
            try {
                this.unpackingSrc = src;
                this.renderTrackList();
                if (this.trackSubEl) {
                    this.trackSubEl.textContent = 'Preparando y guardando en caché local...';
                }

                let response = await fetch(src);
                let isGzipped = src.endsWith('.gz');

                if (!response.ok && !isGzipped) {
                    const gzResp = await fetch(src + '.gz').catch(() => null);
                    if (gzResp && gzResp.ok) {
                        response = gzResp;
                        isGzipped = true;
                    }
                }

                if (response && response.ok) {
                    let blob;
                    if (isGzipped && typeof DecompressionStream !== 'undefined' && response.body) {
                        const ds = new DecompressionStream('gzip');
                        const decompressedStream = response.body.pipeThrough(ds);
                        const mime = track.mediaType === 'video' ? 'video/mp4' : 'audio/mp4';
                        blob = await new Response(decompressedStream, { headers: { 'Content-Type': mime } }).blob();
                    } else {
                        blob = await response.blob();
                    }

                    if (blob && blob.size > 0) {
                        await this.saveToVault(src, blob);
                        const url = URL.createObjectURL(blob);
                        this.blobUrlCache.set(src, url);
                        this.markTrackReady(src);
                        this.unpackingSrc = null;
                        return url;
                    }
                }
            } catch {}
            this.unpackingSrc = null;
        }

        this.markTrackReady(src);
        return src;
    }

    bindEvents() {
        // Abrir / cerrar menú lateral
        this.fab?.addEventListener('click', () => this.togglePanel(true));
        this.collapseBtn?.addEventListener('click', () => this.togglePanel(false));
        this.overlay?.addEventListener('click', () => this.togglePanel(false));
        this.miniExpandBtn?.addEventListener('click', () => this.togglePanel(true));

        // Pestañas de categoría
        this.tabsContainer?.querySelectorAll('.offline-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const cat = tab.dataset.category;
                if (!cat) return;
                this.selectedCategory = cat;
                this.tabsContainer.querySelectorAll('.offline-tab').forEach(t => {
                    t.classList.toggle('active', t.dataset.category === cat);
                });
                this.renderTrackList();
            });
        });

        // Controles del reproductor
        this.btnToggle?.addEventListener('click', () => this.togglePlay());
        this.miniPlayBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            this.togglePlay();
        });

        this.btnPrev?.addEventListener('click', () => this.playPrevious());
        this.btnNext?.addEventListener('click', () => this.playNext());
        this.miniNextBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            this.playNext();
        });

        // Botón AUTO (salto automático hacia abajo en la lista actual)
        this.btnAuto?.addEventListener('click', () => {
            this.autoAdvance = !this.autoAdvance;
            this.btnAuto.classList.toggle('active', this.autoAdvance);
        });

        // Click en el video para Play/Pause
        this.mediaEl.addEventListener('click', () => this.togglePlay());

        // Pantalla completa para el video
        this.btnVideoFs?.addEventListener('click', (e) => {
            e.stopPropagation();
            if (this.mediaEl.requestFullscreen) {
                this.mediaEl.requestFullscreen().catch(() => {});
            } else if (this.mediaEl.webkitEnterFullscreen) {
                this.mediaEl.webkitEnterFullscreen();
            }
        });

        // Seek bar interactiva
        this.seekBar?.addEventListener('input', () => {
            this.isSeeking = true;
            const dur = this.mediaEl.duration || 0;
            if (dur > 0) {
                const target = (parseFloat(this.seekBar.value) / 100) * dur;
                this.timeCurrentEl.textContent = this.formatTime(target);
            }
        });

        this.seekBar?.addEventListener('change', () => {
            const dur = this.mediaEl.duration || 0;
            if (dur > 0) {
                this.mediaEl.currentTime = (parseFloat(this.seekBar.value) / 100) * dur;
            }
            this.isSeeking = false;
        });

        // Eventos del elemento multimedia
        this.mediaEl.addEventListener('timeupdate', () => this.onTimeUpdate());
        this.mediaEl.addEventListener('loadedmetadata', () => this.onTimeUpdate());
        this.mediaEl.addEventListener('play', () => {
            this.isPlaying = true;
            this.updatePlayButtons();
            this.renderTrackList();
        });
        this.mediaEl.addEventListener('pause', () => {
            this.isPlaying = false;
            this.updatePlayButtons();
            this.renderTrackList();
        });
        this.mediaEl.addEventListener('ended', () => {
            this.isPlaying = false;
            this.updatePlayButtons();
            if (this.autoAdvance) {
                this.playNext(true);
            } else {
                this.renderTrackList();
            }
        });
    }

    togglePanel(forceState) {
        this.isOpen = typeof forceState === 'boolean' ? forceState : !this.isOpen;
        this.panel?.classList.toggle('open', this.isOpen);
        this.overlay?.classList.toggle('open', this.isOpen);
        this.dock?.classList.toggle('panel-open', this.isOpen);
    }

    renderTrackList() {
        if (!this.trackListEl) return;
        const list = this.playlists[this.selectedCategory] || [];

        this.trackListEl.innerHTML = list.map((track, idx) => {
            const isCurrent = this.currentTrack &&
                this.playingCategory === this.selectedCategory &&
                this.playingIndex === idx;
            const activeClass = isCurrent ? 'active' : '';
            const isReady = this.readyTracks.has(track.src);
            const isUnpacking = this.unpackingSrc === track.src;

            const badgeContent = isCurrent && this.isPlaying
                ? `<span class="track-eq"><i></i><i></i><i></i></span>`
                : `${idx + 1}`;

            const tagClass = track.mediaType === 'video' ? 'tag-video' : '';
            const readyBadge = isUnpacking
                ? `<span class="track-tag tag-unpacking">⏳ PREP...</span>`
                : isReady
                    ? `<span class="track-tag tag-ready" title="Lista en caché local sin descomprimir de nuevo">✓ LISTO</span>`
                    : '';

            const challengeHtml = track.challenge
                ? `<div class="track-challenge-note">⚡ ${track.challenge}</div>`
                : '';

            return `
                <div class="offline-track-card ${activeClass}" data-index="${idx}">
                    <div class="track-card-main">
                        <div class="track-index-badge" aria-hidden="true">${badgeContent}</div>
                        <div class="track-info-col">
                            <div class="track-title-row">
                                <span class="track-name">${track.title}</span>
                                <div class="track-badges-group">
                                    ${readyBadge}
                                    <span class="track-tag ${tagClass}">${track.badge || track.mediaType.toUpperCase()}</span>
                                </div>
                            </div>
                            <span class="track-artist">${track.artist}</span>
                        </div>
                    </div>
                    ${challengeHtml}
                </div>
            `;
        }).join('');

        // Eventos click en cada tarjeta
        this.trackListEl.querySelectorAll('.offline-track-card').forEach(card => {
            card.addEventListener('click', () => {
                const idx = parseInt(card.dataset.index, 10);
                this.selectAndPlay(this.selectedCategory, idx);
            });
        });
    }

    async selectAndPlay(category, index) {
        const list = this.playlists[category] || [];
        const track = list[index];
        if (!track) return;

        const isSameTrack = this.currentTrack &&
            this.playingCategory === category &&
            this.playingIndex === index;

        if (isSameTrack) {
            this.togglePlay();
            return;
        }

        this.playingCategory = category;
        this.playingIndex = index;
        this.currentTrack = track;

        // Mostrar u ocultar visor de video según tipo de archivo
        if (track.mediaType === 'video') {
            this.videoStage.style.display = 'block';
        } else {
            this.videoStage.style.display = 'none';
        }

        // Mostrar u ocultar banner de reto en el reproductor
        if (track.challenge) {
            this.challengeBanner.style.display = 'block';
            this.challengeBanner.innerHTML = `<strong>⚡ Reto:</strong> ${track.challenge}`;
        } else {
            this.challengeBanner.style.display = 'none';
            this.challengeBanner.textContent = '';
        }

        // Actualizar textos en reproductor y mini-barra
        this.trackTitleEl.textContent = track.title;
        this.trackSubEl.textContent = `${track.artist} · ${track.mediaType.toUpperCase()}`;
        this.miniTitleEl.textContent = track.title;
        this.miniBar.style.display = 'flex';

        // Resolver URL desde bóveda local (descomprime/guarda solo la primera vez)
        const playableUrl = await this.resolvePlayableUrl(track);
        if (this.currentTrack !== track) return;

        this.trackSubEl.textContent = `${track.artist} · ${track.mediaType.toUpperCase()} · ✓ Listo`;
        this.mediaEl.src = playableUrl;
        this.mediaEl.load();
        this.mediaEl.play().catch(() => {
            this.isPlaying = false;
            this.updatePlayButtons();
        });

        this.renderTrackList();
    }

    togglePlay() {
        if (!this.currentTrack) {
            this.selectAndPlay(this.selectedCategory, 0);
            return;
        }

        if (this.mediaEl.paused) {
            this.mediaEl.play().catch(() => {});
        } else {
            this.mediaEl.pause();
        }
    }

    playNext(fromAutoEnded = false) {
        const list = this.playlists[this.playingCategory] || this.playlists[this.selectedCategory] || [];
        if (!list.length) return;

        const nextIdx = this.playingIndex + 1;
        if (nextIdx < list.length) {
            this.selectAndPlay(this.playingCategory, nextIdx);
        } else if (!fromAutoEnded) {
            this.selectAndPlay(this.playingCategory, 0);
        } else {
            this.renderTrackList();
        }
    }

    playPrevious() {
        const list = this.playlists[this.playingCategory] || this.playlists[this.selectedCategory] || [];
        if (!list.length) return;

        if (this.mediaEl.currentTime > 3) {
            this.mediaEl.currentTime = 0;
            return;
        }

        const prevIdx = this.playingIndex > 0 ? this.playingIndex - 1 : list.length - 1;
        this.selectAndPlay(this.playingCategory, prevIdx);
    }

    onTimeUpdate() {
        const cur = this.mediaEl.currentTime || 0;
        const dur = this.mediaEl.duration || 0;
        const pct = dur > 0 ? Math.min((cur / dur) * 100, 100) : 0;

        if (!this.isSeeking && this.seekBar) {
            this.seekBar.value = pct;
        }

        const curStr = this.formatTime(cur);
        const durStr = this.formatTime(dur);

        if (this.timeCurrentEl) this.timeCurrentEl.textContent = curStr;
        if (this.timeTotalEl) this.timeTotalEl.textContent = durStr;
        if (this.miniTimeEl) this.miniTimeEl.textContent = `${curStr} / ${durStr}`;
        if (this.miniProgressFill) this.miniProgressFill.style.width = `${pct}%`;
    }

    updatePlayButtons() {
        const symbol = this.isPlaying ? '⏸' : '▶';
        if (this.btnToggle) this.btnToggle.textContent = symbol;
        if (this.miniPlayBtn) this.miniPlayBtn.textContent = symbol;
        this.fab?.classList.toggle('is-playing', this.isPlaying);
        this.statusDot?.classList.toggle('playing', this.isPlaying);
    }

    formatTime(seconds) {
        if (!isFinite(seconds) || seconds < 0) return '00:00';
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.offlineTools = new OfflineToolsManager();
});
