class OfflineToolsManager {
    constructor() {
        // =========================================
        // 1. MÚSICA Y VIDEOS (PLAYLISTS)
        // =========================================
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

        // =========================================
        // 2. MOVILIDAD Y ACTIVACIÓN DINÁMICA
        // =========================================
        this.mobilityData = {
            walks: [
                {
                    code: 'MOB-01',
                    title: 'Animal Flow & Caminatas de Locomoción',
                    duration: '8 MIN · FLUJO CONTINUO',
                    focus: 'Hombros, core, cadera y tobillo (sin estiramiento pasivo)',
                    steps: [
                        '20m Bear Crawl (Caminata de oso: rodillas a 3 cm del suelo, espalda plana)',
                        '15m Inchworm + Push-Up (Caminata de gusano llegando a plancha y flexión)',
                        '20m Spiderman Lunge Walk + Rotación Torácica (codo al empeine + brazo al cielo)',
                        '15m Duck Walk (Caminata en sentadilla profunda manteniendo talones apoyados)',
                        '20m Crab Walk (Caminata de cangrejo activando tríceps y extensión de cadera)'
                    ],
                    equipment: 'Pista / pasillo despejado del box.'
                },
                {
                    code: 'MOB-02',
                    title: 'Caminata Overhead & Bisagra Dinámica',
                    duration: '6 MIN · 2 RONDAS',
                    focus: 'Estabilidad escapular, isquiotibiales y recepción en squat',
                    steps: [
                        '20m Frankenstein Walk (patada frontal a mano contraria sin doblar columna)',
                        '20m Overhead Plate Walk (caminata en puntas y talones con disco sobre la cabeza)',
                        '15m Lunge Walk con twist sobre pierna delantera usando soporte o disco',
                        '10 Kang Squats (Good Morning hacia sentadilla profunda y regreso controlado)'
                    ],
                    equipment: 'Disco de 15 lb o 10 lb, soporte para lunges.'
                },
                {
                    code: 'MOB-03',
                    title: 'Flow de Cuerda & Desplazamiento Lateral',
                    duration: '7 MIN · EMOM DINÁMICO',
                    focus: 'Activación de tren inferior, agarre y ritmo cardíaco',
                    steps: [
                        'Min 1: 40 seg Sentadilla isométrica activa con movimiento de Battle Rope',
                        'Min 2: 20m Desplazamiento lateral en cuarto de sentadilla + salto vertical cada 4 pasos',
                        'Min 3: 10 Scapular Pull-Ups colgado en estructura + 20 seg Hang activo',
                        'Repetir secuencia 2 veces sin pausa larga'
                    ],
                    equipment: 'Cuerda grande (Battle Rope) y estructura de dominadas.'
                }
            ],
            partner: [
                {
                    code: 'PMOB-01',
                    title: 'Movilidad en Parejas · Squat & Thoracic Pass',
                    duration: '8 MIN · PAREJAS',
                    focus: 'Apertura de cadera bajo carga compartida y rotación dorsal',
                    steps: [
                        '90 seg Sentadilla isométrica espalda con espalda + pase lateral de Wall Ball',
                        '10/10 Rotaciones torácicas en cuadrupedia con resistencia suave del compañero',
                        '60 seg Peso muerto rumano en espejo con banda elástica azul tirando hacia el compañero',
                        '12 Pase de balón medicinal por encima de la cabeza y entre las piernas (cadena posterior)'
                    ],
                    equipment: 'Balón medicinal (15 lb o 10 lb) y banda elástica azul o naranja.'
                },
                {
                    code: 'PMOB-02',
                    title: 'Partner Shoulder & Core Reactivo',
                    duration: '7 MIN · PAREJAS',
                    focus: 'Estabilidad de hombro para gymnastic / barbell y anti-rotación',
                    steps: [
                        '60 seg Plancha alta frente a frente: toque de mano cruzada + paso a Downward Dog',
                        '10/10 Apertura de hombros en estructura asistida por compañero (agarre supino/prono)',
                        '8/8 Sotts Press asistido con barra vacía: compañero corrige verticalidad de codos',
                        '60 seg Pallof Press isométrico en pareja con banda elástica negra o azul'
                    ],
                    equipment: 'Barra de 20 kg o 15 kg, banda elástica negra/azul, estructura y colchonetas.'
                }
            ],
            bands_kb: [
                {
                    code: 'BMOB-01',
                    title: 'Activación Articular con Bandas & Kettlebell',
                    duration: '8 MIN · PRE-WOD PESADO',
                    focus: 'Desbloqueo de tobillo/cadera para Squat Clean, Snatch y Thrusters',
                    steps: [
                        '15 Dislocaciones de hombro + 15 Band Pull-Aparts con banda elástica naranja',
                        '60 seg Goblet Squat Pry con Kettlebell (empujar rodillas con codos abriendo cadera)',
                        '12/12 Monster Walk lateral y diagonal con banda elástica azul o negra en rodillas',
                        '8/8 Kettlebell Arm-Bar + Windmill controlado en colchoneta'
                    ],
                    equipment: 'Kettlebell de 14 kg o 12 kg, bandas elásticas (negra, azul, naranja), colchoneta.'
                },
                {
                    code: 'BMOB-02',
                    title: 'Activación de Hombro, Anillas y Core',
                    duration: '6 MIN · PRE-GIMNÁSTICOS',
                    focus: 'Preparación para Pull-ups, Toes to Bar, Ring Dips y HSPU',
                    steps: [
                        '10 Scapular Push-ups + 8 Rollouts controlados con Rueda Abdominal (Ab Wheel)',
                        '10 Ring Support Swings suaves en anillas (bloqueo de codos y depresión escapular)',
                        '12 Press externo de manguito rotador con banda naranja anclada al rack',
                        '5 Wall Walks progresivos o Pike Push-ups en soportes de HSPU'
                    ],
                    equipment: 'Anillas, rueda abdominal, colchoneta, banda naranja y soportes HSPU.'
                }
            ]
        };

        // =========================================
        // 3. RUTINAS DE EJERCICIOS (WODS EXIGENTES)
        // =========================================
        this.wodsData = {
            partner: [
                {
                    code: 'PARTNER WOD #01 · REAL BOX',
                    title: 'Trifecta 45s Switch & Cash-Out',
                    format: '3 BLOQUES · PAREJAS · ALTA EXIGENCIA',
                    rmRef: '65% – 70% 1RM Cluster / Power Clean',
                    blocks: [
                        {
                            name: 'BLOQUE A · 24 RONDAS (Switch cada 45 seg · Time Cap 18 min)',
                            desc: 'Un compañero trabaja mientras el otro descansa. Cada 45 segundos suena cambio obligatorio y el compañero continúa exactamente donde quedó el anterior hasta completar 24 rondas:',
                            items: [
                                '4 Wall Balls (balón al target)',
                                '4 Pull-Ups (PRO: Chest-to-Bar)',
                                '4 American Kettlebell Swings (sobre la cabeza)',
                                '4 Burpees pecho al piso'
                            ]
                        },
                        {
                            name: 'BLOQUE B · AMRAP 12 MINUTOS',
                            desc: 'Máximas rondas en 12 minutos (Clusters repartidos libremente, V-Ups al mismo tiempo):',
                            items: [
                                '11 Squat Clusters con barra (Squat Clean + Thruster)',
                                '11 V-Ups Sincronizados en colchoneta'
                            ]
                        },
                        {
                            name: 'BLOQUE C · CASH-OUT FOR TIME (Cap 6 min)',
                            desc: 'Completar entre los dos para cerrar el entrenamiento:',
                            items: [
                                '39 Power Cleans (repartidos)',
                                '45 Toes to Bar (pies a la barra)'
                            ]
                        }
                    ],
                    weights: {
                        pro: 'Barra 135 / 95 lb (20kg + 45lb por lado H · 15kg + 25+5lb por lado M) · KB 24 / 20 kg · Wall Ball 20 / 15 lb',
                        open: 'Barra 95 / 65 lb (20kg + 25lb por lado H · 15kg + 15lb por lado M) · KB 20 / 14 kg · Wall Ball 15 / 10 lb'
                    },
                    equipment: 'Barra olímpica (20/15 kg), discos (45, 25, 15, 5 lb), Wall Ball (20/15/10 lb), Kettlebell (24/20/14 kg), estructura de dominadas y colchonetas.'
                },
                {
                    code: 'PARTNER WOD #02',
                    title: 'Rope, Sandbag & Synchro Devil',
                    format: 'FOR TIME · CAP 26 MIN · PAREJAS',
                    rmRef: '75% 1RM Deadlift / DB Pesadas',
                    blocks: [
                        {
                            name: 'BUY-IN COMPARTIDO',
                            desc: 'En pista abierta y máquina antes de tocar las mancuernas:',
                            items: [
                                '800m Run juntos cargando 1 Saco con agarre (20 kg / 10 kg)',
                                '60 Cal SkiErg o Bicicleta de CrossFit (repartidas)'
                            ]
                        },
                        {
                            name: '4 RONDAS POR TIEMPO',
                            desc: 'Un compañero trabaja en cuerda/saco mientras el otro sostiene isometría o alternan:',
                            items: [
                                '4 Trepar la cuerda grande (Rope Climbs, repartidas)',
                                '16 Devil Press Sincronizados con mancuernas',
                                '30m Sandbag Bear Hug Carry con Sandbag pesado',
                                '20 Ab Wheel Rollouts (rueda abdominal, repartidos)'
                            ]
                        }
                    ],
                    weights: {
                        pro: 'Mancuernas 50 / 35 lb · Sandbag 75 lb + Saco 30 kg · Cuerda sin salto',
                        open: 'Mancuernas 35 / 20 lb · Saco con agarre 20 / 10 kg · Rope Climb o 12 Pull-ups con banda negra/azul'
                    },
                    equipment: 'Cuerda grande para escalar, Sandbag de 75 lb, sacos con agarres (30/20/10 kg), mancuernas (50/35/20 lb), rueda abdominal, SkiErg o CrossFit Bike y pista abierta.'
                },
                {
                    code: 'PARTNER WOD #03',
                    title: 'Sled & Ring Engine',
                    format: 'EMOM 24 MIN (6 RONDAS) · PAREJAS',
                    rmRef: '80% 1RM Snatch / Carga Pesada en Trineo',
                    blocks: [
                        {
                            name: 'ESTACIONES DE 4 MINUTOS (TRABAJO EN RELEVO)',
                            desc: 'Completar la tarea de cada minuto entre los dos:',
                            items: [
                                'Min 1: 40m Sled Push + Pull en pista (20m empuje / 20m arrastre)',
                                'Min 2: 14 Ring Dips en anillas (PRO: 8 Ring Muscle-Ups) + 12 Box Jump Overs',
                                'Min 3: 10 Squat Snatches con barra olímpica (70–75% RM)',
                                'Min 4: Máximas calorías en Remo (RowErg) + 30 seg Battle Rope Squat Waves'
                            ]
                        }
                    ],
                    weights: {
                        pro: 'Barra Snatch 135 / 95 lb · Sled con 4x45 lb + 2x35 lb · Cajón 24 / 20"',
                        open: 'Barra Snatch 95 / 65 lb · Sled con 2x45 lb + 2x25 lb · Anillas con banda azul/negra'
                    },
                    equipment: 'Sled push/pull, discos (45, 35, 25 lb), anillas, cajón (box), barra olímpica (20/15 kg), remo y cuerda grande para sentadilla con movimiento.'
                }
            ],
            individual: [
                {
                    code: 'INDIVIDUAL WOD #01',
                    title: 'Heavy Barbell & Ring Complex',
                    format: 'FUERZA 10 MIN + FOR TIME 15 MIN',
                    rmRef: '80% – 85% 1RM Clean & Jerk',
                    blocks: [
                        {
                            name: 'PARTE A · EMOM 8 MIN (FUERZA OLÍMPICA)',
                            desc: '1 Complejo cada minuto subiendo del 75% al 85% de tu 1RM:',
                            items: [
                                '1 Power Clean + 1 Hang Squat Clean + 1 Split Jerk'
                            ]
                        },
                        {
                            name: 'PARTE B · 21 - 15 - 9 FOR TIME (Cap 14 min)',
                            desc: 'Después de cada ronda realiza 1 subida a la cuerda grande y 40m de carrera con saco:',
                            items: [
                                'Thrusters con barra olímpica',
                                'Toes to Bar en estructura',
                                'Handstand Push-Ups en soportes (HSPU)',
                                'Entre rondas: 1 Rope Climb + 40m Carry con saco de 20/30 kg'
                            ]
                        }
                    ],
                    weights: {
                        pro: 'Thrusters 115 / 80 lb (20kg + 35lb/lado H · 15kg + 20lb/lado M · ~65% RM) · Saco 30 / 20 kg',
                        open: 'Thrusters 85 / 55 lb (20kg + 20lb/lado H · 15kg + 10lb/lado M · ~55% RM) · Saco 20 / 10 kg'
                    },
                    equipment: 'Barra de 20 kg / 15 kg, discos (45, 35, 25, 15, 10, 5 lb), estructura, soportes para HSPU, cuerda grande para escalar y sacos con agarres (30/20/10 kg).'
                },
                {
                    code: 'INDIVIDUAL WOD #02',
                    title: 'Triple Erg & Kettlebell Hell',
                    format: 'AMRAP 20 MINUTOS · MOTOR PURO',
                    rmRef: '70% Capacidad Aeróbica / KB Pesada',
                    blocks: [
                        {
                            name: 'SECUENCIA CONTINUA DURANTE 20 MINUTOS',
                            desc: 'Mantén ritmo constante sin caer por debajo de 1000 cal/h en máquinas:',
                            items: [
                                '15 Cal SkiErg',
                                '15 American Kettlebell Swings',
                                '15 Cal Bicicleta de CrossFit',
                                '15 Goblet Walking Lunges (usando soportes o paso profundo)',
                                '15 Cal Remo (RowErg)',
                                '12 Ab Wheel Rollouts en colchoneta'
                            ]
                        }
                    ],
                    weights: {
                        pro: 'Kettlebell 24 kg (H) / 20 kg (M)',
                        open: 'Kettlebell 20 kg (H) / 14 kg o 12 kg (M)'
                    },
                    equipment: 'SkiErg, bicicleta de CrossFit, remo, pesas rusas (24, 20, 14, 12 kg), rueda para abdomen y colchoneta.'
                },
                {
                    code: 'INDIVIDUAL WOD #03',
                    title: 'Sandbag, DBs & Battle Rope Chipper',
                    format: 'FOR TIME · CAP 18 MIN',
                    rmRef: 'Mancuernas Pesadas (55 lb / 15 kg)',
                    blocks: [
                        {
                            name: 'CHIPPER DE ALTA DENSIDAD',
                            desc: 'Completar en orden de principio a fin:',
                            items: [
                                '800m Run en pista o campo abierto',
                                '40 Wall Balls (20 / 15 lb)',
                                '30 Dumbbell Box Step-Overs con par de mancuernas',
                                '20 Sandbag Cleans sobre el hombro con Sandbag de 75 lb (o saco de 30/20 kg)',
                                '60 seg acumulados de Sentadilla isométrica batiendo cuerda grande (Battle Rope)',
                                '15 Bar Muscle-Ups o 25 Chest-to-Bar Pull-Ups'
                            ]
                        }
                    ],
                    weights: {
                        pro: 'Mancuernas 55 / 35 lb (o par de 15 kg M) · Sandbag 75 lb · Wall Ball 20 / 15 lb',
                        open: 'Mancuernas 35 / 20 lb · Saco con agarres 20 / 10 kg · Wall Ball 15 / 10 lb'
                    },
                    equipment: 'Pista abierta, Wall Ball (20/15/10 lb), cajón (box), mancuernas (55–20 lb o 15 kg), Sandbag 75 lb / sacos (20/10 kg), cuerda grande y estructura.'
                }
            ]
        };

        // =========================================
        // 4. SERIE DE 100 ENTRENAMIENTOS HYROX (#001 – #100)
        // =========================================
        this.hyroxCatalog = this.buildHyrox100Catalog();
        this.hyroxMode = 'individual'; // 'individual' | 'partner'
        this.hyroxFilter = 'recent';   // 'recent' | 'all'
        this.hyroxSearch = '';
        this.selectedHyroxNumber = 1;

        // =========================================
        // 5. ESTADO DE NAVEGACIÓN Y CALCULADORAS
        // =========================================
        this.activeModule = 'music';   // 'music' | 'mobility' | 'wods' | 'hyrox' | 'calc'
        this.selectedCategory = 'tabata';
        this.mobilityCategory = 'walks';
        this.wodsCategory = 'partner';
        this.calcCategory = 'rm';      // 'rm' | 'bmi'

        // Estado de Calculadora RM e IMC
        this.rmState = {
            oneRm: 185,
            unit: 'lb',     // 'lb' | 'kg'
            barKg: 20,      // 20 (H) | 15 (M)
            customPct: 75
        };
        this.bmiState = {
            heightCm: 174,
            weightKg: 76
        };

        // Estado del panel y reproductor
        this.isOpen = false;
        this.playingCategory = 'tabata';
        this.playingIndex = -1;
        this.currentTrack = null;
        this.isPlaying = false;
        this.autoAdvance = true;
        this.isSeeking = false;

        // Bóveda persistente (IndexedDB + Blob URL en memoria)
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
        this.sectionTitleEl = document.getElementById('offline-section-title');
        this.moduleNav = document.getElementById('offline-module-nav');
        this.tabsContainer = document.getElementById('offline-music-tabs');
        this.trackListEl = document.getElementById('offline-track-list');

        // Reproductor interno
        this.playerDock = document.getElementById('offline-player-dock');
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

        // Mini barra externa
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
        this.renderSubTabs();
        this.renderModuleBody();
        this.bindEvents();
    }

    // =========================================
    // GENERADOR DE LOS 100 HYROX NUMERADOS (#001 – #100)
    // =========================================
    buildHyrox100Catalog() {
        // Los eventos más recientes primero (#001 Madrid, #002 Tokio, #003 Barcelona...) + serie completa hasta #100
        const cities = [
            { city: 'HYROX Madrid', tag: 'ESPAÑA · TEMPORADA RECIENTE', focus: 'Simulación Oficial Estándar · Pista Abierta', variant: 'standard' },
            { city: 'HYROX Tokio', tag: 'JAPÓN · TEMPORADA RECIENTE', focus: 'Edición Velocidad & Transiciones Explosivas', variant: 'speed' },
            { city: 'HYROX Barcelona', tag: 'ESPAÑA · TEMPORADA RECIENTE', focus: 'Edición Resistencia & Sled Heavy Drive', variant: 'heavy_sled' },
            { city: 'HYROX Chicago', tag: 'USA · MAJOR SERIES', focus: 'Campeonato Norteamericano · Engine & Bike Split', variant: 'bike_mix' },
            { city: 'HYROX Berlín', tag: 'ALEMANIA · TEMPLO RÁPIDO', focus: 'Ritmo de Récord Mundial · Negative Split Runs', variant: 'standard' },
            { city: 'HYROX Londres', tag: 'UK · EXCEL ARENA', focus: 'Alta Densidad de Pierna & Grip Overload', variant: 'grip' },
            { city: 'HYROX Ciudad de México', tag: 'MÉXICO · ALTITUD 2240M', focus: 'Capacidad Aeróbica en Hipoxia & Wall Ball Unbroken', variant: 'altitude' },
            { city: 'HYROX Milán', tag: 'ITALIA · POWER EDITION', focus: 'Trineo Pesado + Kettlebell Farmers Intenso', variant: 'heavy_sled' },
            { city: 'HYROX Ámsterdam', tag: 'PAÍSES BAJOS · ENGINE', focus: 'Triple Ergómetro (SkiErg + Remo + CrossFit Bike)', variant: 'bike_mix' },
            { city: 'HYROX Las Vegas', tag: 'USA · CHAMPIONSHIP', focus: 'Final de Temporada · Estándar Pro Exigente', variant: 'standard' },
            { city: 'HYROX París', tag: 'FRANCIA · GRAND PALAIS', focus: 'Compromiso Muscular de Tren Inferior', variant: 'grip' },
            { city: 'HYROX Monterrey Box', tag: 'COLOMBIA · EDICIÓN ESPECIAL', focus: 'Adaptación Exigente con Cuerda, Sled y Sandbag 75 lb', variant: 'box_special' }
        ];

        const extraVenues = [
            'Hamburgo', 'Múnich', 'Colonia', 'Frankfurt', 'Stuttgart', 'Karlsruhe',
            'Viena', 'Zúrich', 'Ginebra', 'Estocolmo', 'Copenhague', 'Oslo',
            'Helsinki', 'Varsovia', 'Katowice', 'Praga', 'Budapest', 'Dublín',
            'Mánchester', 'Birmingham', 'Glasgow', 'Cardiff', 'Valencia', 'Málaga',
            'Bilbao', 'Sevilla', 'Lisboa', 'Oporto', 'Roma', 'Turín',
            'Bolonia', 'Rimini', 'Bruselas', 'Róterdam', 'Maastricht', 'Niza',
            'Lyon', 'Burdeos', 'Toulouse', 'Nueva York', 'Dallas', 'Houston',
            'Miami', 'Los Ángeles', 'Anaheim', 'San Diego', 'Seattle', 'Denver',
            'Boston', 'Atlanta', 'Washington DC', 'Toronto', 'Vancouver', 'Montreal',
            'Monterrey MX', 'Guadalajara', 'Bogotá', 'Medellín', 'Cali', 'Santiago',
            'Buenos Aires', 'São Paulo', 'Río de Janeiro', 'Lima', 'Sídney', 'Melbourne',
            'Brisbane', 'Perth', 'Auckland', 'Singapur', 'Hong Kong', 'Seúl',
            'Busan', 'Taipéi', 'Osaka', 'Yokohama', 'Dubái', 'Abu Dabi',
            'Doha', 'Riad', 'Ciudad del Cabo', 'Johannesburgo', 'El Cairo', 'Estambul',
            'Atenas', 'Nicosia', 'Mallorca', 'Ibiza'
        ];

        const catalog = [];
        for (let i = 1; i <= 100; i++) {
            const numStr = String(i).padStart(3, '0');
            let base;
            if (i <= cities.length) {
                base = cities[i - 1];
            } else {
                const venueName = extraVenues[(i - cities.length - 1) % extraVenues.length];
                const variants = ['standard', 'speed', 'heavy_sled', 'bike_mix', 'grip', 'box_special'];
                const v = variants[i % variants.length];
                const focusMap = {
                    standard: 'Simulación Oficial 8x1km + 8 Estaciones',
                    speed: 'Intervalos Rápidos 8x600m + Estaciones Explosivas',
                    heavy_sled: 'Sobrecarga de Trineo & Sandbag 75 lb',
                    bike_mix: 'Híbrido Pista Abierta + SkiErg / Remo / Bike',
                    grip: 'Resistencia de Agarre, Cuerda y Farmers Carry',
                    box_special: 'Edición Especial de Box · Fuerza + Metcon'
                };
                base = {
                    city: `HYROX ${venueName}`,
                    tag: `SERIE MUNDIAL #${numStr} / 100`,
                    focus: focusMap[v],
                    variant: v
                };
            }

            const runDist = base.variant === 'speed' ? '800m Run en pista/campo abierto' : '1000m Run en pista/campo abierto';
            const station5Machine = base.variant === 'bike_mix'
                ? '1000m Remo (o 60 Cal Bicicleta de CrossFit)'
                : '1000m Remo (RowErg)';
            const station4Move = base.variant === 'box_special'
                ? '80m Burpee Broad Jumps + 2 Subidas a Cuerda Grande'
                : '80m Burpee Broad Jumps en pista/pasillo';

            catalog.push({
                number: i,
                code: `#${numStr} / 100`,
                title: base.city,
                tag: base.tag,
                focus: base.focus,
                runNote: `Intercalar **${runDist}** antes de cada una de las 8 estaciones numeradas:`,
                stations: [
                    { num: '01', name: '1000m SkiErg', ind: '1000m completos manteniendo damper 6–8', part: '1000m entre los dos (relevos cada 250m)' },
                    { num: '02', name: '50m Sled Push (Empuje de Trineo)', ind: '50m en tramos de 12.5m o 25m en pista', part: '50m repartidos (cambio cada 12.5m)' },
                    { num: '03', name: '50m Sled Pull (Arrastre con Cuerda)', ind: '50m tracción con cuerda grande y trineo', part: '50m repartidos (tracción explosiva de cadera)' },
                    { num: '04', name: station4Move, ind: '80m continuos midiendo zancada profunda', part: '80m alternando cada 10 saltos con el compañero' },
                    { num: '05', name: station5Machine, ind: '1000m a ritmo de umbral (< 1:55/500m)', part: '1000m en relevos de 250m a máxima potencia' },
                    { num: '06', name: '200m Farmers Carry', ind: '200m en pista con par de Kettlebells o Mancuernas', part: '200m repartidos en tramos de 50m sin soltar al suelo' },
                    { num: '07', name: '100m Sandbag Lunges', ind: '100m zancadas tocando rodilla atrás (con soporte si necesitas)', part: '100m pasando el Sandbag al hombro sin tocar el piso' },
                    { num: '08', name: '100 Wall Balls', ind: '100 repeticiones rompiendo paralelo al target', part: '100 repeticiones en series de 15–20 (cambio rápido)' }
                ],
                weights: {
                    pro: 'Sled Push: 4x45 lb + 2x35 lb (H) / 3x45 lb (M) · Sled Pull: 3x45 lb + 25 lb (H) / 2x45 lb + 25 lb (M) · Farmers: 2x24 kg KB o 2x55 lb DB (H) / 2x20 kg KB (M) · Lunges: Sandbag 75 lb (H) / Saco 20 kg (M) · Wall Ball: 20 lb (H) / 15 lb (M)',
                    open: 'Sled Push: 3x45 lb (H) / 2x45 lb (M) · Sled Pull: 2x45 lb (H) / 1x45 lb + 25 lb (M) · Farmers: 2x20 kg KB (H) / 2x14 kg o 12 kg KB (M) · Lunges: Saco 20 kg (H) / Saco 10 kg (M) · Wall Ball: 15 lb (H) / 10 lb (M)'
                },
                equipment: 'Pista o campo abierto, SkiErg, Sled push/pull + cuerda grande, discos (45, 35, 25 lb), Remo / CrossFit Bike, Kettlebells (24, 20, 14, 12 kg) o Mancuernas (55 lb), Sandbag 75 lb / sacos con agarres (30, 20, 10 kg) y Wall Balls (20, 15, 10 lb).'
            });
        }
        return catalog;
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
                    if (this.activeModule === 'music') this.renderModuleBody();
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
                if (this.activeModule === 'music') this.renderModuleBody();
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

    // =========================================
    // EVENTOS E INTERACCIÓN DE MÓDULOS
    // =========================================
    bindEvents() {
        // Abrir / cerrar menú lateral
        this.fab?.addEventListener('click', () => this.togglePanel(true));
        this.collapseBtn?.addEventListener('click', () => this.togglePanel(false));
        this.overlay?.addEventListener('click', () => this.togglePanel(false));
        this.miniExpandBtn?.addEventListener('click', () => this.togglePanel(true));

        // Navegación principal de módulos (Music, Movilidad, Rutinas, HYROX, Calc)
        this.moduleNav?.querySelectorAll('.offline-mod-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const mod = btn.dataset.module;
                if (!mod) return;
                this.activeModule = mod;
                this.moduleNav.querySelectorAll('.offline-mod-btn').forEach(b => {
                    b.classList.toggle('active', b.dataset.module === mod);
                });
                this.updateHeaderTitle();
                this.renderSubTabs();
                this.renderModuleBody();
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

        this.btnAuto?.addEventListener('click', () => {
            this.autoAdvance = !this.autoAdvance;
            this.btnAuto.classList.toggle('active', this.autoAdvance);
        });

        this.mediaEl.addEventListener('click', () => this.togglePlay());

        this.btnVideoFs?.addEventListener('click', (e) => {
            e.stopPropagation();
            if (this.mediaEl.requestFullscreen) {
                this.mediaEl.requestFullscreen().catch(() => {});
            } else if (this.mediaEl.webkitEnterFullscreen) {
                this.mediaEl.webkitEnterFullscreen();
            }
        });

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

        this.mediaEl.addEventListener('timeupdate', () => this.onTimeUpdate());
        this.mediaEl.addEventListener('loadedmetadata', () => this.onTimeUpdate());
        this.mediaEl.addEventListener('play', () => {
            this.isPlaying = true;
            this.updatePlayButtons();
            if (this.activeModule === 'music') this.renderModuleBody();
        });
        this.mediaEl.addEventListener('pause', () => {
            this.isPlaying = false;
            this.updatePlayButtons();
            if (this.activeModule === 'music') this.renderModuleBody();
        });
        this.mediaEl.addEventListener('ended', () => {
            this.isPlaying = false;
            this.updatePlayButtons();
            if (this.autoAdvance) {
                this.playNext(true);
            } else if (this.activeModule === 'music') {
                this.renderModuleBody();
            }
        });
    }

    updateHeaderTitle() {
        if (!this.sectionTitleEl) return;
        const titles = {
            music: 'Workout Music <span>🎵</span>',
            mobility: 'Movilidad & Activación <span>🤸</span>',
            wods: 'Rutinas Exigentes <span>🏋️</span>',
            hyrox: 'HYROX 100 Series <span>⚡</span>',
            calc: 'Calculadoras Box <span>🧮</span>'
        };
        this.sectionTitleEl.innerHTML = titles[this.activeModule] || titles.music;
    }

    renderSubTabs() {
        if (!this.tabsContainer) return;

        let tabs = [];
        let activeKey = '';

        if (this.activeModule === 'music') {
            tabs = [
                { key: 'tabata', label: 'Tabata Songs' },
                { key: 'challenges', label: 'Challenge Songs' },
                { key: 'music', label: 'Music' }
            ];
            activeKey = this.selectedCategory;
        } else if (this.activeModule === 'mobility') {
            tabs = [
                { key: 'walks', label: 'Caminatas' },
                { key: 'partner', label: 'En Parejas' },
                { key: 'bands_kb', label: 'Bandas & KB' }
            ];
            activeKey = this.mobilityCategory;
        } else if (this.activeModule === 'wods') {
            tabs = [
                { key: 'partner', label: '🤝 Partner WODs' },
                { key: 'individual', label: '🔥 Individuales' }
            ];
            activeKey = this.wodsCategory;
        } else if (this.activeModule === 'hyrox') {
            tabs = [
                { key: 'individual', label: '🏃 Individual' },
                { key: 'partner', label: '🤝 Partner (Doubles)' }
            ];
            activeKey = this.hyroxMode;
        } else if (this.activeModule === 'calc') {
            tabs = [
                { key: 'rm', label: '🏋️ % RM & Discos' },
                { key: 'bmi', label: '⚖️ IMC & Peso Ideal' }
            ];
            activeKey = this.calcCategory;
        }

        this.tabsContainer.style.gridTemplateColumns = `repeat(${tabs.length}, 1fr)`;
        this.tabsContainer.innerHTML = tabs.map(t => `
            <button class="offline-tab ${t.key === activeKey ? 'active' : ''}" data-subkey="${t.key}" type="button" role="tab">
                ${t.label}
            </button>
        `).join('');

        this.tabsContainer.querySelectorAll('.offline-tab').forEach(btn => {
            btn.addEventListener('click', () => {
                const k = btn.dataset.subkey;
                if (!k) return;
                if (this.activeModule === 'music') this.selectedCategory = k;
                else if (this.activeModule === 'mobility') this.mobilityCategory = k;
                else if (this.activeModule === 'wods') this.wodsCategory = k;
                else if (this.activeModule === 'hyrox') this.hyroxMode = k;
                else if (this.activeModule === 'calc') this.calcCategory = k;
                this.renderSubTabs();
                this.renderModuleBody();
            });
        });
    }

    renderModuleBody() {
        if (!this.trackListEl) return;

        // Mostrar reproductor completo en Music o cuando haya una canción cargada
        if (this.playerDock) {
            const showPlayer = this.activeModule === 'music' || Boolean(this.currentTrack);
            this.playerDock.style.display = showPlayer ? 'flex' : 'none';
        }

        if (this.activeModule === 'music') {
            this.renderTrackList();
        } else if (this.activeModule === 'mobility') {
            this.renderMobilityList();
        } else if (this.activeModule === 'wods') {
            this.renderWodsList();
        } else if (this.activeModule === 'hyrox') {
            this.renderHyroxView();
        } else if (this.activeModule === 'calc') {
            this.renderCalcView();
        }
    }

    togglePanel(forceState) {
        this.isOpen = typeof forceState === 'boolean' ? forceState : !this.isOpen;
        this.panel?.classList.toggle('open', this.isOpen);
        this.overlay?.classList.toggle('open', this.isOpen);
        this.dock?.classList.toggle('panel-open', this.isOpen);
    }

    // =========================================
    // RENDER: MÚSICA
    // =========================================
    renderTrackList() {
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

        this.trackListEl.querySelectorAll('.offline-track-card').forEach(card => {
            card.addEventListener('click', () => {
                const idx = parseInt(card.dataset.index, 10);
                this.selectAndPlay(this.selectedCategory, idx);
            });
        });
    }

    // =========================================
    // RENDER: MOVILIDAD Y ACTIVACIÓN
    // =========================================
    renderMobilityList() {
        const list = this.mobilityData[this.mobilityCategory] || [];
        this.trackListEl.innerHTML = list.map(item => `
            <article class="wod-routine-card">
                <div class="wod-card-top">
                    <span class="wod-code-badge">${item.code}</span>
                    <span class="wod-format-badge">${item.duration}</span>
                </div>
                <h4 class="wod-card-title">${item.title}</h4>
                <p class="wod-focus-note">🎯 <strong>Enfoque:</strong> ${item.focus}</p>
                <ul class="wod-steps-list">
                    ${item.steps.map(s => `<li>${s}</li>`).join('')}
                </ul>
                <div class="wod-equip-footer">
                    <span class="equip-label">🧰 Material requerido:</span> ${item.equipment}
                </div>
            </article>
        `).join('');
    }

    // =========================================
    // RENDER: RUTINAS EXIGENTES (PARTNER / INDIVIDUAL)
    // =========================================
    renderWodsList() {
        const list = this.wodsData[this.wodsCategory] || [];
        this.trackListEl.innerHTML = list.map(wod => `
            <article class="wod-routine-card">
                <div class="wod-card-top">
                    <span class="wod-code-badge">${wod.code}</span>
                    <span class="wod-rm-pill">📊 ${wod.rmRef}</span>
                </div>
                <h4 class="wod-card-title">${wod.title}</h4>
                <div class="wod-format-sub">${wod.format}</div>

                <div class="wod-blocks-wrap">
                    ${wod.blocks.map(b => `
                        <div class="wod-block-box">
                            <div class="wod-block-header">${b.name}</div>
                            <p class="wod-block-desc">${b.desc}</p>
                            <ul class="wod-steps-list">
                                ${b.items.map(it => `<li>${it}</li>`).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>

                <div class="wod-weights-grid">
                    <div class="weight-tier tier-pro">
                        <span class="tier-badge">🔥 PRO / RX</span>
                        <p>${wod.weights.pro}</p>
                    </div>
                    <div class="weight-tier tier-open">
                        <span class="tier-badge">⚡ OPEN / SCALED</span>
                        <p>${wod.weights.open}</p>
                    </div>
                </div>

                <div class="wod-equip-footer">
                    <span class="equip-label">🧰 Material requerido:</span> ${wod.equipment}
                </div>
            </article>
        `).join('');
    }

    // =========================================
    // RENDER: HYROX (#001 – #100)
    // =========================================
    renderHyroxView() {
        const currentWorkout = this.hyroxCatalog.find(h => h.number === this.selectedHyroxNumber) || this.hyroxCatalog[0];
        const quickList = this.hyroxCatalog.slice(0, 12);

        this.trackListEl.innerHTML = `
            <div class="hyrox-selector-bar">
                <div class="hyrox-selector-top">
                    <span class="hyrox-counter-label">CATÁLOGO 100 HYROX OFICIALES</span>
                    <select id="hyrox-select-100" class="hyrox-select-input" aria-label="Seleccionar HYROX #001 a #100">
                        ${this.hyroxCatalog.map(h => `
                            <option value="${h.number}" ${h.number === currentWorkout.number ? 'selected' : ''}>
                                ${h.code} — ${h.title}
                            </option>
                        `).join('')}
                    </select>
                </div>
                <div class="hyrox-quick-chips">
                    ${quickList.map(h => `
                        <button type="button" class="hyrox-chip ${h.number === currentWorkout.number ? 'active' : ''}" data-hnum="${h.number}">
                            #${String(h.number).padStart(2, '0')} ${h.title.replace('HYROX ', '')}
                        </button>
                    `).join('')}
                </div>
            </div>

            <article class="wod-routine-card hyrox-featured-card">
                <div class="wod-card-top">
                    <span class="wod-code-badge hyrox-badge">⚡ ${currentWorkout.code}</span>
                    <span class="wod-rm-pill">${this.hyroxMode === 'partner' ? '🤝 VERSIÓN PARTNER (DOUBLES)' : '🏃 VERSIÓN INDIVIDUAL'}</span>
                </div>
                <h4 class="wod-card-title">${currentWorkout.title}</h4>
                <div class="wod-format-sub">${currentWorkout.tag} · ${currentWorkout.focus}</div>

                <div class="hyrox-run-banner">
                    🏃 <strong>Protocolo de Carrera:</strong> ${currentWorkout.runNote.replace(/\*\*(.*?)\*\*/g, '$1')}
                    ${this.hyroxMode === 'partner' ? '<br><em>En Partner: los dos corren juntos cada tramo y dividen el trabajo de las estaciones.</em>' : ''}
                </div>

                <div class="hyrox-stations-list">
                    ${currentWorkout.stations.map(st => `
                        <div class="hyrox-station-row">
                            <span class="station-num">${st.num}</span>
                            <div class="station-body">
                                <div class="station-name">${st.name}</div>
                                <div class="station-spec">
                                    ${this.hyroxMode === 'partner' ? `<strong>Partner:</strong> ${st.part}` : `<strong>Individual:</strong> ${st.ind}`}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div class="wod-weights-grid">
                    <div class="weight-tier tier-pro">
                        <span class="tier-badge">🔥 PESOS PRO (BOX)</span>
                        <p>${currentWorkout.weights.pro}</p>
                    </div>
                    <div class="weight-tier tier-open">
                        <span class="tier-badge">⚡ PESOS OPEN (BOX)</span>
                        <p>${currentWorkout.weights.open}</p>
                    </div>
                </div>

                <div class="wod-equip-footer">
                    <span class="equip-label">🧰 Material requerido:</span> ${currentWorkout.equipment}
                </div>
            </article>
        `;

        const selectEl = document.getElementById('hyrox-select-100');
        selectEl?.addEventListener('change', () => {
            this.selectedHyroxNumber = parseInt(selectEl.value, 10) || 1;
            this.renderHyroxView();
        });

        this.trackListEl.querySelectorAll('.hyrox-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                this.selectedHyroxNumber = parseInt(chip.dataset.hnum, 10) || 1;
                this.renderHyroxView();
            });
        });
    }

    // =========================================
    // RENDER: CALCULADORAS (% RM + DISCOS & IMC)
    // =========================================
    calculatePlateLoad(targetLb, barKg) {
        const barLb = barKg === 20 ? 45 : 35;
        let perSide = (targetLb - barLb) / 2;
        if (perSide <= 0) return 'Solo barra vacía (' + barKg + ' kg / ' + barLb + ' lb)';

        const availablePlates = [45, 35, 25, 15, 10, 5];
        const loaded = [];
        for (const p of availablePlates) {
            while (perSide >= p - 0.01) {
                loaded.push(`${p}lb`);
                perSide -= p;
            }
        }
        return loaded.length
            ? `Por lado: ${loaded.join(' + ')} (Barra ${barKg}kg)`
            : `Barra ${barKg}kg (ajuste menor a disco de 5lb)`;
    }

    renderCalcView() {
        if (this.calcCategory === 'rm') {
            const { oneRm, unit, barKg, customPct } = this.rmState;
            const targetVal = Math.round(oneRm * (customPct / 100));
            const targetLb = unit === 'lb' ? targetVal : Math.round(targetVal * 2.20462);
            const targetKg = unit === 'kg' ? targetVal : Math.round(targetVal / 2.20462);
            const plateBreakdown = this.calculatePlateLoad(targetLb, barKg);
            const percentages = [95, 90, 85, 80, 75, 70, 65, 60, 50];

            this.trackListEl.innerHTML = `
                <div class="calc-card">
                    <div class="calc-row-grid">
                        <label class="calc-field">
                            <span>Tu 1RM Máximo</span>
                            <input type="number" id="calc-rm-input" class="calc-input" value="${oneRm}" min="10" max="1000">
                        </label>
                        <div class="calc-field">
                            <span>Unidad</span>
                            <div class="calc-seg-group">
                                <button type="button" class="calc-seg-btn ${unit === 'lb' ? 'active' : ''}" data-unit="lb">LB</button>
                                <button type="button" class="calc-seg-btn ${unit === 'kg' ? 'active' : ''}" data-unit="kg">KG</button>
                            </div>
                        </div>
                        <div class="calc-field">
                            <span>Barra Olímpica</span>
                            <div class="calc-seg-group">
                                <button type="button" class="calc-seg-btn ${barKg === 20 ? 'active' : ''}" data-bar="20">20kg (H)</button>
                                <button type="button" class="calc-seg-btn ${barKg === 15 ? 'active' : ''}" data-bar="15">15kg (M)</button>
                            </div>
                        </div>
                    </div>

                    <div class="calc-slider-box">
                        <div class="calc-slider-header">
                            <span>Porcentaje Objetivo: <strong>${customPct}% RM</strong></span>
                            <span class="calc-highlight-val">${targetLb} lb · ${targetKg} kg</span>
                        </div>
                        <input type="range" id="calc-rm-slider" class="player-seek-bar" min="40" max="105" step="5" value="${customPct}">
                        <div class="calc-plate-hint">🏋️ ${plateBreakdown}</div>
                    </div>

                    <div class="calc-rm-table">
                        ${percentages.map(pct => {
                            const valLb = unit === 'lb'
                                ? Math.round(oneRm * (pct / 100))
                                : Math.round(oneRm * (pct / 100) * 2.20462);
                            const valKg = Math.round(valLb / 2.20462);
                            const activeRow = pct === customPct ? 'active' : '';
                            return `
                                <div class="calc-rm-cell ${activeRow}" data-pct="${pct}">
                                    <span class="rm-cell-pct">${pct}%</span>
                                    <strong class="rm-cell-main">${valLb} lb</strong>
                                    <span class="rm-cell-sub">${valKg} kg</span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;

            const rmInput = document.getElementById('calc-rm-input');
            const rmSlider = document.getElementById('calc-rm-slider');

            rmInput?.addEventListener('input', () => {
                this.rmState.oneRm = Math.max(1, parseFloat(rmInput.value) || 0);
                this.renderCalcView();
                const el = document.getElementById('calc-rm-input');
                if (el) {
                    el.focus();
                    el.setSelectionRange(el.value.length, el.value.length);
                }
            });

            rmSlider?.addEventListener('input', () => {
                this.rmState.customPct = parseInt(rmSlider.value, 10) || 75;
                this.renderCalcView();
            });

            this.trackListEl.querySelectorAll('[data-unit]').forEach(btn => {
                btn.addEventListener('click', () => {
                    const newUnit = btn.dataset.unit;
                    if (newUnit && newUnit !== this.rmState.unit) {
                        this.rmState.oneRm = newUnit === 'kg'
                            ? Math.round(this.rmState.oneRm / 2.20462)
                            : Math.round(this.rmState.oneRm * 2.20462);
                        this.rmState.unit = newUnit;
                        this.renderCalcView();
                    }
                });
            });

            this.trackListEl.querySelectorAll('[data-bar]').forEach(btn => {
                btn.addEventListener('click', () => {
                    this.rmState.barKg = parseInt(btn.dataset.bar, 10) || 20;
                    this.renderCalcView();
                });
            });

            this.trackListEl.querySelectorAll('.calc-rm-cell').forEach(cell => {
                cell.addEventListener('click', () => {
                    this.rmState.customPct = parseInt(cell.dataset.pct, 10) || 75;
                    this.renderCalcView();
                });
            });
        } else {
            // Calculadora de IMC y Rango de Peso Adecuado
            const { heightCm, weightKg } = this.bmiState;
            const hMeters = Math.max(0.5, heightCm / 100);
            const bmi = weightKg / (hMeters * hMeters);
            const bmiStr = bmi.toFixed(1);

            const minHealthyKg = (18.5 * hMeters * hMeters).toFixed(1);
            const maxHealthyKg = (24.9 * hMeters * hMeters).toFixed(1);
            const minAthleteKg = (20.5 * hMeters * hMeters).toFixed(1);
            const maxAthleteKg = (26.5 * hMeters * hMeters).toFixed(1);

            let statusLabel = 'Peso Adecuado / Saludable';
            let statusColor = '#00e676';
            if (bmi < 18.5) {
                statusLabel = 'Bajo Peso (por debajo del rango)';
                statusColor = '#38bdf8';
            } else if (bmi >= 25 && bmi <= 26.8) {
                statusLabel = 'Rango Atleta Fuerza / Ligero Sobrepeso IMC';
                statusColor = '#fbbf24';
            } else if (bmi > 26.8) {
                statusLabel = 'Por encima del rango recomendado';
                statusColor = '#f87171';
            }

            this.trackListEl.innerHTML = `
                <div class="calc-card">
                    <div class="calc-row-grid two-cols">
                        <label class="calc-field">
                            <span>Altura (cm)</span>
                            <input type="number" id="calc-bmi-height" class="calc-input" value="${heightCm}" min="100" max="230">
                        </label>
                        <label class="calc-field">
                            <span>Peso Actual (kg)</span>
                            <input type="number" id="calc-bmi-weight" class="calc-input" value="${weightKg}" min="30" max="220" step="0.5">
                        </label>
                    </div>

                    <div class="bmi-result-banner" style="border-color: ${statusColor}">
                        <div class="bmi-score-col">
                            <span class="bmi-kicker">TU IMC ACTUAL</span>
                            <strong class="bmi-number" style="color: ${statusColor}">${bmiStr}</strong>
                            <span class="bmi-status-pill" style="color: ${statusColor}">${statusLabel}</span>
                        </div>
                    </div>

                    <div class="bmi-ranges-box">
                        <div class="bmi-range-item">
                            <span class="range-title">✅ Rango de Peso Adecuado (Estándar 18.5 – 24.9)</span>
                            <strong class="range-values">${minHealthyKg} kg — ${maxHealthyKg} kg</strong>
                        </div>
                        <div class="bmi-range-item athlete">
                            <span class="range-title">🏋️ Rango Atleta Box / Masa Muscular (20.5 – 26.5)</span>
                            <strong class="range-values">${minAthleteKg} kg — ${maxAthleteKg} kg</strong>
                        </div>
                    </div>
                </div>
            `;

            const hInput = document.getElementById('calc-bmi-height');
            const wInput = document.getElementById('calc-bmi-weight');

            hInput?.addEventListener('input', () => {
                this.bmiState.heightCm = Math.max(100, parseFloat(hInput.value) || 170);
                this.renderCalcView();
                const el = document.getElementById('calc-bmi-height');
                if (el) {
                    el.focus();
                    el.setSelectionRange(el.value.length, el.value.length);
                }
            });

            wInput?.addEventListener('input', () => {
                this.bmiState.weightKg = Math.max(25, parseFloat(wInput.value) || 70);
                this.renderCalcView();
                const el = document.getElementById('calc-bmi-weight');
                if (el) {
                    el.focus();
                    el.setSelectionRange(el.value.length, el.value.length);
                }
            });
        }
    }

    // =========================================
    // CONTROLES DE REPRODUCCIÓN AUDIO / VIDEO
    // =========================================
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

        if (this.playerDock) {
            this.playerDock.style.display = 'flex';
        }

        if (track.mediaType === 'video') {
            this.videoStage.style.display = 'block';
        } else {
            this.videoStage.style.display = 'none';
        }

        if (track.challenge) {
            this.challengeBanner.style.display = 'block';
            this.challengeBanner.innerHTML = `<strong>⚡ Reto:</strong> ${track.challenge}`;
        } else {
            this.challengeBanner.style.display = 'none';
            this.challengeBanner.textContent = '';
        }

        this.trackTitleEl.textContent = track.title;
        this.trackSubEl.textContent = `${track.artist} · ${track.mediaType.toUpperCase()}`;
        this.miniTitleEl.textContent = track.title;
        this.miniBar.style.display = 'flex';

        const playableUrl = await this.resolvePlayableUrl(track);
        if (this.currentTrack !== track) return;

        this.trackSubEl.textContent = `${track.artist} · ${track.mediaType.toUpperCase()} · ✓ Listo`;
        this.mediaEl.src = playableUrl;
        this.mediaEl.load();
        this.mediaEl.play().catch(() => {
            this.isPlaying = false;
            this.updatePlayButtons();
        });

        if (this.activeModule === 'music') this.renderTrackList();
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
        } else if (this.activeModule === 'music') {
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
