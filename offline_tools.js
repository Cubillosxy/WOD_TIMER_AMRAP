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
        // 2. MOVILIDAD Y CALENTAMIENTOS CF-L2 (DESPLEGABLES + BUSCADOR)
        // =========================================
        this.mobilityData = {
            walks: [
                {
                    code: 'MOB-01',
                    title: 'Animal Flow & Caminatas de Locomoción',
                    duration: '8 MIN · FLUJO CONTINUO',
                    focus: 'Hombros activos, zona media, cadera y tobillo (sin estiramiento pasivo)',
                    steps: [
                        '20m Bear Crawl (Paso del oso: rodillas a 3 cm del suelo, columna neutral)',
                        '15m Inchworm + Push-Up + 5 Air Squats (secuencia oficial CF-L2)',
                        '20m Spiderman Lunge Walk + Rotación Torácica (codo al empeine + brazo al techo)',
                        '15m Duck Walk (Caminata en sentadilla profunda con talones apoyados)',
                        '20m Crab Walk (Caminata de cangrejo activando hombros y extensión de cadera)'
                    ],
                    equipment: 'Pista o pasillo despejado del box.'
                },
                {
                    code: 'MOB-02',
                    title: 'Caminata Overhead, Kang Squat & Bisagra',
                    duration: '6 MIN · 2 RONDAS',
                    focus: 'Estabilidad escapular sobre plano frontal, cadena posterior y squat',
                    steps: [
                        '20m Frankenstein Walk (patada frontal a mano contraria manteniendo columna neutral)',
                        '20m Overhead Plate Walk (caminata activando hombros con disco arriba)',
                        '15m Walking Lunge con rotación torácica sobre pierna delantera',
                        '10 Kang Squats (Good Morning hacia sentadilla profunda + extensión de cadera)'
                    ],
                    equipment: 'Disco de 15 lb o 10 lb, soporte para lunges.'
                },
                {
                    code: 'MOB-03',
                    title: 'Flow de Cuerda Grande & Desplazamiento Reactivo',
                    duration: '7 MIN · EMOM DINÁMICO',
                    focus: 'Activación de tren inferior, agarre y pulso pre-metcon',
                    steps: [
                        'Min 1: 40 seg Sentadilla isométrica activa con movimiento de cuerda grande (Battle Rope)',
                        'Min 2: 20m Desplazamiento lateral defensivo en cuarto de squat + salto vertical cada 4 pasos',
                        'Min 3: 10 Scapular Pull-Ups en estructura + 20 seg Hang activo (agarre prono)',
                        'Repetir secuencia 2 veces sin pausa larga'
                    ],
                    equipment: 'Cuerda grande (Battle Rope) y estructura de dominadas.'
                },
                {
                    code: 'MOB-04',
                    title: 'Progresión CF-L2: Peso Corporal Básico (BBW)',
                    duration: '8 MIN · 3 RONDAS PROGRESIVAS',
                    focus: 'Rango completo de movimiento (ROM) en empuje, tracción y sentadilla',
                    steps: [
                        'Ronda 1: 10 Air Squats + 8 Push-ups + 10 Sit-ups + 5 Pull-ups estrictos',
                        'Ronda 2: 10 Estocadas (Lunges) + 6 Dips estrictos en anillas + 8 V-Ups + 8 Kipping swings',
                        'Ronda 3: 12 Squats de parada angosta (progresión Pistol a cajón) + 5 Pike Push-ups en cajón',
                        'Finalizar con 200m de trote en técnica Pose Running en pista abierta'
                    ],
                    equipment: 'Estructura, anillas, cajón (box), colchoneta y pista abierta.'
                },
                {
                    code: 'MOB-05',
                    title: 'Locomoción de Tobillo, Pistols & Soportes HSPU',
                    duration: '7 MIN · CONTROL ARTICULAR',
                    focus: 'Dorsiflexión de tobillo, rodilla en línea con pies y trípode invertido',
                    steps: [
                        '15m Caminata en puntas + 15m Caminata en talones con hombros activos',
                        '12 Squats de parada angosta + 8 Pistols controlados a cajón por pierna',
                        '30 seg Handstand Hold en pared o Pike Hold en soportes de HSPU',
                        '10 Cossack Squats alternados abriendo aductores y manteniendo talón en el suelo'
                    ],
                    equipment: 'Cajón (box) y soportes para Handstand Push-Up.'
                },
                {
                    code: 'MOB-06',
                    title: 'Sled Walk & Activación de Cadena Posterior',
                    duration: '6 MIN · CARGA LIGERA',
                    focus: 'Tracción de isquiotibiales, glúteos y temperatura central',
                    steps: [
                        '25m Caminata hacia atrás arrastrando Trineo (Retro Sled Walk para rodillas)',
                        '25m Marcha frontal empuje de Trineo con brazos bloqueados',
                        '12 Inchworms con pausa de 2 segundos en perro boca abajo (Downward Dog)',
                        '15 Russian Kettlebell Swings ligeros enfocando bisagra y extensión violenta de cadera'
                    ],
                    equipment: 'Sled push/pull, disco de 25 o 45 lb, Kettlebell de 12 o 14 kg.'
                }
            ],
            partner: [
                {
                    code: 'PMOB-01',
                    title: 'Partner Squat Therapy & Pase Torácico',
                    duration: '8 MIN · EN PAREJAS',
                    focus: 'Apertura de cadera bajo carga compartida y columna neutral',
                    steps: [
                        '90 seg Sentadilla isométrica espalda con espalda + pase lateral de Wall Ball',
                        '10/10 Squat frente a frente sosteniendo banda azul para mantener torso vertical',
                        '12 Pases de balón medicinal por encima de la cabeza y entre las piernas',
                        '10/10 Rotaciones torácicas en cuadrupedia con guía táctil del compañero'
                    ],
                    equipment: 'Balón medicinal (15 lb o 10 lb) y banda elástica azul o naranja.'
                },
                {
                    code: 'PMOB-02',
                    title: 'Partner Shoulder, Sotts Press & Core Reactivo',
                    duration: '7 MIN · EN PAREJAS',
                    focus: 'Hombros activos para levantamientos sobre la cabeza y anti-rotación',
                    steps: [
                        '60 seg Plancha alta frente a frente: toque de hombro cruzado + paso a Downward Dog',
                        '8/8 Sotts Press con barra vacía: compañero verifica codos y línea media del pie',
                        '60 seg Pallof Press isométrico en pareja con banda elástica negra o azul',
                        '10/10 Aperturas escapulares asistidas colgados en estructura'
                    ],
                    equipment: 'Barra de 20 kg o 15 kg, banda elástica negra/azul, estructura y colchonetas.'
                },
                {
                    code: 'PMOB-03',
                    title: 'Espejo de Levantamiento Olímpico (Drill CF-L2)',
                    duration: '8 MIN · EN PAREJAS',
                    focus: 'Corrección visual en tiempo real de extensión de cadera y estante frontal',
                    steps: [
                        '5 Front Squats con pausa de 3 seg abajo (compañero verifica codos altos)',
                        '5 Deadlift-Shrugs lentos + 5 rápidos (sincronización tras extender cadera)',
                        '5 Saltos a posición Split Jerk con manos golpeando arriba',
                        '5 Hang Squat Cleans + Push Jerks en espejo con barra vacía'
                    ],
                    equipment: 'Barras olímpicas de 20 kg y 15 kg.'
                },
                {
                    code: 'PMOB-04',
                    title: 'Tracción en Pareja con Cuerda & Banda Negra',
                    duration: '6 MIN · EN PAREJAS',
                    focus: 'Reclutamiento de dorsal, bíceps y cadena posterior antes de tirones',
                    steps: [
                        '12/12 Remo inclinado en pareja resistido con banda elástica negra',
                        '40 seg Sentadilla frente a frente batiendo cuerda grande en ondas alternas',
                        '10/10 Buenos días (Good Mornings) con banda elástica azul en cuello y pies',
                        '30 seg Isometría de Chin-up / Hang activo asistido por compañero'
                    ],
                    equipment: 'Banda elástica negra y azul, cuerda grande y estructura.'
                },
                {
                    code: 'PMOB-05',
                    title: 'Partner Med-Ball Clean & Reacción (Progresión CF-L2)',
                    duration: '7 MIN · EN PAREJAS',
                    focus: 'Pull-under rápido sin girar el balón medicinal y recepción en squat',
                    steps: [
                        '8 Deadlifts + Encogimiento rápido con balón medicinal frente al compañero',
                        '8 Pull-unders a Front Squat sólido con balón (sin soltar las manos)',
                        '10 Medicine-Ball Cleans completos lanzando pase de pecho al levantarse',
                        '10 Sit-ups en colchoneta con pase de balón sobre la cabeza al chocar manos'
                    ],
                    equipment: 'Balón medicinal de 20, 15 o 10 lb y colchonetas.'
                },
                {
                    code: 'PMOB-06',
                    title: 'Sincronización de Cadera & Saco en Parejas',
                    duration: '6 MIN · EN PAREJAS',
                    focus: 'Transferencia de fuerza del centro a las extremidades con carga',
                    steps: [
                        '10 Pases laterales de saco con agarre (10 o 20 kg) desde bisagra de cadera',
                        '12 Zancadas sincronizadas sosteniendo banda naranja en tensión sobre la cabeza',
                        '8/8 Peso muerto a una pierna asistido con mano en hombro del compañero',
                        '40 seg Plancha lateral chocando mano libre arriba'
                    ],
                    equipment: 'Saco con agarre de 10 o 20 kg, banda naranja y colchoneta.'
                }
            ],
            bands_kb: [
                {
                    code: 'BMOB-01',
                    title: 'Complejo de Barra CF-L2 (Weightlifting Complex)',
                    duration: '8 MIN · 2 RONDAS PROGRESIVAS',
                    focus: 'Preparación integral para Clean, Jerk, Thruster y Snatch (5 a 8 reps por ejercicio)',
                    steps: [
                        'Ronda 1 (Clean/Rack): 6 Deadlifts + 6 Hang Power Cleans + 6 Front Squats + 6 Strict Press + 6 Thrusters',
                        'Ronda 2 (Snatch/OHS): 6 Snatch Deadlifts + 6 Hang Power Snatches + 6 Overhead Squats + 6 Full Snatches',
                        'Mantener barra cerca del plano frontal y peso en los talones en cada recepción'
                    ],
                    equipment: 'Barra olímpica vacía de 20 kg (H) o 15 kg (M).'
                },
                {
                    code: 'BMOB-02',
                    title: 'Complejo de Kettlebell & Goblet Pry (CF-L2)',
                    duration: '7 MIN · FLUJO ARTICULAR',
                    focus: 'Desbloqueo de cadera, estabilidad de hombro y Turkish Get-Up',
                    steps: [
                        '60 seg Goblet Squat Pry (empujar rodillas hacia afuera con los codos en el fondo)',
                        '8/8 Kettlebell Single-Arm Swings + 6/6 Kettlebell Cleans al rack',
                        '6/6 Kettlebell Clean & Push Press bloqueando costillas abajo',
                        '6/6 Kettlebell Snatches fluidos + 2/2 Turkish Get-Ups (Parada turca controlada)'
                    ],
                    equipment: 'Kettlebell de 14 kg o 12 kg (H/M) y colchoneta.'
                },
                {
                    code: 'BMOB-03',
                    title: 'Complejo de Mancuernas & Banda Elástica (CF-L2)',
                    duration: '7 MIN · 2 RONDAS',
                    focus: 'Control unilateral de hombros, cadera y activación de glúteo medio',
                    steps: [
                        '15 Dislocaciones de hombro + 15 Pull-Aparts con banda elástica naranja',
                        '12/12 Monster Walk lateral con banda azul o negra sobre tobillos/rodillas',
                        'Con 1 o 2 mancuernas: 6 Deadlifts + 6 Hang Power Cleans + 6 Front Squats + 6 Push Press',
                        '4/4 Dumbbell Overhead Squats + 2/2 Turkish Get-Ups con mancuerna ligera'
                    ],
                    equipment: 'Mancuernas de 20–25 lb, bandas elásticas (negra, azul, naranja).'
                },
                {
                    code: 'BMOB-04',
                    title: 'Complejo de Gimnasia en Anillas & Soportes (CF-L2)',
                    duration: '8 MIN · HABILIDAD GIMNÁSTICA',
                    focus: 'Hombros activos en suspensión, apoyo en anillas y línea media',
                    steps: [
                        'En Anillas: 8 Ring Rows supinos + 15 seg Ring Support (bloqueo arriba) + 10 seg L-Sit intento',
                        'En Anillas: 4 Skin the Cat controlados (o Inverted Hang) + 8 Ring Swings',
                        'En Soportes de HSPU / Parallettes: 8 Dive Bomber Push-ups + 6 Shoot-throughs a Frog Stand',
                        '8 Rollouts controlados con Rueda Abdominal (Ab Wheel) manteniendo pelvis neutra'
                    ],
                    equipment: 'Anillas, soportes de HSPU/lunges, rueda abdominal y colchoneta.'
                },
                {
                    code: 'BMOB-05',
                    title: 'Distracción Articular con Banda Negra & Azul',
                    duration: '6 MIN · MOVILIDAD ESPECÍFICA',
                    focus: 'Liberación de cápsula de hombro, dorsal, flexor de cadera y tobillo',
                    steps: [
                        '45 seg/lado Distracción de dorsal y hombro con banda negra anclada alta en el rack',
                        '45 seg/lado Distracción de tobillo en dorsiflexión con banda negra baja y pie sobre cajón',
                        '45 seg/lado Apertura de flexor de cadera (Couch Stretch activo) con glúteo contraído',
                        '12 Press externo de manguito rotador (90/90) con banda naranja'
                    ],
                    equipment: 'Bandas elásticas negra, azul y naranja, estructura y cajón.'
                },
                {
                    code: 'BMOB-06',
                    title: 'Activación Explosiva para Días Pesados (Heavy Day Prep)',
                    duration: '8 MIN · PRE-1RM / 3RM / 5RM',
                    focus: 'Potenciación del sistema nervioso central sin fatigar antes de cargar barra',
                    steps: [
                        '3x5 Saltos al cajón (Box Jumps) aterrizando en squat parcial silencioso y extendiendo cadera',
                        '3x8 Lanzamientos explosivos de Wall Ball alto o Slam contra pared',
                        '2x10 seg Sprint máximo en Bicicleta de CrossFit o SkiErg (descanso 50 seg)',
                        '3 series de aproximación progresiva con barra antes de la primera serie al 80% RM'
                    ],
                    equipment: 'Cajón, Wall Ball (20/15 lb), CrossFit Bike o SkiErg y barra olímpica.'
                }
            ]
        };

        // =========================================
        // 3. 60 RUTINAS EXIGENTES (30 PARTNER + 30 INDIVIDUAL)
        //    Con Trifecta 45s Switch & Cash-Out al final (#30)
        // =========================================
        this.wodsData = {
            partner: this.buildPartnerWods30(),
            individual: this.buildIndividualWods30()
        };

        // =========================================
        // 4. SERIE DE 100 ENTRENAMIENTOS HYROX (#001 – #100)
        // =========================================
        this.hyroxCatalog = this.buildHyrox100Catalog();
        this.hyroxMode = 'individual'; // 'individual' | 'partner'
        this.selectedHyroxNumber = 1;
        this.hyroxDropdownOpen = false;
        this.expandedHyroxSet = new Set([1]);

        // Buscadores y estado de desplegables
        this.searchQueries = {
            mobility: '',
            wods: '',
            hyrox: ''
        };
        this.expandedCards = new Set();

        // =========================================
        // 5. ESTADO DE NAVEGACIÓN Y CALCULADORAS
        // =========================================
        this.activeModule = 'music';   // 'music' | 'mobility' | 'wods' | 'hyrox' | 'calc'
        this.selectedCategory = 'tabata';
        this.mobilityCategory = 'walks';
        this.wodsCategory = 'partner';
        this.calcCategory = 'rm';      // 'rm' | 'bmi'

        // Estado de Calculadora RM e IMC (permite borrar y escribir libremente)
        this.rmState = {
            oneRmRaw: '185',
            oneRm: 185,
            unit: 'lb',     // 'lb' | 'kg'
            barKg: 20,      // 20 (H) | 15 (M)
            customPct: 75
        };
        this.bmiState = {
            heightRaw: '174',
            weightRaw: '76',
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
    // CATÁLOGO DE 30 PARTNER WODS (CON TRIFECTA AL FINAL #30)
    // =========================================
    buildPartnerWods30() {
        const specs = [
            {
                title: 'Rope, Sandbag & Synchro Devil',
                format: 'FOR TIME · CAP 26 MIN · PAREJAS',
                rmRef: '75% 1RM Deadlift / DB 50-35 lb',
                blocks: [
                    { name: 'BUY-IN COMPARTIDO', desc: 'En pista abierta y máquina antes de las mancuernas:', items: ['800m Run juntos cargando 1 Saco con agarre (20 / 10 kg)', '60 Cal SkiErg o Bicicleta de CrossFit (repartidas)'] },
                    { name: '4 RONDAS POR TIEMPO', desc: 'Alternar cuerda y saco; Devil Press sincronizados:', items: ['4 Trepar la cuerda grande (Rope Climbs)', '16 Devil Press Sincronizados con mancuernas', '30m Sandbag Bear Hug Carry (75 lb)', '20 Ab Wheel Rollouts (rueda abdominal)'] }
                ],
                pro: 'DB 50 / 35 lb · Sandbag 75 lb · Cuerda sin salto',
                open: 'DB 35 / 20 lb · Saco 20 / 10 kg · 12 Pull-ups con banda negra/azul',
                equip: 'Cuerda grande para escalar, Sandbag 75 lb, sacos (20/10 kg), mancuernas (50/35/20 lb), rueda abdominal, SkiErg/Bike y pista.'
            },
            {
                title: 'Sled & Ring Muscle Engine',
                format: 'EMOM 24 MIN (6 RONDAS) · PAREJAS',
                rmRef: '75% – 80% 1RM Squat Snatch',
                blocks: [
                    { name: 'ESTACIONES DE 4 MINUTOS (RELEVO)', desc: 'Completar la tarea de cada minuto entre ambos:', items: ['Min 1: 40m Sled Push + Pull en pista (20m empuje / 20m arrastre)', 'Min 2: 14 Ring Dips en anillas (PRO: 8 Ring Muscle-Ups) + 12 Box Jump Overs', 'Min 3: 10 Squat Snatches con barra olímpica', 'Min 4: Máx Cal Remo + 30s Battle Rope Squat Waves'] }
                ],
                pro: 'Barra 135 / 95 lb (20kg+45lb/lado H · 15kg+25+5lb/lado M) · Sled 4x45+2x35 lb',
                open: 'Barra 95 / 65 lb (20kg+25lb/lado H · 15kg+15lb/lado M) · Anillas con banda azul',
                equip: 'Sled push/pull, discos (45, 35, 25, 15, 5 lb), anillas, cajón, barra olímpica (20/15 kg), remo y cuerda grande.'
            },
            {
                title: 'Synchro Fran & Heavy Clean Ladder',
                format: '2 BLOQUES · FOR TIME + RM · PAREJAS',
                rmRef: '60% RM Thruster + 85% RM Clean',
                blocks: [
                    { name: 'BLOQUE A · FOR TIME (Cap 12 min)', desc: 'Formato 42 - 30 - 18 repartido tras 400m Run juntos:', items: ['Thrusters con barra olímpica', 'Pull-Ups (PRO: Chest-to-Bar)', 'Al inicio de cada serie: 15 Burpees sincronizados sobre la barra'] },
                    { name: 'BLOQUE B · VENTANA DE 8 MINUTOS', desc: 'Establecer entre ambos:', items: ['1RM Pesado de Squat Clean + Hang Squat Clean + Jerk (sumatoria de la pareja)'] }
                ],
                pro: 'Thrusters 115 / 80 lb (20kg+35lb/lado H · 15kg+20lb/lado M) · C2B Pull-Ups',
                open: 'Thrusters 85 / 55 lb (20kg+20lb/lado H · 15kg+10lb/lado M) · Pull-Ups con banda',
                equip: 'Barras de 20 kg y 15 kg, discos (45 a 5 lb), estructura de dominadas y pista abierta.'
            },
            {
                title: 'Triple Erg & Sandbag Mile',
                format: 'FOR TIME · CAP 30 MIN · PAREJAS',
                rmRef: 'Carga Continua · Sandbag 75 lb / Sacos',
                blocks: [
                    { name: 'CHIPPER DE RESISTENCIA MUSCULAR', desc: 'Un compañero trabaja en máquina mientras el otro sostiene el Sandbag o Saco al pecho (si el saco toca el piso: 10 Burpees cada uno):', items: ['1500m SkiErg + 400m Run con Saco (30/20 kg)', '100 Cal Bicicleta de CrossFit + 400m Run con Sandbag (75 lb)', '1500m Remo (RowErg) + 80 Wall Balls (20/15 lb)', '60 Toes to Bar + 40m Caminata en Lunges con soporte'] }
                ],
                pro: 'Sandbag 75 lb + Saco 30 kg · Wall Ball 20 / 15 lb',
                open: 'Sacos con agarres 20 / 10 kg · Wall Ball 15 / 10 lb',
                equip: 'SkiErg, CrossFit Bike, Remo, Sandbag 75 lb, sacos (30/20/10 kg), Wall Balls (20/15/10 lb), estructura y pista.'
            },
            {
                title: 'Dumbbell DT & Rope Climb Relay',
                format: '10 RONDAS RELEVO (5 C/U) · PAREJAS',
                rmRef: 'Mancuernas Pesadas (55 lb / 15 kg)',
                blocks: [
                    { name: '10 RONDAS I-GO-YOU-GO (Cap 20 min)', desc: 'El compañero A completa una ronda entera a sprint mientras B descansa:', items: ['12 Dumbbell Deadlifts', '9 Dumbbell Hang Power Cleans', '6 Dumbbell Push Jerks', '1 Subida a la cuerda grande (Rope Climb) + 20m Sprint'] }
                ],
                pro: 'Par de Mancuernas de 55 lb (H) / Par de 15 kg o 35 lb (M)',
                open: 'Par de Mancuernas de 35 lb (H) / 20 lb (M) · 6 Strict Pull-ups con banda',
                equip: 'Mancuernas (55, 35, 20 lb y par de 15 kg), cuerda grande para escalar y pista.'
            },
            {
                title: 'Diane Synchro & Sled Drag',
                format: 'FOR TIME · CAP 22 MIN · PAREJAS',
                rmRef: '75% – 80% 1RM Deadlift',
                blocks: [
                    { name: 'PARTE 1 · 21 - 15 - 9 (POR PAREJA)', desc: 'Deadlifts en relevos, HSPU y Ab Wheel:', items: ['42 - 30 - 18 Deadlifts pesados con barra', '21 - 15 - 9 Handstand Push-Ups en soportes', '21 - 15 - 9 Rollouts con Rueda Abdominal'] },
                    { name: 'PARTE 2 · CASH-OUT EN PISTA', desc: 'Sin descanso al terminar la barra:', items: ['100m Sled Pull/Push pesado cambiando cada 25m'] }
                ],
                pro: 'Deadlift 225 / 155 lb (20kg+2x45lb/lado H · 15kg+45+15lb/lado M) · HSPU en soportes',
                open: 'Deadlift 165 / 115 lb · Pike Push-ups en cajón o soportes',
                equip: 'Barra 20/15 kg, discos (45, 35, 25, 15 lb), soportes HSPU, rueda abdominal, colchoneta y Sled.'
            },
            {
                title: 'Kettlebell Complex & Box Jump Storm',
                format: 'AMRAP 20 MINUTOS · PAREJAS',
                rmRef: 'Kettlebells 24 / 20 / 14 kg',
                blocks: [
                    { name: 'ROTACIÓN CONTINUA EN PAREJA', desc: 'Un compañero completa los Swings mientras el otro sostiene plancha; resto repartido:', items: ['24 American Kettlebell Swings', '20 Box Jump Overs (24 / 20")', '16 Goblet Squats profundos con Kettlebell', '12 Strict Ring Dips en anillas', '200m Run juntos en pista abierta'] }
                ],
                pro: 'Kettlebell 24 kg (H) / 20 kg (M) · Ring Dips libres',
                open: 'Kettlebell 20 kg (H) / 14 o 12 kg (M) · Ring Dips con banda azul/naranja',
                equip: 'Kettlebells (24, 20, 14, 12 kg), cajón (box), anillas, bandas y pista abierta.'
            },
            {
                title: 'Battle Rope Hold & Thruster Pyramid',
                format: 'FOR TIME · CAP 24 MIN · PAREJAS',
                rmRef: '65% – 75% 1RM Thruster Ascendente',
                blocks: [
                    { name: 'PIRÁMIDE DE CARGA CON CASTIGO ISOMÉTRICO', desc: 'Las repeticiones de barra solo cuentan mientras el compañero mantiene Sentadilla activa batiendo la cuerda grande (Battle Rope):', items: ['30 Thrusters (95 / 65 lb) + 30 Pull-Ups', '20 Thrusters (115 / 80 lb) + 20 Chest-to-Bar Pull-Ups', '10 Thrusters (135 / 95 lb) + 10 Bar Muscle-Ups (o 20 C2B)'] }
                ],
                pro: 'Barras 95→115→135 lb (H) / 65→80→95 lb (M)',
                open: 'Barras 75→95→105 lb (H) / 45→55→65 lb (M) · Pull-Ups con banda',
                equip: 'Barra 20/15 kg, discos (45, 35, 25, 15, 10, 5 lb), cuerda grande (Battle Rope) y estructura.'
            },
            {
                title: 'Overhead Squat & Row Relay',
                format: '5 RONDAS POR TIEMPO · CAP 22 MIN',
                rmRef: '70% 1RM Overhead Squat',
                blocks: [
                    { name: '5 RONDAS COMPARTIDAS', desc: 'Cada ronda inicia con remo y cierra con OHS y Toes to Bar:', items: ['500m Remo (cambio a los 250m)', '16 Overhead Squats con barra olímpica', '20 Toes to Bar Sincronizados en estructura', '16 Burpees saltando lateralmente la barra'] }
                ],
                pro: 'Barra OHS 115 / 80 lb (20kg+35lb/lado H · 15kg+20lb/lado M)',
                open: 'Barra OHS 75 / 55 lb (20kg+15lb/lado H · 15kg+10lb/lado M)',
                equip: 'Remo (RowErg), barra 20/15 kg, discos (35, 25, 15, 10, 5 lb) y estructura.'
            },
            {
                title: 'Heavy Sandbag & SkiErg Chipper',
                format: 'FOR TIME · CAP 25 MIN · PAREJAS',
                rmRef: 'Sandbag 75 lb + Sacos 30/20 kg',
                blocks: [
                    { name: 'CHIPPER EN PAREJA', desc: 'Dividir repeticiones según fortaleza:', items: ['100 Cal SkiErg', '80 Wall Balls (20 / 15 lb)', '60 Sandbag Over-the-Shoulder Cleans (75 lb / 30 kg)', '40 Dumbbell Snatches alternados (55 / 35 lb)', '200m Lunges en pista pasando el saco al hombro'] }
                ],
                pro: 'Sandbag 75 lb · Mancuerna 55 / 35 lb · Wall Ball 20 / 15 lb',
                open: 'Saco 30 / 20 kg · Mancuerna 40 / 25 lb · Wall Ball 15 / 10 lb',
                equip: 'SkiErg, Wall Balls, Sandbag 75 lb, sacos (30/20 kg), mancuernas (55/40/35/25 lb) y pista.'
            },
            {
                title: 'Elizabeth & Bike Interval Grinder',
                format: '4 SERIES · 4 MIN ON / 1 MIN OFF',
                rmRef: '75% 1RM Power Clean',
                blocks: [
                    { name: '4 INTERVALOS DE 4 MINUTOS', desc: 'Completar el Buy-in en cada intervalo y acumular máximas rondas de Elizabeth en el tiempo restante:', items: ['Buy-in: 24 Cal Bicicleta de CrossFit + 2 Subidas a Cuerda Grande', 'AMRAP restante: 9 Squat Cleans + 9 Ring Dips en anillas'] }
                ],
                pro: 'Squat Clean 135 / 95 lb · Ring Dips estrictos o kipping libres',
                open: 'Squat Clean 95 / 65 lb · Ring Dips con banda negra/azul',
                equip: 'Bicicleta de CrossFit, cuerda grande para escalar, barra 20/15 kg, discos (45, 25, 15, 5 lb) y anillas.'
            },
            {
                title: 'The 100s Partner Benchmark',
                format: 'FOR TIME · CAP 28 MIN · PAREJAS',
                rmRef: '60% 1RM Push Press / Sumo High Pull',
                blocks: [
                    { name: 'COMPLETAR EN ORDEN (CON 200M RUN CADA 100 REPS)', desc: 'Un compañero trabaja mientras el otro sostiene Kettlebell en Rack:', items: ['100 Wall Balls', '100 Sumo Deadlift High Pulls con barra', '100 Box Jumps (24 / 20")', '100 Push Press con barra', '100 Cal Remo (RowErg)'] }
                ],
                pro: 'Barra 95 / 65 lb · KB Hold 24 / 20 kg · Wall Ball 20 / 15 lb',
                open: 'Barra 75 / 45 lb · KB Hold 14 / 12 kg · Wall Ball 15 / 10 lb',
                equip: 'Barra 20/15 kg, discos (25, 15, 10, 5 lb), Wall Balls, cajón, Kettlebells, remo y pista.'
            },
            {
                title: 'Heavy Back Squat & Synchro Burpee Box',
                format: 'FUERZA 10M + METCON 14M · PAREJAS',
                rmRef: '80% – 85% 1RM Back Squat',
                blocks: [
                    { name: 'PARTE A · DÍA PESADO EN RACK (10 MIN)', desc: 'Compartiendo rack, subir carga progresivamente:', items: ['5 - 5 - 3 - 3 - 3 Back Squat pesado desde el rack'] },
                    { name: 'PARTE B · AMRAP 14 MINUTOS', desc: 'Piernas bajo fatiga tras sentadilla pesada:', items: ['12 Burpee Box Jump Overs sincronizados', '16 Kettlebell Goblet Lunges en soportes', '20 V-Ups en colchoneta', '200m Sled Sprint ligero en pista'] }
                ],
                pro: 'Back Squat al 85% RM · KB 24 / 20 kg · Cajón 24 / 20"',
                open: 'Back Squat al 75% RM · KB 20 / 14 kg · Step-overs permitidos',
                equip: 'Estructura/rack, barra 20/15 kg, discos (45 a 5 lb), cajón, Kettlebells, soportes lunges, colchoneta y Sled.'
            },
            {
                title: 'Amanda & SkiErg Partner Remix',
                format: 'FOR TIME · CAP 20 MIN · PAREJAS',
                rmRef: '75% 1RM Squat Snatch',
                blocks: [
                    { name: 'ESQUEMA 18 - 14 - 10 COMPARTIDO', desc: 'Antes de cada ronda realizar 30 Cal SkiErg entre los dos:', items: ['Ring Muscle-Ups en anillas (o 2x Pull-Ups + Ring Dips)', 'Squat Snatches con barra olímpica', 'Cash-out final: 60m Overhead Walking Lunge con disco de 45 / 25 lb'] }
                ],
                pro: 'Barra Snatch 135 / 95 lb · Ring Muscle-Ups · Disco 45 / 25 lb',
                open: 'Barra Snatch 95 / 65 lb · Pull-Ups + Ring Dips con banda · Disco 25 / 15 lb',
                equip: 'SkiErg, anillas, estructura, barra 20/15 kg, discos (45, 35, 25, 15, 5 lb) y pista.'
            },
            {
                title: 'Mary & Heavy Dumbbell Carry',
                format: 'AMRAP 20 MINUTOS · PAREJAS',
                rmRef: 'Gimnasia Alta Habilidad + DB 55 lb',
                blocks: [
                    { name: 'RELEVO POR RONDAS COMPLETAS CON FARMERS HOLD', desc: 'Mientras el compañero A completa 1 ronda de Mary, el compañero B camina 50m en Farmers Carry con mancuernas pesadas:', items: ['5 Handstand Push-Ups en soportes', '10 Pistols alternados (o a cajón con control)', '15 Pull-Ups en estructura'] }
                ],
                pro: 'HSPU en soportes libres · Pistols libres · Farmers 2x55 lb (H) / 2x15 kg (M)',
                open: 'HSPU desde cajón · Pistols asistidos con banda en rack · Farmers 2x35 / 25 lb',
                equip: 'Soportes HSPU, cajón, estructura, bandas (azul/naranja) y mancuernas (55, 35, 25 lb y 15 kg).'
            },
            {
                title: 'Grace, Isabel & Rope Cash-Out',
                format: 'FOR TIME · CAP 18 MIN · PAREJAS',
                rmRef: '70% 1RM Clean & Jerk / Snatch',
                blocks: [
                    { name: 'DOBLE BENCHMARK DE BARRA + CUERDA', desc: 'Repartir repeticiones en series rápidas de 3 a 5:', items: ['30 Clean & Jerks por tiempo (Grace)', '2 min Rest & cambio de discos', '30 Power Snatches por tiempo (Isabel)', 'Directo a: 8 Subidas a la cuerda grande (Rope Climbs) + 400m Run'] }
                ],
                pro: 'Barra 135 / 95 lb (20kg+45lb/lado H · 15kg+25+5lb/lado M)',
                open: 'Barra 95 / 65 lb (20kg+25lb/lado H · 15kg+15lb/lado M)',
                equip: 'Barra 20/15 kg, discos (45, 25, 15, 5 lb), cuerda grande para escalar y pista.'
            },
            {
                title: 'Fight Gone Bad Partner Edition',
                format: '3 RONDAS · 5 ESTACIONES DE 1 MIN',
                rmRef: 'Máxima Densidad de Repeticiones',
                blocks: [
                    { name: 'TRABAJO SIMULTÁNEO / RELEVO A LOS 30 SEG', desc: '1 minuto por estación para sumar el máximo puntaje de la pareja (1 min descanso entre rondas):', items: ['Estación 1: Wall Balls (20 / 15 lb)', 'Estación 2: Sumo Deadlift High Pull (75 / 55 lb)', 'Estación 3: Box Jumps (24 / 20")', 'Estación 4: Push Press (75 / 55 lb)', 'Estación 5: Calorías en Remo + Bicicleta de CrossFit'] }
                ],
                pro: 'Barra 75 / 55 lb · Wall Ball 20 / 15 lb · Cajón 24 / 20"',
                open: 'Barra 55 / 35 lb · Wall Ball 15 / 10 lb · Cajón 20"',
                equip: 'Barra 20/15 kg, discos (15, 10, 5 lb), Wall Balls, cajón, remo y bicicleta de CrossFit.'
            },
            {
                title: 'Sled Pull, Battle Rope & Cluster 24',
                format: 'EMOM 24 MIN · PAREJAS',
                rmRef: '75% 1RM Squat Clean Thruster',
                blocks: [
                    { name: 'ROTACIÓN DE 3 MINUTOS (8 VUELTAS)', desc: 'Ambos trabajan dentro del minuto:', items: ['Min 1: 30m Sled Pull con cuerda grande + 30m Sprint', 'Min 2: 8 Squat Clusters pesados (4 cada uno)', 'Min 3: 45 seg Battle Rope Squat Waves + 12 Ab Wheel Rollouts'] }
                ],
                pro: 'Clusters 135 / 95 lb · Sled Pull con 3x45 lb + 35 lb',
                open: 'Clusters 95 / 65 lb · Sled Pull con 2x45 lb',
                equip: 'Sled, cuerda grande, barra 20/15 kg, discos (45, 35, 25, 15, 5 lb), rueda abdominal y colchoneta.'
            },
            {
                title: 'Helen & Kettlebell Snatch Relay',
                format: '6 RONDAS POR TIEMPO · CAP 22 MIN',
                rmRef: 'Kettlebell 24 / 20 / 14 kg',
                blocks: [
                    { name: '6 RONDAS (CORREN JUNTOS, DIVIDEN EL RESTO)', desc: 'Mantener ritmo alto de carrera en pista abierta:', items: ['400m Run juntos en pista', '24 American Kettlebell Swings', '16 Single-Arm Kettlebell Snatches', '16 Pull-Ups en estructura (PRO: Chest-to-Bar)'] }
                ],
                pro: 'Kettlebell 24 kg (H) / 20 kg (M) · C2B Pull-Ups',
                open: 'Kettlebell 20 kg (H) / 14 o 12 kg (M) · Pull-Ups o banda',
                equip: 'Pista abierta, Kettlebells (24, 20, 14, 12 kg), estructura y bandas.'
            },
            {
                title: 'Sandbag Bear Complex & Ski/Row',
                format: 'FOR TIME · CAP 25 MIN · PAREJAS',
                rmRef: '70% 1RM Bear Complex + Sandbag 75 lb',
                blocks: [
                    { name: '3 BLOQUES DE CARGA Y MOTOR', desc: '1 Bear Complex = Power Clean + Front Squat + Push Press + Back Squat + Push Press:', items: ['Bloque 1: 1000m Remo + 14 ciclos de Bear Complex con barra', 'Bloque 2: 1000m SkiErg + 100m Sandbag Carry (75 lb) + 40 Toes to Bar', 'Bloque 3: 800m Run juntos + 14 ciclos de Bear Complex'] }
                ],
                pro: 'Barra Bear Complex 115 / 80 lb · Sandbag 75 lb',
                open: 'Barra Bear Complex 85 / 55 lb · Saco con agarres 20 / 10 kg',
                equip: 'Remo, SkiErg, barra 20/15 kg, discos (35, 25, 15, 10, 5 lb), Sandbag 75 lb / sacos, estructura y pista.'
            },
            {
                title: 'Synchro Dumbbell Thruster & Rope',
                format: 'AMRAP 18 MINUTOS · PAREJAS',
                rmRef: 'Mancuernas 50 / 35 lb (o 15 kg)',
                blocks: [
                    { name: 'AMRAP 18 MIN DE ALTA TENSIÓN', desc: 'Thrusters y V-Ups 100% sincronizados:', items: ['10 Dumbbell Thrusters Sincronizados (par de mancuernas)', '2 Subidas a la cuerda grande (Rope Climbs, 1 cada uno)', '14 V-Ups Sincronizados en colchoneta', '20 Cal Bicicleta de CrossFit (10 c/u a sprint)'] }
                ],
                pro: 'Par de Mancuernas 50 / 35 lb (o 15 kg) · Rope Climb sin salto',
                open: 'Par de Mancuernas 35 / 20 lb · 10 Pull-Ups con banda negra/azul',
                equip: 'Mancuernas (50, 35, 20 lb y 15 kg), cuerda grande para escalar, colchonetas y CrossFit Bike.'
            },
            {
                title: 'Heavy Front Squat & Wall Ball 150',
                format: 'FOR TIME · CAP 20 MIN · PAREJAS',
                rmRef: '75% – 80% 1RM Front Squat',
                blocks: [
                    { name: 'BARRA DESDE EL PISO (SIN RACK)', desc: 'Cada vez que la barra toca el piso durante los Front Squats, ambos hacen 6 Burpees:', items: ['150 Wall Balls repartidos (en series mínimas de 15)', '30 Front Squats pesados (tomados con Squat Clean del piso)', '60 Chest-to-Bar Pull-Ups', '800m Run final cargando balón medicinal'] }
                ],
                pro: 'Front Squat 165 / 115 lb (20kg+45+15lb/lado H · 15kg+35+5lb/lado M) · WB 20 / 15 lb',
                open: 'Front Squat 115 / 75 lb · Pull-Ups regulares · WB 15 / 10 lb',
                equip: 'Barra 20/15 kg, discos (45, 35, 25, 15, 5 lb), Wall Balls (20/15/10 lb), estructura y pista.'
            },
            {
                title: 'Band Resisted Sprints & Ring Dip Ladder',
                format: '10 RONDAS POR TIEMPO · CAP 20 MIN',
                rmRef: 'Potencia Explosiva + Gimnasia',
                blocks: [
                    { name: 'ESCALERA 2-4-6-8-10-10-8-6-4-2', desc: 'Entre cada escalón de gimnasia realizan sprint resistido con banda negra en cintura:', items: ['Ring Dips en anillas + Strict Pull-Ups en estructura', '40m Partner Band-Resisted Sprint en pista con banda negra', '10 Kettlebell Goblet Squats (24 / 20 kg) al terminar cada sprint'] }
                ],
                pro: 'Anillas libres (o con disco en cintura) · KB 24 / 20 kg · Banda negra',
                open: 'Anillas asistidas con banda azul · KB 20 / 14 kg · Banda azul',
                equip: 'Anillas, estructura, bandas elásticas (negra y azul), Kettlebells (24/20/14 kg) y pista.'
            },
            {
                title: 'Deadlift, Sled & Ab-Wheel Grinder',
                format: '4 RONDAS POR TIEMPO · CAP 24 MIN',
                rmRef: '75% 1RM Deadlift + Trineo',
                blocks: [
                    { name: 'CADENA POSTERIOR Y CORE EXTREMO', desc: 'Dividir repeticiones en mitades iguales:', items: ['20 Deadlifts con barra olímpica', '50m Sled Push pesado en pista', '24 Ab Wheel Rollouts en colchoneta', '30 Box Jump Overs con paso rápido', '500m SkiErg'] }
                ],
                pro: 'Deadlift 225 / 155 lb · Sled 4x45 lb + 2x25 lb · Cajón 24 / 20"',
                open: 'Deadlift 155 / 105 lb · Sled 2x45 lb + 2x25 lb · Cajón 20"',
                equip: 'Barra 20/15 kg, discos (45, 35, 25, 15 lb), Sled, rueda abdominal, colchoneta, cajón y SkiErg.'
            },
            {
                title: 'Clean & Jerk Pyramid + Triple Erg',
                format: 'FOR TIME · CAP 25 MIN · PAREJAS',
                rmRef: '65% → 75% → 85% 1RM Clean & Jerk',
                blocks: [
                    { name: '3 ETAPAS CON SUBIDA DE DISCOS', desc: 'Completar calorías en máquinas antes de cada bloque de barra:', items: ['Etapa 1: 40 Cal Remo + 20 Clean & Jerks (115 / 80 lb)', 'Etapa 2: 40 Cal SkiErg + 14 Clean & Jerks (145 / 100 lb)', 'Etapa 3: 40 Cal CrossFit Bike + 8 Clean & Jerks (175 / 120 lb)'] }
                ],
                pro: 'Barras 115 → 145 → 175 lb (H) / 80 → 100 → 120 lb (M)',
                open: 'Barras 85 → 105 → 125 lb (H) / 55 → 70 → 85 lb (M)',
                equip: 'Remo, SkiErg, CrossFit Bike, barra 20/15 kg y discos (45, 35, 25, 15, 10, 5 lb).'
            },
            {
                title: 'Sandbag Lunges, Rope & Synchro Burpees',
                format: 'AMRAP 22 MINUTOS · PAREJAS',
                rmRef: 'Sandbag 75 lb + Sacos 30/20 kg',
                blocks: [
                    { name: 'GIRO CONTINUO DE 22 MINUTOS', desc: 'No soltar el saco al suelo durante los 50m de Lunges:', items: ['50m Sandbag Walking Lunges (cambiando al hombro)', '3 Subidas a la cuerda grande (Rope Climbs)', '16 Synchro Burpees pecho al suelo', '20 Kettlebell Swings pesados (24 / 20 kg)'] }
                ],
                pro: 'Sandbag 75 lb / Saco 30 kg · KB 24 / 20 kg · Rope Climb',
                open: 'Saco 20 / 10 kg · KB 20 / 14 kg · 12 Pull-Ups con banda',
                equip: 'Sandbag 75 lb, sacos (30/20/10 kg), cuerda grande para escalar, Kettlebells y pista.'
            },
            {
                title: 'Overhead Lunges, T2B & Battle Rope',
                format: '5 RONDAS POR TIEMPO · CAP 20 MIN',
                rmRef: 'Disco 45 / 25 lb + Mancuernas 50 lb',
                blocks: [
                    { name: '5 RONDAS EN PAREJA', desc: 'Un compañero hace Battle Rope mientras el otro hace Toes to Bar:', items: ['40m Overhead Walking Lunges con disco de 45 / 25 lb', '24 Toes to Bar (mientras el compañero bate la cuerda grande en squat)', '16 Dumbbell Hang Squat Cleans (50 / 35 lb)', '200m Sprint juntos en pista'] }
                ],
                pro: 'Disco 45 / 25 lb · Mancuernas 50 / 35 lb (o 15 kg) · T2B estrictos/kipping',
                open: 'Disco 25 / 15 lb · Mancuernas 35 / 20 lb · Knees-to-Elbows',
                equip: 'Discos (45, 25, 15 lb), estructura, cuerda grande (Battle Rope), mancuernas y pista.'
            },
            {
                title: 'Holleyman Partner Adaptation',
                format: '30 RONDAS RELEVO (15 C/U) · CAP 26M',
                rmRef: '80% 1RM Power Clean',
                blocks: [
                    { name: '30 RONDAS I-GO-YOU-GO (1 RONDA CADA UNO)', desc: 'Rondas explosivas y cortas con carga exigente en la barra:', items: ['5 Wall Balls (20 / 15 lb)', '3 Handstand Push-Ups en soportes', '1 Power Clean o Squat Clean pesado con barra'] }
                ],
                pro: 'Power Clean 185 / 125 lb (20kg+2x35lb/lado H · 15kg+45lb/lado M) · WB 20 / 15 lb',
                open: 'Power Clean 135 / 95 lb · Pike HSPU en soportes · WB 15 / 10 lb',
                equip: 'Wall Balls (20/15/10 lb), soportes HSPU, barra 20/15 kg y discos (45, 35, 25, 15, 5 lb).'
            },
            {
                title: '1 Mile Track Relay & Barbell Complex',
                format: 'FOR TIME · CAP 24 MIN · PAREJAS',
                rmRef: '70% 1RM Thruster / Hang Clean',
                blocks: [
                    { name: '4 RONDAS DE PISTA Y BARRA', desc: 'En cada ronda corren 400m juntos cargando 1 balón medicinal:', items: ['400m Run en pista con Wall Ball (20 / 15 lb)', '12 Hang Power Cleans con barra', '12 Front Squats con barra', '12 Push Jerks con barra', '12 Burpees saltando la barra'] }
                ],
                pro: 'Barra 115 / 80 lb (20kg+35lb/lado H · 15kg+20lb/lado M) · WB 20 / 15 lb',
                open: 'Barra 85 / 55 lb (20kg+20lb/lado H · 15kg+10lb/lado M) · WB 15 / 10 lb',
                equip: 'Pista abierta, Wall Balls (20/15/10 lb), barra 20/15 kg y discos (35, 25, 15, 10, 5 lb).'
            },
            {
                isRealBox: true,
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
                pro: 'Barra 135 / 95 lb (20kg + 45lb por lado H · 15kg + 25+5lb por lado M) · KB 24 / 20 kg · Wall Ball 20 / 15 lb',
                open: 'Barra 95 / 65 lb (20kg + 25lb por lado H · 15kg + 15lb por lado M) · KB 20 / 14 kg · Wall Ball 15 / 10 lb',
                equip: 'Barra olímpica (20/15 kg), discos (45, 25, 15, 5 lb), Wall Ball (20/15/10 lb), Kettlebell (24/20/14 kg), estructura de dominadas y colchonetas.'
            }
        ];

        return specs.map((s, idx) => {
            const num = String(idx + 1).padStart(2, '0');
            return {
                id: `pwod-${num}`,
                code: s.isRealBox ? `PARTNER WOD #${num} · REAL BOX` : `PARTNER WOD #${num}`,
                title: s.title,
                format: s.format,
                rmRef: s.rmRef,
                blocks: s.blocks,
                weights: { pro: s.pro, open: s.open },
                equipment: s.equip
            };
        });
    }

    // =========================================
    // CATÁLOGO DE 30 INDIVIDUAL WODS (CF-L2 & BOX INVENTORY)
    // =========================================
    buildIndividualWods30() {
        const specs = [
            {
                title: 'Heavy Clean & Jerk 3RM + 21-15-9',
                format: 'FUERZA 12 MIN + FOR TIME 14 MIN',
                rmRef: '80% – 85% 1RM Clean & Jerk (CF-L2)',
                blocks: [
                    { name: 'PARTE A · DÍA PESADO (3-3-3-3-3)', desc: 'Plan oficial CF-L2: 5 series ascendentes buscando 3RM con técnica sólida:', items: ['3 Squat Clean & Split Jerk (descanso 2–3 min entre series)'] },
                    { name: 'PARTE B · 21 - 15 - 9 FOR TIME', desc: 'Después de cada ronda realiza 1 subida a la cuerda grande y 40m de carrera con saco:', items: ['Thrusters con barra olímpica', 'Toes to Bar en estructura', 'Handstand Push-Ups en soportes (HSPU)', 'Entre rondas: 1 Rope Climb + 40m Carry con saco (30/20 kg)'] }
                ],
                pro: 'Thrusters 115 / 80 lb (20kg+35lb/lado H · 15kg+20lb/lado M) · Saco 30 / 20 kg',
                open: 'Thrusters 85 / 55 lb (20kg+20lb/lado H · 15kg+10lb/lado M) · Saco 20 / 10 kg',
                equip: 'Barra 20/15 kg, discos (45, 35, 25, 15, 10, 5 lb), estructura, soportes HSPU, cuerda grande y sacos (30/20/10 kg).'
            },
            {
                title: 'Triple Erg & Kettlebell Hell',
                format: 'AMRAP 20 MINUTOS · MOTOR PURO',
                rmRef: '70% Capacidad Aeróbica / KB 24-20 kg',
                blocks: [
                    { name: 'SECUENCIA CONTINUA DURANTE 20 MINUTOS', desc: 'Mantén ritmo constante en las 3 máquinas y control de zona media:', items: ['15 Cal SkiErg', '15 American Kettlebell Swings', '15 Cal Bicicleta de CrossFit', '16 Goblet Walking Lunges (con soportes o paso libre)', '15 Cal Remo (RowErg)', '12 Ab Wheel Rollouts en colchoneta'] }
                ],
                pro: 'Kettlebell 24 kg (H) / 20 kg (M)',
                open: 'Kettlebell 20 kg (H) / 14 kg o 12 kg (M)',
                equip: 'SkiErg, bicicleta de CrossFit, remo, pesas rusas (24, 20, 14, 12 kg), rueda abdominal y colchoneta.'
            },
            {
                title: 'Sandbag, DBs & Battle Rope Chipper',
                format: 'FOR TIME · CAP 18 MIN',
                rmRef: 'Mancuernas 55 lb / 15 kg + Sandbag 75 lb',
                blocks: [
                    { name: 'CHIPPER DE ALTA DENSIDAD', desc: 'Completar de principio a fin manteniendo columna neutral:', items: ['800m Run en pista o campo abierto', '40 Wall Balls (20 / 15 lb)', '30 Dumbbell Box Step-Overs con par de mancuernas', '20 Sandbag Cleans sobre el hombro con Sandbag de 75 lb', '60 seg acumulados de Sentadilla batiendo cuerda grande (Battle Rope)', '15 Bar Muscle-Ups o 25 Chest-to-Bar Pull-Ups'] }
                ],
                pro: 'Mancuernas 55 / 35 lb (o par de 15 kg M) · Sandbag 75 lb · Wall Ball 20 / 15 lb',
                open: 'Mancuernas 35 / 20 lb · Saco con agarres 20 / 10 kg · Wall Ball 15 / 10 lb',
                equip: 'Pista abierta, Wall Ball (20/15/10 lb), cajón, mancuernas, Sandbag 75 lb / sacos, cuerda grande y estructura.'
            },
            {
                title: 'Fran + Heavy Front Squat Finisher',
                format: 'BENCHMARK < 6 MIN + FUERZA 10 MIN',
                rmRef: '60% RM Thruster + 85% RM Front Squat',
                blocks: [
                    { name: 'BLOQUE 1 · "FRAN" FOR TIME (Cap 7 min)', desc: 'Clásico par complementario CF-L2 (empuje inferior + tracción superior):', items: ['21 - 15 - 9 Thrusters con barra', '21 - 15 - 9 Pull-Ups en estructura'] },
                    { name: 'BLOQUE 2 · TRAS 4 MIN DE DESCANSO', desc: 'En ventana de 8 minutos desde el rack:', items: ['5 - 3 - 3 - 1 - 1 Front Squat pesado al 80%–90% 1RM'] }
                ],
                pro: 'Fran 95 / 65 lb (20kg+25lb/lado H · 15kg+15lb/lado M)',
                open: 'Fran 65 / 45 lb · Pull-Ups con banda azul/negra',
                equip: 'Barra olímpica 20/15 kg, discos (45, 35, 25, 15, 10, 5 lb), estructura/rack y bandas.'
            },
            {
                title: 'Diane & Sled Push Sprint',
                format: 'FOR TIME · CAP 12 MIN',
                rmRef: '75% 1RM Deadlift + HSPU',
                blocks: [
                    { name: '21 - 15 - 9 CON SLED EN CADA RONDA', desc: 'Al terminar cada serie de HSPU empujar el trineo en pista:', items: ['21 - 15 - 9 Deadlifts con barra olímpica', '21 - 15 - 9 Handstand Push-Ups en soportes', 'Después de cada ronda: 25m Sled Push pesado + 25m Sprint'] }
                ],
                pro: 'Deadlift 225 / 155 lb (20kg+2x45lb/lado H · 15kg+45+15lb/lado M) · HSPU en soportes',
                open: 'Deadlift 155 / 105 lb · HSPU elevados desde cajón (progresión CF-L2)',
                equip: 'Barra 20/15 kg, discos (45, 35, 25, 15 lb), soportes HSPU, cajón, Sled y pista.'
            },
            {
                title: 'Mary CF-L2 Gymnastics Benchmark',
                format: 'AMRAP 20 MINUTOS · GIMNASIA PURA',
                rmRef: 'Peso Corporal · Alta Habilidad (CF-L2 p.76)',
                blocks: [
                    { name: 'AMRAP 20 MINUTOS (META: 8 A 15+ RONDAS)', desc: 'Triplet gimnástico de empuje invertido, sentadilla unilateral y tracción:', items: ['5 Handstand Push-Ups en soportes', '10 Pistols alternados (rompiendo paralelo con talón apoyado)', '15 Pull-Ups en estructura'] }
                ],
                pro: 'HSPU libres · Pistols libres (o con KB 12 kg si +12 rondas) · Kipping/Butterfly Pull-Ups',
                open: '5 HSPU desde cajón + 10 Pistols a cajón o con banda en rack + 10 Pull-Ups con banda',
                equip: 'Soportes HSPU, cajón, estructura y bandas elásticas (negra, azul, naranja).'
            },
            {
                title: 'Elizabeth & Rope Climb Couplet',
                format: 'FOR TIME · CAP 12 MIN',
                rmRef: '70% – 75% 1RM Squat Clean',
                blocks: [
                    { name: '21 - 15 - 9 + CUERDA GRANDE', desc: 'Recibir cada Clean en Front Squat profundo y bloquear codos en anillas:', items: ['21 - 15 - 9 Squat Cleans con barra olímpica', '21 - 15 - 9 Ring Dips en anillas', 'Al final de cada ronda: 1 Subida a la cuerda grande (Rope Climb)'] }
                ],
                pro: 'Barra 135 / 95 lb (20kg+45lb/lado H · 15kg+25+5lb/lado M) · Anillas libres',
                open: 'Barra 95 / 65 lb · Ring Dips con banda azul/negra · 12-9-6 si novato',
                equip: 'Barra 20/15 kg, discos (45, 25, 15, 5 lb), anillas, bandas y cuerda grande para escalar.'
            },
            {
                title: 'Amanda & SkiErg Conditioning',
                format: 'FOR TIME · CAP 14 MIN',
                rmRef: '75% 1RM Squat Snatch (CF-L2 p.54)',
                blocks: [
                    { name: 'ESQUEMA 9 - 7 - 5 CON SKIERG', desc: 'Alta habilidad gimnástica y levantamiento olímpico:', items: ['Buy-in: 500m SkiErg a ritmo fuerte', '9 - 7 - 5 Ring Muscle-Ups en anillas', '9 - 7 - 5 Squat Snatches con barra olímpica', 'Cash-out: 400m Run en pista abierta'] }
                ],
                pro: 'Squat Snatch 135 / 95 lb · Ring Muscle-Ups',
                open: 'Squat Snatch 95 / 65 lb · 18-14-10 Pull-Ups + Ring Dips con banda',
                equip: 'SkiErg, anillas, estructura, barra 20/15 kg, discos (45, 25, 15, 5 lb) y pista.'
            },
            {
                title: 'Heavy Hang Squat Clean Pyramid (CF-L2)',
                format: 'DÍA PESADO · 9 SERIES (22 MIN)',
                rmRef: '80% → 95%+ 1RM Hang Squat Clean',
                blocks: [
                    { name: 'PIRÁMIDE DE FUERZA 5-5-3-3-3-1-1-1-1', desc: 'Esquema oficial CF-L2 (p.63): enfocarse en extensión violenta de cadera y codos altos al recibir:', items: ['2 series de 5 reps (75%–80% RM)', '3 series de 3 reps (82%–88% RM)', '4 series de 1 rep buscando máximo del día (90%–100% RM)', 'Entre series: 8 Ab Wheel Rollouts sin fatigar piernas'] }
                ],
                pro: 'Subida libre hasta récord de 1RM con collares puestos',
                open: 'Mantener 5x3 al 80% RM perfeccionando recepción en squat profundo',
                equip: 'Barra olímpica 20/15 kg, todos los discos (45, 35, 25, 15, 10, 5 lb), rueda abdominal y colchoneta.'
            },
            {
                title: 'Row, Thruster & T2B Classic (CF-L2 WOD 3)',
                format: '5 RONDAS POR TIEMPO · CAP 18 MIN',
                rmRef: '55% – 60% 1RM Thruster (Volumen Alto)',
                blocks: [
                    { name: '5 RONDAS POR TIEMPO (CF-L2 p.63)', desc: 'Triplet modal mixto (M-W-G) de resistencia metabólica:', items: ['250m Remo (RowErg)', '25 Thrusters con barra ligera/media', '15 Toes to Bar en estructura'] }
                ],
                pro: 'Barra 75 / 55 lb (o 45 lb unbroken a sprint)',
                open: 'Barra vacía 20 kg / 15 kg · 12 Knees-to-Elbows',
                equip: 'Remo (RowErg), barra 20/15 kg, discos (15, 10, 5 lb) y estructura.'
            },
            {
                title: 'Overhead Walking Lunge & Core (CF-L2 WOD 9)',
                format: 'AMRAP 12 MINUTOS',
                rmRef: 'Disco 45 / 25 lb + Mancuernas',
                blocks: [
                    { name: 'AMRAP 12 MINUTOS DE ESTABILIDAD MEDIA', desc: 'Hombros activos empujando el disco/mancuerna hacia arriba:', items: ['50m Overhead Walking Lunge con disco de 45 / 25 lb', '20 V-Ups en colchoneta + 10 Ab Wheel Rollouts', '15 Cal Bicicleta de CrossFit'] }
                ],
                pro: 'Disco de 45 lb (H) / 25 lb (M) con codos bloqueados',
                open: 'Disco de 25 lb (H) / 15 o 10 lb (M)',
                equip: 'Discos (45, 25, 15, 10 lb), colchoneta, rueda abdominal, CrossFit Bike y pista.'
            },
            {
                title: '1 Mile Run & 50 Pull-Ups (CF-L2 WOD 8)',
                format: '3 RONDAS POR TIEMPO · CAP 28 MIN',
                rmRef: 'Resistencia de Agarre & Carrera',
                blocks: [
                    { name: '3 RONDAS DE LARGO ALIENTO', desc: 'Gestionar las 50 dominadas en series inteligentes desde la ronda 1:', items: ['800m Run en pista abierta + 500m Remo (equivalente a 1 milla mixta)', '50 Pull-Ups en estructura (o 35 Chest-to-Bar)'] }
                ],
                pro: 'Pull-Ups libres (PRO+: con saco de 10 kg en carrera)',
                open: '30 Pull-Ups asistidos con banda negra/azul + 15 Ring Rows',
                equip: 'Pista o campo abierto, remo, estructura, anillas y bandas elásticas.'
            },
            {
                title: 'Rope Climb, Pistol & SkiErg 20',
                format: 'AMRAP 20 MINUTOS',
                rmRef: 'Gimnasia + Potencia de Tracción',
                blocks: [
                    { name: 'AMRAP 20 MIN (ADAPTACIÓN CF-L2 WOD 5)', desc: 'Rotación constante de tracción vertical, pierna unilateral y cardio:', items: ['2 Subidas a la cuerda grande (Rope Climbs)', '20 Pistols alternados (o a cajón)', '20 Cal SkiErg'] }
                ],
                pro: '2 Rope Climbs sin salto + 20 Pistols libres',
                open: '1 Rope Climb (o 8 Strict Pull-Ups con banda) + 16 Pistols a cajón',
                equip: 'Cuerda grande para escalar, cajón, estructura, bandas y SkiErg.'
            },
            {
                title: 'Helen en Pista Abierta',
                format: '3 RONDAS POR TIEMPO · CAP 14 MIN',
                rmRef: 'Kettlebell 24 / 14 kg',
                blocks: [
                    { name: '3 RONDAS A SPRINT', desc: 'Clásico triplet de referencia CrossFit:', items: ['400m Run en pista abierta', '21 American Kettlebell Swings', '12 Pull-Ups en estructura'] }
                ],
                pro: 'Kettlebell 24 kg (H) / 14 kg o 20 kg (M)',
                open: 'Kettlebell 20 kg (H) / 12 kg (M) · Pull-Ups con banda',
                equip: 'Pista abierta, Kettlebells (24, 20, 14, 12 kg), estructura y bandas.'
            },
            {
                title: 'Grace & Heavy Sandbag Carry',
                format: 'FOR TIME · CAP 10 MIN',
                rmRef: '70% – 75% 1RM Clean & Jerk',
                blocks: [
                    { name: '30 CLEAN & JERKS + SANDBAG INTERCALADO', desc: 'Cada 10 repeticiones de Clean & Jerk realiza 50m de carrera con Sandbag:', items: ['10 Clean & Jerks + 50m Sandbag Carry (75 lb)', '10 Clean & Jerks + 50m Sandbag Carry (75 lb)', '10 Clean & Jerks + 50m Sled Sprint final'] }
                ],
                pro: 'Barra 135 / 95 lb (20kg+45lb/lado H · 15kg+25+5lb/lado M) · Sandbag 75 lb',
                open: 'Barra 95 / 65 lb · Saco con agarres 20 / 10 kg',
                equip: 'Barra 20/15 kg, discos (45, 25, 15, 5 lb), Sandbag 75 lb / sacos, Sled y pista.'
            },
            {
                title: 'Dumbbell Devil, Box & Battle Rope',
                format: '4 RONDAS POR TIEMPO · CAP 18 MIN',
                rmRef: 'Mancuernas 50 / 35 lb (o 15 kg)',
                blocks: [
                    { name: '4 RONDAS DE POTENCIA Y PULSO', desc: 'Mantener espalda plana al levantar las mancuernas desde el suelo:', items: ['10 Dumbbell Devil Press (par de mancuernas)', '15 Box Jump Overs (24 / 20")', '40 seg Sentadilla activa batiendo cuerda grande (Battle Rope)', '200m Run en pista abierta'] }
                ],
                pro: 'Par de Mancuernas 50 lb (H) / Par de 15 kg o 35 lb (M)',
                open: 'Par de Mancuernas 35 lb (H) / 20 lb (M)',
                equip: 'Mancuernas (50, 35, 20 lb y 15 kg), cajón, cuerda grande y pista.'
            },
            {
                title: 'Heavy Push Jerk 7x1 + Wall Ball/Row',
                format: 'DÍA PESADO 12M + SPRINT 8M',
                rmRef: '85% – 95% 1RM Push Jerk / Split Jerk',
                blocks: [
                    { name: 'PARTE A · 7 SERIES DE 1 REP (CF-L2 p.63)', desc: 'Tomado desde el rack, buscando máxima carga con dip-drive vertical:', items: ['1-1-1-1-1-1-1 Push Jerk o Split Jerk pesado'] },
                    { name: 'PARTE B · FOR TIME (Cap 8 min)', desc: 'Pareja explosiva de pierna y respiración:', items: ['1000m Remo (RowErg)', '75 Wall Balls (20 / 15 lb)'] }
                ],
                pro: 'Jerk al 90%+ 1RM · Wall Ball 20 / 15 lb',
                open: 'Jerk técnico al 80% 1RM · Wall Ball 15 / 10 lb',
                equip: 'Estructura/rack, barra 20/15 kg, discos (45 a 5 lb), remo y Wall Balls.'
            },
            {
                title: 'Sled Push/Pull & Ring Dip EMOM 16',
                format: 'EMOM 16 MINUTOS (4 RONDAS)',
                rmRef: 'Trineo Pesado + Gimnasia',
                blocks: [
                    { name: '4 ESTACIONES DE 1 MINUTO', desc: '40 segundos de trabajo intenso y 20 segundos de transición:', items: ['Min 1: 30m Sled Push pesado en pista', 'Min 2: 12 Ring Dips en anillas + 6 Strict Pull-Ups', 'Min 3: 30m Sled Pull con cuerda grande', 'Min 4: 16 Cal Bicicleta de CrossFit'] }
                ],
                pro: 'Sled 4x45 lb (H) / 2x45+35 lb (M) · Anillas libres',
                open: 'Sled 2x45+25 lb (H) / 1x45+25 lb (M) · Anillas con banda azul',
                equip: 'Sled push/pull, cuerda grande, discos (45, 35, 25 lb), anillas, estructura, bandas y CrossFit Bike.'
            },
            {
                title: 'Kettlebell Fran & Ab-Wheel',
                format: '21 - 15 - 9 FOR TIME · CAP 12 MIN',
                rmRef: 'Doble Kettlebell 24 / 20 / 14 kg',
                blocks: [
                    { name: '21 - 15 - 9 CON DOBLE KETTLEBELL / MANCUERNA', desc: 'Estímulo de estabilidad unilateral de hombro y core:', items: ['21 - 15 - 9 Double KB / DB Thrusters', '21 - 15 - 9 Chest-to-Bar Pull-Ups', '15 - 12 - 9 Ab Wheel Rollouts en colchoneta'] }
                ],
                pro: '2x24 o 20 kg KB (o 2x50 lb DB) H · 2x14 kg KB (o 2x15 kg DB) M',
                open: '2x14 o 12 kg KB (o 2x30 lb DB) · Pull-Ups regulares o con banda',
                equip: 'Kettlebells (24, 20, 14, 12 kg) o mancuernas, estructura, rueda abdominal y colchoneta.'
            },
            {
                title: 'Cindy con Chaleco/Saco (20 Min)',
                format: 'AMRAP 20 MINUTOS',
                rmRef: 'Benchmark Clásico de Gimnasia',
                blocks: [
                    { name: 'AMRAP 20 MINUTOS (CADA 5 RONDAS: 200M RUN CON SACO)', desc: 'Mantener calidad de rango de movimiento en las 20 minutos:', items: ['5 Pull-Ups en estructura', '10 Push-Ups pecho al piso', '15 Air Squats profundos', 'Cada 5 rondas completadas: 200m Run cargando saco de 20 / 10 kg'] }
                ],
                pro: 'Saco de 20 kg (H) / 10 kg (M) cada 5 rondas · 18+ rondas objetivo',
                open: 'Pull-Ups con banda azul/naranja · Carrera sin saco',
                equip: 'Estructura, bandas elásticas, sacos con agarres (20/10 kg) y pista.'
            },
            {
                title: 'Heavy Deadlift 5x5 & Ski/Burpee Sprint',
                format: 'FUERZA 12M + METCON 10M',
                rmRef: '80% – 85% 1RM Deadlift (CF-L2 p.36)',
                blocks: [
                    { name: 'PARTE A · 5 SERIES DE 5 REPS', desc: 'Día pesado de cadena posterior manteniendo curvatura lumbar:', items: ['5 x 5 Deadlifts pesados (descanso 2 min entre series)'] },
                    { name: 'PARTE B · 4 RONDAS SPRINT (Cap 10 min)', desc: 'Explosividad metabólica corta:', items: ['15 Cal SkiErg', '12 Burpees saltando sobre la barra', '10 Kettlebell Swings pesados (24 / 20 kg)'] }
                ],
                pro: 'Deadlift 5x5 al 82% RM · KB 24 / 20 kg',
                open: 'Deadlift 5x5 al 75% RM · KB 20 / 14 kg',
                equip: 'Barra 20/15 kg, discos (45 a 5 lb), SkiErg y Kettlebells (24/20/14 kg).'
            },
            {
                title: 'JT Gymnastics & Push-Up Benchmark',
                format: '21 - 15 - 9 FOR TIME · CAP 14 MIN',
                rmRef: 'Triplet de Empuje Superior (CF-L2 p.50)',
                blocks: [
                    { name: '21 - 15 - 9 EMPUJE EXTREMO + RUN', desc: 'Gestionar la fatiga de tríceps y hombros desde la serie de 21:', items: ['Buy-in: 400m Run en pista abierta', '21 - 15 - 9 Handstand Push-Ups en soportes', '21 - 15 - 9 Ring Dips en anillas', '21 - 15 - 9 Push-Ups en soportes (déficit)', 'Cash-out: 400m Run en pista abierta'] }
                ],
                pro: 'HSPU en soportes + Ring Dips libres + Deficit Push-Ups',
                open: 'Pike HSPU en cajón + Ring Dips con banda + Push-Ups regulares',
                equip: 'Soportes HSPU/lunges, anillas, cajón, bandas y pista abierta.'
            },
            {
                title: 'Barbell Cluster & CrossFit Bike Death By',
                format: 'EMOM HASTA EL FALLO (O 16 MIN)',
                rmRef: '70% 1RM Squat Clean Thruster',
                blocks: [
                    { name: 'ALTERNAR MINUTOS PARES E IMPARES', desc: 'Subir 1 repetición cada vuelta hasta completar 8 rondas (16 min):', items: ['Min Impar: 4 → 5 → 6 → 7 → 8 → 9 → 10 → 11 Squat Clusters con barra', 'Min Par: 12 / 10 Cal Bicicleta de CrossFit + 6 Toes to Bar'] }
                ],
                pro: 'Barra Cluster 135 / 95 lb (20kg+45lb/lado H · 15kg+25+5lb/lado M)',
                open: 'Barra Cluster 95 / 65 lb · Knees-to-Elbows',
                equip: 'Barra 20/15 kg, discos (45, 25, 15, 5 lb), CrossFit Bike y estructura.'
            },
            {
                title: 'Sandbag 75, Rope & Wall Ball Triplet',
                format: '4 RONDAS POR TIEMPO · CAP 20 MIN',
                rmRef: 'Sandbag 75 lb + Wall Ball 20 lb',
                blocks: [
                    { name: '4 RONDAS DE FUERZA FUNCIONAL', desc: 'Objetos no convencionales y tracción vertical:', items: ['50m Sandbag Carry al pecho o al hombro (75 lb / 30 kg)', '30 Wall Balls (20 / 15 lb)', '2 Subidas a la cuerda grande (Rope Climbs)', '15 V-Ups en colchoneta'] }
                ],
                pro: 'Sandbag 75 lb (H) / Saco 30 kg (M) · Wall Ball 20 / 15 lb',
                open: 'Saco 20 / 10 kg · Wall Ball 15 / 10 lb · 10 Pull-Ups con banda',
                equip: 'Sandbag 75 lb, sacos (30/20/10 kg), Wall Balls, cuerda grande, colchoneta y pista.'
            },
            {
                title: 'Overhead Squat 5x3 & Dumbbell Snatch',
                format: 'FUERZA 12M + AMRAP 10M',
                rmRef: '80% 1RM Overhead Squat',
                blocks: [
                    { name: 'PARTE A · 5 SERIES DE 3 REPS', desc: 'Hombros activos empujando la barra y axilas al frente:', items: ['5 x 3 Overhead Squats desde el rack'] },
                    { name: 'PARTE B · AMRAP 10 MINUTOS', desc: 'Velocidad de cadera y salto al cajón:', items: ['16 Dumbbell Snatches alternados (55 / 35 lb)', '12 Box Jump Overs (24 / 20")', '30 seg Battle Rope Squat Waves'] }
                ],
                pro: 'OHS al 80% RM · Mancuerna 55 / 35 lb (o 15 kg)',
                open: 'OHS técnico · Mancuerna 35 / 20 lb',
                equip: 'Rack, barra 20/15 kg, discos (45 a 5 lb), mancuernas (55/35/20 lb), cajón y cuerda grande.'
            },
            {
                title: '5K Row / Run Duathlon & Core',
                format: 'FOR TIME · CAP 30 MIN',
                rmRef: 'Resistencia Monoestructural Alta (>3200m CF-L2)',
                blocks: [
                    { name: '3 BLOQUES DE FONDO Y GIMNASIA', desc: 'Entrenamiento de umbral aeróbico largo:', items: ['1000m Remo + 800m Run + 30 Toes to Bar', '750m Remo + 600m Run + 25 Ab Wheel Rollouts', '500m Remo + 400m Run + 20 Burpees a target'] }
                ],
                pro: 'Ritmo < 1:52/500m en Remo · Toes to Bar sin banda',
                open: 'Ritmo constante · 20 Knees-to-Elbows por ronda',
                equip: 'Remo (RowErg), pista o campo abierto, estructura, rueda abdominal y colchoneta.'
            },
            {
                title: 'Sumo Deadlift High Pull & Ring Muscle',
                format: '5 RONDAS POR TIEMPO · CAP 16 MIN',
                rmRef: '65% 1RM SDHP + Anillas',
                blocks: [
                    { name: '5 RONDAS DE CADERA EXPLOSIVA', desc: 'Extender cadera antes de encoger hombros y halar codos arriba y afuera (CF-L2 p.6):', items: ['15 Sumo Deadlift High Pulls con barra', '10 Ring Dips en anillas (PRO: 5 Ring Muscle-Ups)', '15 Goblet Squats con Kettlebell (24 / 20 kg)', '200m Run en pista'] }
                ],
                pro: 'Barra SDHP 95 / 65 lb · KB 24 / 20 kg · Ring Muscle-Ups / Dips',
                open: 'Barra SDHP 65 / 45 lb · KB 14 / 12 kg · Ring Dips con banda',
                equip: 'Barra 20/15 kg, discos (25, 15, 10, 5 lb), anillas, Kettlebells, bandas y pista.'
            },
            {
                title: 'Dumbbell Lunges, SkiErg & C2B',
                format: 'FOR TIME · CAP 18 MIN',
                rmRef: 'Mancuernas 50 / 35 lb (o 15 kg)',
                blocks: [
                    { name: 'ESCALERA DESCENDENTE 30 - 20 - 10', desc: 'Entre cada escalón realizar 25m de caminata en estocadas con mancuernas:', items: ['30 - 20 - 10 Cal SkiErg', '30 - 20 - 10 Chest-to-Bar Pull-Ups', 'Después de cada ronda: 25m Dumbbell Walking Lunges (soportes disponibles)'] }
                ],
                pro: 'Par de Mancuernas 50 / 35 lb (o 15 kg) · C2B Pull-Ups',
                open: 'Par de Mancuernas 30 / 20 lb · Pull-Ups regulares o con banda',
                equip: 'SkiErg, estructura, mancuernas (50, 35, 30, 20 lb y 15 kg), soportes lunges y pista.'
            },
            {
                title: 'Heavy Snatch Singles & Sprint Triplet',
                format: 'EMOM 10M + FOR TIME 10M',
                rmRef: '80% – 90% 1RM Squat Snatch',
                blocks: [
                    { name: 'PARTE A · EMOM 10 MINUTOS', desc: '1 levantamiento cada minuto cuidando línea media del pie:', items: ['1 Squat Snatch (subiendo del 75% al 90% 1RM)'] },
                    { name: 'PARTE B · 3 RONDAS A TOPE (Cap 10 min)', desc: 'Velocidad máxima de transición:', items: ['12 Power Snatches (95 / 65 lb)', '15 Box Jumps (24 / 20")', '18 Cal Bicicleta de CrossFit'] }
                ],
                pro: 'Barra Parte B: 95 / 65 lb (20kg+25lb/lado H · 15kg+15lb/lado M)',
                open: 'Barra Parte B: 65 / 45 lb',
                equip: 'Barra 20/15 kg, discos (45, 35, 25, 15, 10, 5 lb), cajón y CrossFit Bike.'
            },
            {
                title: 'Monterrey Box Total Engine Test',
                format: 'FOR TIME · CAP 25 MIN',
                rmRef: 'Prueba Integral de Box (70% RM)',
                blocks: [
                    { name: 'PRUEBA COMPLETA DE CAPACIDAD DE TRABAJO', desc: 'Combina pista, trineo, barra, cuerda y máquinas del box:', items: ['800m Run en pista + 50m Sled Push', '21 Thrusters (115 / 80 lb) + 3 Subidas a Cuerda Grande', '1000m Remo + 50m Sandbag Lunges (75 lb / 20 kg)', '15 Power Cleans (135 / 95 lb) + 15 Handstand Push-Ups en soportes', '50 Cal SkiErg + Bicicleta de CrossFit'] }
                ],
                pro: 'Barra 115→135 lb (H) / 80→95 lb (M) · Sandbag 75 lb · Sled 4x45 lb',
                open: 'Barra 85→95 lb (H) / 55→65 lb (M) · Saco 20 / 10 kg · Sled 2x45 lb',
                equip: 'Pista, Sled, barra 20/15 kg, discos (45 a 5 lb), cuerda grande, remo, Sandbag 75 lb/sacos, soportes HSPU, SkiErg y Bike.'
            }
        ];

        return specs.map((s, idx) => {
            const num = String(idx + 1).padStart(2, '0');
            return {
                id: `iwod-${num}`,
                code: `INDIVIDUAL WOD #${num}`,
                title: s.title,
                format: s.format,
                rmRef: s.rmRef,
                blocks: s.blocks,
                weights: { pro: s.pro, open: s.open },
                equipment: s.equip
            };
        });
    }

    // =========================================
    // CATÁLOGO DE 20 HYROX VARIADOS (SIN REPETIDOS + EQUIVALENCIAS DE MÁQUINAS)
    // =========================================
    buildHyrox100Catalog() {
        const specs = [
            {
                title: 'HYROX Oficial 8x1km (Estándar Internacional)',
                tag: 'FORMATO CLÁSICO · MADRID / BERLÍN / TOKIO',
                focus: '8x1000m Run + 8 Estaciones Oficiales con Equivalencias',
                runNote: 'Correr 1000m antes de cada una de las 8 estaciones (8 km totales). Si llueve o rotan máquinas: alternar 1000m Run con 1000m Remo / 1000m Ski / 65 Cal Bike:',
                stations: [
                    { num: '01', name: '1000m SkiErg (o 70 Cal Ski / 65 Cal Bike)', ind: '1000m completos (o 70 Cal si está ocupado usa Remo/Bike)', part: '1000m / 70 Cal entre los dos (relevos cada 250m o 18 Cal)' },
                    { num: '02', name: '50m Sled Push (Empuje de Trineo)', ind: '50m en pista (Equivalente sin trineo: 60 Thrusters 95/65 lb)', part: '50m repartidos cambiando cada 12.5m' },
                    { num: '03', name: '50m Sled Pull (Arrastre con Cuerda Grande)', ind: '50m tracción con cuerda (Equivalente: 40m Bear Crawl con Sandbag 75 lb)', part: '50m repartidos usando extensión de cadera y cuerda grande' },
                    { num: '04', name: '80m Burpee Broad Jumps', ind: '80m continuos (o 55 Burpees saltando disco de 45 lb)', part: '80m alternando cada 8–10 saltos con el compañero' },
                    { num: '05', name: '1000m Remo (o 70 Cal Remo / 65 Cal Bike)', ind: '1000m RowErg (< 1:55/500m) o 65 Cal CrossFit Bike si está ocupado', part: '1000m / 70 Cal en relevos de 250m a máxima potencia' },
                    { num: '06', name: '200m Farmers Carry', ind: '200m con par de Kettlebells (24 / 20 / 14 kg) o Mancuernas', part: '200m en tramos de 50m sin apoyar las pesas en el suelo' },
                    { num: '07', name: '100m Sandbag Lunges', ind: '100m zancadas con Sandbag 75 lb o saco de 20/10 kg', part: '100m pasando el saco de hombro a hombro sin tocar el piso' },
                    { num: '08', name: '100 Wall Balls', ind: '100 lanzamientos rompiendo paralelo al target', part: '100 lanzamientos en series de 15–20 hasta vaciar el tanque' }
                ],
                pro: 'Sled Push: 4x45+2x35 lb · Sled Pull: 3x45+25 lb · Farmers: 2x24 kg KB (o 2x55 lb DB) · Lunges: Sandbag 75 lb / 20 kg · WB: 20 / 15 lb',
                open: 'Sled Push: 3x45 lb · Sled Pull: 2x45 lb · Farmers: 2x20 / 14 kg KB · Lunges: Saco 20 / 10 kg · WB: 15 / 10 lb',
                equip: 'Pista abierta, SkiErg, Sled push/pull + cuerda grande, discos (45, 35, 25 lb), Remo, CrossFit Bike, Kettlebells, Sandbag 75 lb/sacos y Wall Balls.'
            },
            {
                title: 'HYROX Triple Máquina (Calorías o Metros)',
                tag: 'ROTACIÓN DE MÁQUINAS · CERO FILAS EN EL BOX',
                focus: 'SkiErg + Remo + CrossFit Bike + Estaciones de Piso',
                runNote: 'Diseñado para días de grupo grande: puedes iniciar en CUALQUIER máquina disponible (SkiErg, Remo o Bike) o en pista, cumpliendo Metros o Calorías:',
                stations: [
                    { num: '01', name: 'Máquina A: 1000m o 70 Cal (SkiErg / Remo / Bike) + 60m Sled Push', ind: '750m (o 50 Cal) en máquina libre + 50m Sled Push', part: '1000m o 70 Cal (en Bike: 65 Cal / 2000m) + 60m Sled Push' },
                    { num: '02', name: '800m Run en Pista + 80 Kettlebell Swings + 40 Goblet Squats', ind: '800m Run + 50 American Swings + 25 Goblet Squats (24/14 kg)', part: '800m Run juntos + 80 American Swings + 40 Goblet Squats repartidos' },
                    { num: '03', name: 'Máquina B: 1000m o 70 Cal (Remo / Bike / SkiErg) + 80 Burpees', ind: '750m (o 50 Cal) en segunda máquina + 45 Burpees sobre línea', part: '1000m o 70 Cal en máquina diferente a la 1 + 80 Burpees saltando mancuerna' },
                    { num: '04', name: '800m Run en Pista + 100m Sandbag Lunges + 100m Farmers Carry', ind: '800m Run + 60m Lunges + 100m Farmers Carry', part: '800m Run juntos + 100m Sandbag Lunges (75 lb/20 kg) + 100m Farmers Carry (2x24/20 kg)' },
                    { num: '05', name: 'Máquina C: 70 Cal CrossFit Bike (o 1000m Remo/Ski) + 100 Wall Balls', ind: '45 Cal Bike + 60 Wall Balls + 30 Ab Wheel Rollouts', part: '70 Cal Bike (o 1000m Remo/Ski) + 100 Wall Balls + 50 Abdominales' }
                ],
                pro: 'KB 24 / 20 kg · Sandbag 75 lb · Sled 4x45 lb · Wall Ball 20 / 15 lb',
                open: 'KB 20 / 14 kg · Saco 20 / 10 kg · Sled 2x45 lb · Wall Ball 15 / 10 lb',
                equip: 'SkiErg, Remo, Bicicleta de CrossFit, pista, Sled, Kettlebells, Sandbag 75 lb/sacos, Wall Balls y colchonetas.'
            },
            {
                title: 'HYROX Heavy Sled, Cuerda & Sandbag 75',
                tag: 'FUERZA HÍBRIDA DE BOX · CARGA PESADA',
                focus: '5 Bloques de 600m + Tracción, Cuerda y Objetos Pesados',
                runNote: 'Cada bloque inicia con 600m Run en pista (Equivalente si prefieres máquina: 600m Remo/SkiErg o 42 Cal CrossFit Bike):',
                stations: [
                    { num: '01', name: '600m Run + 50m Heavy Sled Push + 4 Subidas a Cuerda Grande', ind: '600m Run + 35m Sled Push pesado + 2 Rope Climbs', part: '600m Run + 50m Sled Push pesado + 4 Subidas a la cuerda grande' },
                    { num: '02', name: '600m Run + 60 Sandbag Over-Shoulder Cleans (75 lb / 30 kg)', ind: '600m Run + 35 Sandbag Cleans pasando el saco por encima del hombro', part: '600m Run + 60 Sandbag Cleans (75 lb / 30 kg) alternando de 5 en 5' },
                    { num: '03', name: '600m Remo o SkiErg (o 45 Cal Bike) + 50m Sled Pull con Cuerda', ind: '600m máquina + 35m Sled Pull + 30 Push-Ups en soportes', part: '600m máquina (300m c/u) + 50m Sled Pull + 60 Push-Ups en soportes' },
                    { num: '04', name: '600m Run + 90 seg Battle Rope Squat Waves + 200m Farmers Carry', ind: '600m Run + 60 seg Battle Rope en sentadilla + 150m Farmers (2x55/35 lb)', part: '600m Run + 90 seg Battle Rope (mientras el otro sostiene KB en rack) + 200m Farmers' },
                    { num: '05', name: '600m Run + 80 Dumbbell Clusters / Thrusters (2x35 / 20 lb)', ind: '600m Run + 45 DB Thrusters + 30 V-Ups', part: '600m Run + 80 DB Thrusters + 60 V-Ups en colchoneta' }
                ],
                pro: 'Sled 5x45 lb · Sandbag 75 lb · Mancuernas 2x35 lb (o 15 kg) · Farmers 2x55 lb',
                open: 'Sled 3x45 lb · Saco 20 / 10 kg · Mancuernas 2x20 lb · 16 Pull-Ups con banda por cuerda',
                equip: 'Pista, Sled, cuerda grande para escalar y Battle Rope, Sandbag 75 lb, sacos (30/20/10 kg), mancuernas (55, 35, 20 lb), Remo/Ski/Bike.'
            },
            {
                title: 'HYROX Pirámide 1200m – 800m – 400m',
                tag: 'NEGATIVE SPLIT · DE MENOS A MÁS VELOCIDAD',
                focus: 'Distancias Descendentes + Estaciones de Alta Densidad',
                runNote: 'Las distancias de carrera/máquina bajan en cada bloque (1200m → 1000m → 800m → 600m → 400m) para acelerar el ritmo:',
                stations: [
                    { num: '01', name: '1200m Run (o 80 Cal Bike / 1200m Remo) + 100m Lunges + 60 Push-Ups', ind: '1200m + 60m Lunges + 40 Push-Ups', part: '1200m juntos + 100m Lunges con mancuernas de 20 lb + 60 Push-Ups' },
                    { num: '02', name: '1000m SkiErg (o 1000m Remo / 70 Cal) + 80 Burpee Box Jump Overs', ind: '800m Ski/Remo + 45 Burpee Box Jump Overs (24/20")', part: '1000m Ski/Remo + 80 Burpee Box Jump Overs repartidos' },
                    { num: '03', name: '800m Run + 50m Sled Push + 50m Sled Pull', ind: '800m Run + 35m Sled Push + 35m Sled Pull', part: '800m Run + 50m Sled Push + 50m Sled Pull' },
                    { num: '04', name: '600m Remo/Bike (45 Cal) + 100 American KB Swings + 60 Sit-Ups', ind: '450m / 32 Cal + 60 Swings (24/14 kg) + 40 Sit-Ups', part: '600m / 45 Cal + 100 American Swings (24/20 kg) + 60 Sit-Ups' },
                    { num: '05', name: '400m Sprint Final + 100 Wall Balls', ind: '400m Sprint + 65 Wall Balls', part: '400m Sprint + 100 Wall Balls sin dejar caer el balón al suelo' }
                ],
                pro: 'Lunges 2x20 lb · Cajón 24 / 20" · KB 24 / 20 kg · Wall Ball 20 / 15 lb',
                open: 'Lunges libres · Step-overs en cajón · KB 14 / 12 kg · Wall Ball 15 / 10 lb',
                equip: 'Pista, SkiErg, Remo, CrossFit Bike, cajón, Sled, Kettlebells, mancuernas 20 lb, Wall Balls y colchonetas.'
            },
            {
                title: 'HYROX EMOM 36 Minutos (Circuito de 6 Estaciones)',
                tag: 'FORMATO POR TIEMPO FIJO · IDEAL GRUPOS GRANDES',
                focus: '6 Vueltas a 6 Estaciones (5 min Trabajo / 1 min Transición)',
                runNote: 'Cada pareja o atleta inicia en una estación distinta y rota cada 6 minutos (no nadie bloquea ninguna máquina):',
                stations: [
                    { num: 'E1', name: 'Bloque Remo: 1000m Remo (o 70 Cal) + Máximos Wall Balls en tiempo restante', ind: '750m Remo (o 50 Cal) + AMRAP Wall Balls en los 5 min', part: '1000m Remo (o 70 Cal) entre los dos + AMRAP Wall Balls' },
                    { num: 'E2', name: 'Bloque Pista & Sled: 400m Run + 50m Sled Push + AMRAP Burpees', ind: '400m Run + 25m Sled Push + AMRAP Burpees', part: '400m Run juntos + 50m Sled Push + AMRAP Burpee Broad Jumps' },
                    { num: 'E3', name: 'Bloque SkiErg & Core: 1000m SkiErg (o 70 Cal) + 60 V-Ups / Ab-Wheel', ind: '750m SkiErg + 35 V-Ups / 20 Ab-Wheel Rollouts', part: '1000m SkiErg + 60 V-Ups + 30 Ab-Wheel Rollouts' },
                    { num: 'E4', name: 'Bloque Mancuernas: 400m Run + 60 DB Thrusters (2x20 lb) + 60m Lunges', ind: '400m Run + 35 DB Thrusters + 40m Lunges', part: '400m Run + 60 DB Thrusters (2x20 lb) + 60m DB Walking Lunges' },
                    { num: 'E5', name: 'Bloque CrossFit Bike & KB: 65 Cal Bike + 80 American KB Swings', ind: '42 Cal Bike + 50 American Swings (24/14 kg)', part: '65 Cal CrossFit Bike + 80 American Swings (24/20 kg)' },
                    { num: 'E6', name: 'Bloque Grip & Cuerda: 200m Farmers Carry + 4 Cuerdas + Battle Rope', ind: '150m Farmers + 2 Rope Climbs + Battle Rope hasta el pitido', part: '200m Farmers Carry (40 kg) + 4 Subidas a Cuerda + Battle Rope Squat Waves' }
                ],
                pro: 'Wall Ball 20/15 lb · Mancuernas 2x20 lb (o 35 lb) · KB 24/20 kg · Sled 4x45 lb',
                open: 'Wall Ball 15/10 lb · Mancuernas 2x15/10 lb · KB 14/12 kg · Sled 2x45 lb',
                equip: 'Remo, SkiErg, CrossFit Bike, Sled, pista, mancuernas 20 lb, Kettlebells, cuerda grande, rueda abdominal y Wall Balls.'
            },
            {
                title: 'HYROX Duatlón Remo & Pista (4x1km Alternado)',
                tag: 'RESISTENCIA AERÓBICA PURA · MOTOR DE FONDO',
                focus: 'Alternar 1 km Pista y 1 km Remo/Ski + Estaciones de Volumen',
                runNote: 'Los bloques impares abren con 1 km Run en pista y los bloques pares abren con 1 km en Remo o SkiErg (o 65 Cal Bike):',
                stations: [
                    { num: '01', name: '1 km Run en Pista + 80m Burpee Broad Jumps + 50 Push-Ups', ind: '1 km Run + 50m Burpee Jumps + 30 Push-Ups', part: '1 km Run juntos + 80m Burpee Broad Jumps + 50 Push-Ups' },
                    { num: '02', name: '1 km Remo (o 70 Cal Remo/Ski / 65 Cal Bike) + 100 Lunges con Saco', ind: '1 km Remo + 60 Lunges con saco (20/10 kg)', part: '1 km Remo (relevos de 250m) + 100 Lunges con Sandbag 75 lb / saco 20 kg' },
                    { num: '03', name: '1 km Run en Pista + 50m Sled Push + 50m Sled Pull + 200m Farmers', ind: '1 km Run + 35m Sled Push + 35m Pull + 100m Farmers', part: '1 km Run + 50m Sled Push + 50m Sled Pull + 200m Farmers Carry (40 kg)' },
                    { num: '04', name: '1 km SkiErg (o 1 km Remo / 65 Cal Bike) + 100 Wall Balls + 100 Abs', ind: '1 km SkiErg + 60 Wall Balls + 60 Sit-Ups', part: '1 km SkiErg + 100 Wall Balls + 100 Abdominales en colchoneta' }
                ],
                pro: 'Sandbag 75 lb · Farmers 2x24 / 20 kg · Sled 4x45 lb · Wall Ball 20 / 15 lb',
                open: 'Saco 20 / 10 kg · Farmers 2x14 / 12 kg · Sled 2x45 lb · Wall Ball 15 / 10 lb',
                equip: 'Pista, Remo, SkiErg, CrossFit Bike, Sled, Sandbag 75 lb/sacos, Kettlebells, Wall Balls y colchonetas.'
            },
            {
                title: 'HYROX "El Centurión" (6 Estaciones de 100 Reps)',
                tag: 'CHIPPER HÍBRIDO · 600 REPETICIONES + 6 TRAMOS DE 600M',
                focus: 'Antes de cada bloque de 100 reps: 600m Run o 40 Cal Máquina',
                runNote: 'Completar 600m Run (o 600m Remo/Ski / 40 Cal CrossFit Bike si alternan máquinas) antes de cada estación de 100 repeticiones:',
                stations: [
                    { num: '100·1', name: '600m Run/Máquina + 100 Calorie/Meter Sprint o Jumping Jacks con Disco + 100 Push-Ups', ind: '600m + 60 Push-Ups pecho al piso', part: '600m juntos + 100 Push-Ups repartidos en series de 10–15' },
                    { num: '100·2', name: '600m Run/Máquina + 100 Walking Lunges (con 2x20 lb DB o Saco)', ind: '600m + 60 Lunges con mancuernas de 20 lb', part: '600m + 100 Walking Lunges con mancuernas de 20 lb o saco al hombro' },
                    { num: '100·3', name: '600m Run/Máquina + 100 American Kettlebell Swings (20 / 14 kg)', ind: '600m + 60 American Swings', part: '600m + 100 American Kettlebell Swings repartidos' },
                    { num: '100·4', name: '600m Run/Máquina + 100 Dumbbell Thrusters (2x20 lb)', ind: '600m + 60 DB Thrusters', part: '600m + 100 Dumbbell Thrusters (series rápidas de 10)' },
                    { num: '100·5', name: '600m Run/Máquina + 100 Burpees (sobre línea o avanzando)', ind: '600m + 60 Burpees', part: '600m + 100 Burpees repartidos (10 y 10 sin pausa)' },
                    { num: '100·6', name: '600m Run/Máquina + 100 Wall Balls + 100 Abdominales', ind: '600m + 60 Wall Balls + 60 Sit-Ups', part: '600m + 100 Wall Balls + 100 Sit-Ups / V-Ups para cerrar' }
                ],
                pro: 'Mancuernas 2x20 lb (o 30 lb) · KB 24 / 20 kg · Wall Ball 20 / 15 lb',
                open: 'Mancuernas 2x15 / 10 lb · KB 14 / 12 kg · Wall Ball 15 / 10 lb',
                equip: 'Pista, Remo/SkiErg/Bike, mancuernas de 20 lb, Kettlebells (24, 20, 14, 12 kg), Wall Balls y colchonetas.'
            },
            {
                title: 'HYROX Relevos Explosivos "You Go, I Go" (10x400m)',
                tag: 'ALTA VELOCIDAD · SPRINT HÍBRIDO',
                focus: '10 Rondas Rápidas combinando 400m / 30 Cal + Estación Corta',
                runNote: 'En Partner: mientras A corre 400m (o hace 30 Cal en Remo/Ski/Bike), B adelanta la estación funcional, y luego invierten roles:',
                stations: [
                    { num: 'R1-R2', name: 'Rondas 1 y 2: 400m Run (o 30 Cal Máquina) + 25m Sled Push + 20 Burpees', ind: '2 rondas de: 400m + 25m Sled Push + 15 Burpees', part: 'Cada integrante completa su vuelta de 400m/30 Cal + 25m Sled + 20 Burpees' },
                    { num: 'R3-R4', name: 'Rondas 3 y 4: 400m Remo/Ski (o 28 Cal Bike) + 30 DB Thrusters (2x20 lb)', ind: '2 rondas de: 400m máquina + 20 DB Thrusters', part: 'Rondas 3 y 4 alternando máquina y 30 Thrusters con mancuernas de 20 lb' },
                    { num: 'R5-R6', name: 'Rondas 5 y 6: 400m Run + 100m Farmers Carry (40 kg) + 25 Push-Ups', ind: '2 rondas de: 400m Run + 100m Farmers + 20 Push-Ups', part: 'Rondas 5 y 6 completando 100m Farmers Carry (2x20 kg KB) + 25 Push-Ups c/u' },
                    { num: 'R7-R8', name: 'Rondas 7 y 8: 400m Ski/Remo (o 28 Cal Bike) + 40m Sandbag Lunges + 25 V-Ups', ind: '2 rondas de: 400m máquina + 30m Lunges + 20 V-Ups', part: 'Rondas 7 y 8 con Sandbag 75 lb / saco 20 kg y abdominales' },
                    { num: 'R9-10', name: 'Rondas 9 y 10: 400m Run + 40 Wall Balls (80 totales en el cierre)', ind: '2 rondas de: 400m Run + 30 Wall Balls', part: 'Últimas 2 rondas a sprint completando 40 Wall Balls en cada una' }
                ],
                pro: 'Sled 4x45 lb · Mancuernas 2x25 / 20 lb · Farmers 2x24 / 20 kg · Sandbag 75 lb · WB 20 / 15 lb',
                open: 'Sled 2x45 lb · Mancuernas 2x15 / 10 lb · Farmers 2x14 / 12 kg · Saco 20 / 10 kg · WB 15 / 10 lb',
                equip: 'Pista, Remo, SkiErg, CrossFit Bike, Sled, mancuernas, Kettlebells, Sandbag 75 lb/sacos, Wall Balls y colchonetas.'
            },
            {
                title: 'HYROX Devil Press, Cuerda & Trineo (6x750m)',
                tag: 'EDICIÓN HARDCORE BOX · GIMNASIA + POTENCIA',
                focus: '6 Tramos de 750m (Pista o Máquina) + Estaciones Exigentes',
                runNote: 'Antes de cada estación realizar 750m Run en pista (o si rotan máquinas: 750m Remo / 750m SkiErg / 50 Cal CrossFit Bike):',
                stations: [
                    { num: '01', name: '750m Run/Máquina + 40 Devil Press con Par de Mancuernas (35 / 20 lb)', ind: '750m + 24 Devil Press con doble mancuerna', part: '750m + 40 Devil Press repartidos de 5 en 5' },
                    { num: '02', name: '750m Run/Máquina + 50m Sled Push + 50m Sled Pull con Cuerda', ind: '750m + 35m Sled Push + 35m Sled Pull', part: '750m + 50m Sled Push + 50m Sled Pull entre los dos' },
                    { num: '03', name: '750m Run/Máquina + 6 Subidas a Cuerda Grande + 80m Lunges con Mancuernas', ind: '750m + 3 Rope Climbs + 50m DB Lunges (2x20 lb)', part: '750m + 6 Rope Climbs + 80m Lunges con mancuernas de 20 lb' },
                    { num: '04', name: '750m Run/Máquina + 80 Box Jump Overs (24 / 20") + 80 American Swings', ind: '750m + 45 Box Jump Overs + 45 KB Swings (24/14 kg)', part: '750m + 80 Box Jump Overs + 80 American Swings (24/20 kg)' },
                    { num: '05', name: '750m Run/Máquina + 200m Farmers Carry + 60 Ab-Wheel Rollouts', ind: '750m + 120m Farmers + 35 Ab-Wheel Rollouts', part: '750m + 200m Farmers Carry (2x24/20 kg) + 60 Rueda Abdominal' },
                    { num: '06', name: '750m Run/Máquina + 100 Wall Balls', ind: '750m + 65 Wall Balls', part: '750m + 100 Wall Balls para terminar' }
                ],
                pro: 'Devil Press 2x35 / 20 lb · Sled 4x45 lb · KB 24 / 20 kg · Wall Ball 20 / 15 lb',
                open: 'Devil Press 2x20 / 12 lb · 24 Pull-Ups con banda por cuerda · KB 14 / 12 kg · WB 15 / 10 lb',
                equip: 'Pista, Remo/Ski/Bike, mancuernas (35, 20 lb), Sled, cuerda grande, cajón, Kettlebells, rueda abdominal y Wall Balls.'
            },
            {
                title: 'HYROX Escalera Ascendente (20 – 40 – 60 – 80 – 100)',
                tag: 'VOLUMEN PROGRESIVO · 5 BLOQUES DE 800M',
                focus: 'Las repeticiones suben de 20 en 20 en cada estación',
                runNote: 'Antes de cada escalón completar 800m Run en pista (Equivalente en máquina: 800m Remo / 800m SkiErg / 52 Cal CrossFit Bike):',
                stations: [
                    { num: '20s', name: '800m Run/Máquina + 20m Sled Push Pesado + 20m Sled Pull + 20 Devil Press', ind: '800m + 20m Push + 20m Pull + 12 Devil Press', part: '800m + 20m Sled Push + 20m Sled Pull + 20 Devil Press (2x35/20 lb)' },
                    { num: '40s', name: '800m Run/Máquina + 40 Sandbag Cleans (75 lb / 20 kg) + 40 Push-Ups', ind: '800m + 25 Sandbag Cleans + 25 Push-Ups', part: '800m + 40 Sandbag Over-Shoulder Cleans + 40 Push-Ups' },
                    { num: '60s', name: '800m Run/Máquina + 60 Dumbbell Thrusters (2x20 lb) + 60m Burpee Broad Jumps', ind: '800m + 40 DB Thrusters + 40m Burpee Jumps', part: '800m + 60 DB Thrusters (2x20 lb) + 60m Burpee Broad Jumps' },
                    { num: '80s', name: '800m Run/Máquina + 80 American KB Swings (20 kg) + 80m Lunges con Mancuernas', ind: '800m + 50 American Swings + 50m DB Lunges', part: '800m + 80 American Swings (20 kg) + 80m Lunges (2x20 lb)' },
                    { num: '100s', name: '800m Run/Máquina + 100 Wall Balls + 100 Abdominales', ind: '800m + 65 Wall Balls + 65 Sit-Ups', part: '800m + 100 Wall Balls + 100 Sit-Ups / V-Ups en colchoneta' }
                ],
                pro: 'Sandbag 75 lb · Mancuernas 2x20 lb (Devil Press 35/20 lb) · KB 20 / 14 kg · WB 20 / 15 lb',
                open: 'Saco 20 / 10 kg · Mancuernas 2x15 / 10 lb · KB 14 / 12 kg · WB 15 / 10 lb',
                equip: 'Pista, Remo/Ski/Bike, Sled, Sandbag 75 lb/sacos, mancuernas (35, 20 lb), Kettlebells (20, 14, 12 kg), Wall Balls y colchonetas.'
            },
            {
                title: 'HYROX Piernas de Hierro (Squat, Sled, Lunges & Bike)',
                tag: 'ESPECIAL TREN INFERIOR · RESISTENCIA MUSCULAR',
                focus: 'Combina Bicicleta de CrossFit, Remo, Pista y Sobrecarga de Pierna',
                runNote: 'Alterna carrera en pista con CrossFit Bike y Remo para exigir al máximo cuádriceps y glúteos:',
                stations: [
                    { num: '01', name: '1 km Run + 50m Sled Push + 50 Goblet Squats con Kettlebell (24 / 20 kg)', ind: '1 km Run + 35m Sled Push + 35 Goblet Squats', part: '1 km Run juntos + 50m Sled Push + 50 KB Goblet Squats' },
                    { num: '02', name: '70 Cal CrossFit Bike (o 1000m Remo/Ski) + 100m Walking Lunges (2x20 lb DB)', ind: '45 Cal Bike + 60m DB Walking Lunges', part: '70 Cal Bike (relevos cada 15 Cal) + 100m Lunges con mancuernas de 20 lb' },
                    { num: '03', name: '800m Run + 80 Dumbbell Thrusters (2x20 lb) + 60 Box Jump Overs', ind: '800m Run + 50 DB Thrusters + 40 Box Jump Overs', part: '800m Run + 80 DB Thrusters + 60 Box Jump Overs (24/20")' },
                    { num: '04', name: '1000m Remo (o 70 Cal Ski/Bike) + 100m Sandbag Lunges (75 lb / 20 kg)', ind: '750m Remo + 60m Sandbag Lunges', part: '1000m Remo + 100m Sandbag Lunges pasando el saco sin tocar el suelo' },
                    { num: '05', name: '800m Run + 100 Wall Balls + 90 seg Battle Rope en Sentadilla Isométrica', ind: '800m Run + 65 Wall Balls + 60 seg Battle Rope Squat', part: '800m Run + 100 Wall Balls + 90 seg Battle Rope Squat Waves' }
                ],
                pro: 'KB 24 / 20 kg · Mancuernas 2x20 lb · Sandbag 75 lb · Wall Ball 20 / 15 lb',
                open: 'KB 14 / 12 kg · Mancuernas 2x15 / 10 lb · Saco 20 / 10 kg · Wall Ball 15 / 10 lb',
                equip: 'Pista, CrossFit Bike, Remo, SkiErg, Sled, Kettlebells, mancuernas 20 lb, cajón, Sandbag 75 lb/sacos, cuerda grande y Wall Balls.'
            },
            {
                title: 'HYROX Grip & Tracción (Sled Pull, Remo, Farmers & Barra)',
                tag: 'ESPECIAL CADENA POSTERIOR & AGARRE',
                focus: '5 Bloques de 800m + Tracción Pesada, Kettlebells y Estructura',
                runNote: 'Cada bloque inicia con 800m Run (o 800m SkiErg / 52 Cal CrossFit Bike si la pista está ocupada):',
                stations: [
                    { num: '01', name: '800m Run + 75m Sled Pull con Cuerda Grande + 40 Pull-Ups en Estructura', ind: '800m + 50m Sled Pull + 25 Pull-Ups', part: '800m + 75m Sled Pull + 40 Pull-Ups repartidos' },
                    { num: '02', name: '1000m Remo (o 70 Cal Ski/Bike) + 200m Farmers Carry Pesado (2x24 kg / 2x55 lb)', ind: '750m Remo + 150m Farmers Carry', part: '1000m Remo + 200m Farmers Carry sin soltar (cambio cada 50m)' },
                    { num: '03', name: '800m Run + 100 American Kettlebell Swings (20 / 24 kg) + 50 Toes-to-Bar', ind: '800m + 60 American Swings + 30 Toes-to-Bar', part: '800m + 100 American Swings + 50 Toes-to-Bar (o V-Ups)' },
                    { num: '04', name: '1000m SkiErg (o 65 Cal Bike / 1000m Remo) + 80m Burpee Broad Jumps', ind: '750m SkiErg + 50m Burpee Broad Jumps', part: '1000m SkiErg + 80m Burpee Broad Jumps' },
                    { num: '05', name: '800m Run + 200m Sandbag Carry (75 lb) + 100 Abdominales', ind: '800m + 120m Sandbag Carry + 60 Sit-Ups', part: '800m + 200m Sandbag Carry al pecho/hombro + 100 Sit-Ups' }
                ],
                pro: 'Farmers 2x55 lb DB o 2x24 kg KB · Swings 24 / 20 kg · Sandbag 75 lb · Pull-Ups / T2B libres',
                open: 'Farmers 2x20 / 14 kg KB · Swings 14 / 12 kg · Saco 20 kg · Pull-Ups con banda azul/negra',
                equip: 'Pista, Sled + cuerda grande, estructura, bandas, Remo, SkiErg, Bike, Kettlebells, mancuernas 55 lb, Sandbag 75 lb y colchonetas.'
            },
            {
                title: 'HYROX 4 Mega-Bloques (1 km Run + 1 km Máquina + Estación)',
                tag: 'FONDO AERÓBICO EXTREMO · DOBLE CARDIO POR BLOQUE',
                focus: 'Cada uno de los 4 bloques une Carrera + Máquina + Volumen Funcional',
                runNote: 'En cada bloque se hace primero el tramo de carrera y enseguida la máquina asignada (si está ocupada, puedes usar cualquiera de las 3: Remo, SkiErg o Bike por calorías equivalentes):',
                stations: [
                    { num: 'M1', name: 'Bloque 1: 800m Run + 800m SkiErg (o 55 Cal) + 50m Sled Push + 60 Burpees', ind: '600m Run + 600m Ski + 35m Sled + 40 Burpees', part: '800m Run juntos + 800m SkiErg (400m c/u) + 50m Sled Push + 60 Burpees' },
                    { num: 'M2', name: 'Bloque 2: 800m Run + 800m Remo (o 55 Cal) + 100m Lunges (2x20 lb) + 80 Push-Ups', ind: '600m Run + 600m Remo + 60m Lunges + 45 Push-Ups', part: '800m Run juntos + 800m Remo + 100m DB Lunges (2x20 lb) + 80 Push-Ups' },
                    { num: 'M3', name: 'Bloque 3: 800m Run + 55 Cal CrossFit Bike (o 800m Remo/Ski) + 100 KB Swings + 200m Farmers', ind: '600m Run + 38 Cal Bike + 60 Swings + 120m Farmers', part: '800m Run + 55 Cal Bike + 100 American Swings (20 kg) + 200m Farmers (40 kg)' },
                    { num: 'M4', name: 'Bloque 4: 800m Run + 55 Cal Máquina Libre + 100 Wall Balls + 100 Abdominales', ind: '600m Run + 38 Cal Máquina + 60 Wall Balls + 60 Sit-Ups', part: '800m Run + 55 Cal Máquina + 100 Wall Balls + 100 Abdominales' }
                ],
                pro: 'Sled 4x45 lb · Lunges 2x20 lb · KB 20 / 24 kg · Farmers 40 kg · Wall Ball 20 / 15 lb',
                open: 'Sled 2x45 lb · Lunges libres · KB 14 / 12 kg · Farmers 2x14 kg · Wall Ball 15 / 10 lb',
                equip: 'Pista, SkiErg, Remo, CrossFit Bike, Sled, mancuernas 20 lb, Kettlebells, Wall Balls y colchonetas.'
            },
            {
                title: 'HYROX Barbell & Functional Hybrid (Con Barra Olímpica)',
                tag: 'CROSSFIT MEETS HYROX · BARRA + PISTA + MÁQUINAS',
                focus: 'Sustituye e integra estaciones con Thrusters, Power Cleans y Sumo High Pull',
                runNote: 'Ideal cuando hay barras olímpicas listas en el box: intercala 800m Run (o 55 Cal en Remo/Ski/Bike) antes de cada estación:',
                stations: [
                    { num: '01', name: '800m Run/Máquina + 60 Barbell Thrusters (75 / 55 lb) + 40 Burpees sobre la Barra', ind: '800m + 35 Thrusters + 25 Bar-Facing Burpees', part: '800m + 60 Thrusters con barra + 40 Burpees saltando la barra' },
                    { num: '02', name: '800m Remo o SkiErg (o 55 Cal Bike) + 50m Sled Push + 50m Sled Pull', ind: '800m máquina + 35m Sled Push + 35m Sled Pull', part: '800m máquina + 50m Sled Push + 50m Sled Pull' },
                    { num: '03', name: '800m Run + 60 Power Cleans (95 / 65 lb) + 80m Front Rack Barbell/Sandbag Lunges', ind: '800m + 35 Power Cleans + 50m Lunges', part: '800m + 60 Power Cleans + 80m Lunges con barra o Sandbag 75 lb' },
                    { num: '04', name: '800m SkiErg o Bike (55 Cal) + 80 Sumo Deadlift High Pulls (75 / 55 lb) + 200m Farmers', ind: '800m + 45 SDHP + 120m Farmers Carry', part: '800m + 80 Sumo Deadlift High Pulls + 200m Farmers Carry (40 kg)' },
                    { num: '05', name: '800m Run + 100 Wall Balls + 80 Abdominales', ind: '800m + 60 Wall Balls + 50 V-Ups', part: '800m + 100 Wall Balls + 80 V-Ups / Sit-Ups' }
                ],
                pro: 'Barra Thruster/SDHP 75/55 lb · Power Clean 95/65 lb · Sandbag 75 lb · WB 20/15 lb',
                open: 'Barra 55/35 lb · Power Clean 75/45 lb · Saco 20/10 kg · WB 15/10 lb',
                equip: 'Barras 20/15 kg, discos (25, 15, 10, 5 lb), pista, Remo, SkiErg, Bike, Sled, Sandbag 75 lb, Kettlebells y Wall Balls.'
            },
            {
                title: 'HYROX Half Sprint (Medio HYROX Explosivo)',
                tag: 'FORMATO CORTO 22–28 MIN · INTENSIDAD MÁXIMA',
                focus: '4 Bloques de 600m + Combinación Doble de Estaciones Rápidas',
                runNote: 'Versión rápida para clases de 45–60 min. Cada bloque abre con 600m Run (o 42 Cal en Remo / SkiErg / CrossFit Bike):',
                stations: [
                    { num: '01', name: '600m Run/Máquina + 600m SkiErg (o 42 Cal Remo/Bike) + 50m Sled Push', ind: '600m Run + 500m Ski + 35m Sled Push', part: '600m Run + 600m SkiErg + 50m Sled Push' },
                    { num: '02', name: '600m Run/Máquina + 50m Sled Pull + 60m Burpee Broad Jumps', ind: '600m Run + 35m Sled Pull + 40m Burpee Jumps', part: '600m Run + 50m Sled Pull + 60m Burpee Broad Jumps' },
                    { num: '03', name: '600m Run/Máquina + 600m Remo (o 42 Cal Bike) + 150m Farmers Carry (40 kg)', ind: '600m Run + 500m Remo + 100m Farmers', part: '600m Run + 600m Remo + 150m Farmers Carry (2x20 kg KB)' },
                    { num: '04', name: '600m Run/Máquina + 80m Lunges (2x20 lb DB o Saco) + 75 Wall Balls', ind: '600m Run + 50m Lunges + 50 Wall Balls', part: '600m Run + 80m Lunges + 75 Wall Balls a ritmo unbroken' }
                ],
                pro: 'Sled 4x45 lb · Farmers 2x24 / 20 kg · Lunges Sandbag 75 lb o 2x20 lb DB · WB 20 / 15 lb',
                open: 'Sled 2x45 lb · Farmers 2x14 / 12 kg · Lunges saco 20/10 kg · WB 15 / 10 lb',
                equip: 'Pista, SkiErg, Remo, CrossFit Bike, Sled, Kettlebells, mancuernas 20 lb, Sandbag 75 lb/sacos y Wall Balls.'
            },
            {
                title: 'HYROX Castigo de Cuerda & Core (5x800m)',
                tag: 'CORE + CARDIO · ESTABILIDAD DE LÍNEA MEDIA',
                focus: 'Integra Abdominales, Rueda Abdominal y Battle Rope en cada estación',
                runNote: 'Completar 800m Run (o 55 Cal en Remo / SkiErg / CrossFit Bike) al inicio de cada uno de los 5 bloques:',
                stations: [
                    { num: '01', name: '800m Run/Máquina + 50m Sled Push + 50 V-Ups en Colchoneta', ind: '800m + 35m Sled Push + 30 V-Ups', part: '800m + 50m Sled Push + 50 V-Ups repartidos' },
                    { num: '02', name: '800m Run/Máquina + 80m Burpee Broad Jumps + 40 Ab-Wheel Rollouts', ind: '800m + 50m Burpee Jumps + 25 Rueda Abdominal', part: '800m + 80m Burpee Broad Jumps + 40 Ab-Wheel Rollouts' },
                    { num: '03', name: '800m Remo/Ski (o 55 Cal Bike) + 100m Lunges (2x20 lb) + 90s Battle Rope Waves', ind: '800m máquina + 60m Lunges + 60s Battle Rope', part: '800m máquina + 100m DB Lunges + 90s Battle Rope Squat Waves' },
                    { num: '04', name: '800m Run/Máquina + 100 American KB Swings (20 kg) + 150m Overhead Plate Carry', ind: '800m + 60 Swings + 100m Overhead Carry (45/25 lb)', part: '800m + 100 American Swings + 150m caminata con disco de 45/25 lb sobre la cabeza' },
                    { num: '05', name: '800m Run/Máquina + 100 Wall Balls + 100 Sit-Ups', ind: '800m + 60 Wall Balls + 60 Sit-Ups', part: '800m + 100 Wall Balls + 100 Sit-Ups' }
                ],
                pro: 'Disco Overhead 45 / 25 lb · KB 24 / 20 kg · Mancuernas 2x20 lb · WB 20 / 15 lb',
                open: 'Disco Overhead 25 / 15 lb · KB 14 / 12 kg · Lunges libres · WB 15 / 10 lb',
                equip: 'Pista, Remo/Ski/Bike, Sled, colchonetas, rueda abdominal, mancuernas 20 lb, cuerda grande, Kettlebells, discos y Wall Balls.'
            },
            {
                title: 'HYROX Gran Final Monterrey Box (Endurance 45 Min)',
                tag: 'SIMULACIÓN ÉLITE DE COMPETENCIA · 6 BLOQUES COMPLETOS',
                focus: 'Combina lo mejor de 1km, 800m, Máquinas, Trineo, Mancuernas y Wall Balls',
                runNote: 'Prueba reina del box: puedes hacer los tramos de cardio en Pista o alternando Remo, SkiErg y CrossFit Bike según disponibilidad:',
                stations: [
                    { num: '01', name: '1 km Run + 50m Sled Push + 70 Burpee Broad Jumps', ind: '1 km Run + 35m Sled Push + 45 Burpee Jumps', part: '1 km Run juntos + 50m Sled Push + 70 Burpee Broad Jumps' },
                    { num: '02', name: '800m Run + 1000m Remo (o 70 Cal Ski/Bike) + 100m Lunges (2x20 lb DB)', ind: '800m Run + 750m Remo + 60m DB Lunges', part: '800m Run + 1000m Remo + 100m Lunges con mancuernas de 20 lb' },
                    { num: '03', name: '800m Run + 100 Dumbbell Thrusters (2x20 lb) + 50m Sled Pull con Cuerda', ind: '800m Run + 60 DB Thrusters + 35m Sled Pull', part: '800m Run + 100 DB Thrusters (2x20 lb) + 50m Sled Pull' },
                    { num: '04', name: '800m Run + 1000m SkiErg (o 65 Cal Bike) + 120 American KB Swings (20 kg)', ind: '800m Run + 750m SkiErg + 70 American Swings', part: '800m Run + 1000m SkiErg + 120 American Swings (20 kg)' },
                    { num: '05', name: '800m Run + 200m Farmers Carry (40 kg) + 100 Push-Ups', ind: '800m Run + 120m Farmers + 60 Push-Ups', part: '800m Run + 200m Farmers Carry (2x20 kg KB) + 100 Push-Ups' },
                    { num: '06', name: '1 km Run Final + 100 Wall Balls + 100 Abdominales', ind: '1 km Run + 65 Wall Balls + 65 Abdominales', part: '1 km Run + 100 Wall Balls + 100 Abdominales (Sit-Ups / V-Ups)' }
                ],
                pro: 'Sled 4x45 lb · Mancuernas 2x20 lb · KB 20 / 24 kg · Farmers 40 kg · Wall Ball 20 / 15 lb',
                open: 'Sled 2x45 lb · Mancuernas 2x15 / 10 lb · KB 14 / 12 kg · Farmers 2x14 kg · Wall Ball 15 / 10 lb',
                equip: 'Pista abierta, Sled + cuerda grande, Remo, SkiErg, CrossFit Bike, mancuernas de 20 lb, Kettlebells (24, 20, 14, 12 kg), Wall Balls y colchonetas.'
            },
            {
                title: 'HYROX Tunja',
                tag: 'EDICIÓN COMPETENCIA · 7x800M + VOLUMEN 120',
                focus: '7 Tramos de 800m + 6 Estaciones de 120m / 120 Reps',
                runNote: 'Iniciar con 800m Run, intercalar 800m Run después de cada estación y cerrar con 800m Run (7x800m en total). Equivalencia por tramo: 800m Remo/SkiErg o 50 Cal Bike / 55 Cal Remo-Ski:',
                stations: [
                    {
                        num: '01',
                        name: '800m Run + 120m Burpee Broad Jumps',
                        ind: '800m Run (o 50 Cal Bike) + 60m Burpee Broad Jumps continuos',
                        part: '800m Run juntos + 120m Burpee Broad Jumps relevando cada 10–15m'
                    },
                    {
                        num: '02',
                        name: '800m Run + 120m Lunges con Mancuernas (2x20 lb)',
                        ind: '800m Run (o 800m SkiErg) + 60m Walking Lunges con mancuernas de 20 lb a cada lado',
                        part: '800m Run juntos + 120m Lunges cargando par de mancuernas de 20 lb (cambio cada 20–30m)'
                    },
                    {
                        num: '03',
                        name: '800m Run + 120 Thrusters con Mancuernas (2x20 lb)',
                        ind: '800m Run (o 55 Cal Remo) + 60 Dumbbell Thrusters (2x20 lb)',
                        part: '800m Run juntos + 120 Dumbbell Thrusters con mancuernas de 20 lb (series rápidas de 12–15)'
                    },
                    {
                        num: '04',
                        name: '800m Run + 120 American KB Swings (20 kg)',
                        ind: '800m Run (o 50 Cal Bike) + 60 American Swings sobre la cabeza (20 / 14 kg)',
                        part: '800m Run juntos + 120 American Kettlebell Swings con 20 kg (relevos de 15–20 reps)'
                    },
                    {
                        num: '05',
                        name: '800m Run + 200m Farmers Carry (40 kg totales)',
                        ind: '800m Run (o 800m Remo) + 100m Farmers Carry con 2x20 kg KB (40 kg totales)',
                        part: '800m Run juntos + 200m Farmers Carry con 40 kg (2x20 kg KB o 2x45 lb discos/DB)'
                    },
                    {
                        num: '06',
                        name: '800m Run + 100 Push-Ups + 800m Run Final',
                        ind: '800m Run + 60 Push-Ups pecho al piso + 800m Run final (o 55 Cal máquina)',
                        part: '800m Run + 100 Push-Ups repartidos + 800m Run final a sprint cruzando meta juntos'
                    }
                ],
                pro: 'Lunges & Thrusters: 2x20 lb DB (o 2x15 kg en Pro+) · American Swing: 20 kg (H) / 14 kg (M) · Farmers: 40 kg (2x20 kg KB)',
                open: 'Lunges & Thrusters: 2x15 o 10 lb · American Swing: 14 / 12 kg · Farmers: 2x14 o 12 kg KB',
                equip: 'Pista abierta (o Remo/SkiErg/Bike para equivalencias), mancuernas de 20 lb (y 15 kg), Kettlebells de 20, 14 y 12 kg, soportes para push-ups/lunges.'
            },
            {
                title: 'HYROX Box Trifecta (3 Bloques de 1 km)',
                tag: 'EDICIÓN TRIFECTA · 3x1KM + DOBLE ESTACIÓN',
                focus: 'Trineo + Burpees · Remo + Lunges · Wall Balls + Abs',
                runNote: '3 grandes bloques encabezados por 1 km de carrera (o máquina equivalente si está ocupada: 1000m Remo / 1000m SkiErg / 65 Cal CrossFit Bike):',
                stations: [
                    {
                        num: 'B1·A',
                        name: '1 km Run en Pista (Apertura Bloque 1)',
                        ind: '1000m carrera en pista/campo (Equivalente: 1000m SkiErg o 65 Cal Bike)',
                        part: '1000m juntos en pista (o dividir 1000m/70 Cal en máquina en relevos de 250m)'
                    },
                    {
                        num: 'B1·B',
                        name: '50m Sled Push/Pull + 70 Burpee Broad Jumps',
                        ind: '25m Sled + 35 Burpee Jumps (Si Sled ocupado: 100m Farmers Carry 2x24 kg)',
                        part: '50m Sled repartidos + 70 Burpee Broad Jumps (o Burpees sobre línea) entre los dos'
                    },
                    {
                        num: 'B2·A',
                        name: '1 km Run en Pista (Apertura Bloque 2)',
                        ind: '1000m carrera a ritmo sostenido (Equivalente: 1000m SkiErg o 65 Cal Bike)',
                        part: '1000m carrera juntos manteniendo el paso del compañero'
                    },
                    {
                        num: 'B2·B',
                        name: '1 km de Remo (o 70 Cal) + 100 Lunges',
                        ind: '500m Remo (o 35 Cal Ski/Bike) + 50 Walking Lunges con saco o peso corporal',
                        part: '1000m Remo (relevos cada 250m; si está ocupado: 1000m SkiErg o 65 Cal Bike) + 100 Lunges repartidos'
                    },
                    {
                        num: 'B3·A',
                        name: '1 km Run en Pista (Apertura Bloque 3)',
                        ind: '1000m última carrera antes del cierre (Equivalente: 65 Cal Bike / 1000m Ski)',
                        part: '1000m carrera juntos apretando el ritmo para el bloque final'
                    },
                    {
                        num: 'B3·B',
                        name: '100 Wall Balls + 100 Abdominales (Cash-Out)',
                        ind: '60 Wall Balls (20/15 lb) + 60 Sit-Ups / V-Ups en colchoneta',
                        part: '100 Wall Balls (series de 15–20) + 100 Abdominales (Sit-Ups o V-Ups) repartidos'
                    }
                ],
                pro: 'Sled 4x45 lb (H) / 3x45 lb (M) · Lunges con Saco 20/10 kg · Wall Ball 20 / 15 lb · V-Ups',
                open: 'Sled 2x45+25 lb · Lunges libres o con soportes · Wall Ball 15 / 10 lb · Sit-Ups en colchoneta',
                equip: 'Pista abierta, Sled + discos (45, 35, 25 lb), Remo (o SkiErg / CrossFit Bike), Wall Balls (20, 15, 10 lb), sacos y colchonetas.'
            }
        ];

        return specs.map((s, idx) => {
            const num = idx + 1;
            const numStr = String(num).padStart(2, '0');
            return {
                number: num,
                code: `HYROX #${numStr}`,
                title: s.title,
                tag: s.tag,
                focus: s.focus,
                runNote: s.runNote,
                stations: s.stations,
                weights: {
                    pro: s.pro,
                    open: s.open
                },
                equipment: s.equip
            };
        });
    }

    // =========================================
    // BÓVEDA DE DESCOMPRESIÓN ÚNICA (INDEXEDDB)
    // =========================================
    loadReadySet() {
        const localAll = [
            ...(this.playlists?.tabata || []),
            ...(this.playlists?.challenges || []),
            ...(this.playlists?.music || [])
        ].map(t => t.src);

        if (window.location.protocol === 'file:') {
            return localAll;
        }
        try {
            const raw = localStorage.getItem('wod_ready_tracks_v1');
            return raw ? JSON.parse(raw) : localAll;
        } catch {
            return localAll;
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
        this.fab?.addEventListener('click', () => this.togglePanel(true));
        this.collapseBtn?.addEventListener('click', () => this.togglePanel(false));
        this.overlay?.addEventListener('click', () => this.togglePanel(false));
        this.miniExpandBtn?.addEventListener('click', () => this.togglePanel(true));

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
            mobility: 'Movilidad & Calentamiento <span>🤸</span>',
            wods: 'Rutinas Exigentes (60) <span>🏋️</span>',
            hyrox: 'HYROX & Híbridos (15) <span>⚡</span>',
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
                { key: 'walks', label: 'Caminatas (6)' },
                { key: 'partner', label: 'En Parejas (6)' },
                { key: 'bands_kb', label: 'CF-L2 & KB (6)' }
            ];
            activeKey = this.mobilityCategory;
        } else if (this.activeModule === 'wods') {
            tabs = [
                { key: 'partner', label: '🤝 Partner (30)' },
                { key: 'individual', label: '🔥 Individual (30)' }
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

            const badgeContent = isCurrent && this.isPlaying
                ? `<span class="track-eq"><i></i><i></i><i></i></span>`
                : `${idx + 1}`;

            const tagClass = track.mediaType === 'video' ? 'tag-video' : '';

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
    // RENDER: MOVILIDAD (CON BUSCADOR Y DESPLEGABLES)
    // =========================================
    renderMobilityList() {
        const q = (this.searchQueries.mobility || '').trim().toLowerCase();
        this.trackListEl.innerHTML = `
            <div class="offline-search-box">
                <span class="search-icon">🔍</span>
                <input type="text" id="mobility-search-input" class="offline-search-input" placeholder="Buscar movilidad (ej. oso, cadera, hombro, barra, anillas...)" value="${this.escapeAttr(this.searchQueries.mobility)}">
                <button type="button" id="mobility-search-clear" class="search-clear-btn" style="display: ${q ? 'inline-flex' : 'none'};" aria-label="Limpiar búsqueda">✕</button>
            </div>
            <div id="mobility-cards-container" class="collapsible-list-wrap"></div>
        `;

        const inputEl = document.getElementById('mobility-search-input');
        const clearBtn = document.getElementById('mobility-search-clear');

        inputEl?.addEventListener('input', () => {
            this.searchQueries.mobility = inputEl.value;
            if (clearBtn) clearBtn.style.display = inputEl.value.trim() ? 'inline-flex' : 'none';
            this.renderMobilityCardsOnly();
        });

        clearBtn?.addEventListener('click', () => {
            this.searchQueries.mobility = '';
            if (inputEl) {
                inputEl.value = '';
                inputEl.focus();
            }
            clearBtn.style.display = 'none';
            this.renderMobilityCardsOnly();
        });

        this.renderMobilityCardsOnly();
    }

    renderMobilityCardsOnly() {
        const container = document.getElementById('mobility-cards-container');
        if (!container) return;

        const q = (this.searchQueries.mobility || '').trim().toLowerCase();
        // Si hay búsqueda activa, busca en las 3 categorías de movilidad; si no, muestra la pestaña activa
        const sourceList = q
            ? [...this.mobilityData.walks, ...this.mobilityData.partner, ...this.mobilityData.bands_kb]
            : (this.mobilityData[this.mobilityCategory] || []);

        const filtered = sourceList.filter(item => {
            if (!q) return true;
            const hay = `${item.code} ${item.title} ${item.duration} ${item.focus} ${item.equipment} ${item.steps.join(' ')}`.toLowerCase();
            return hay.includes(q);
        });

        if (!filtered.length) {
            container.innerHTML = `<div class="offline-empty-msg">No se encontraron ejercicios con "${this.escapeHtml(this.searchQueries.mobility)}".</div>`;
            return;
        }

        container.innerHTML = filtered.map(item => {
            const isOpen = this.expandedCards.has(item.code);
            return `
                <article class="wod-routine-card collapsible-card ${isOpen ? 'expanded' : ''}" data-card-id="${item.code}">
                    <div class="wod-summary-trigger" role="button" tabindex="0" aria-expanded="${isOpen}">
                        <div class="wod-card-top">
                            <span class="wod-code-badge">${item.code}</span>
                            <div class="wod-top-right">
                                <span class="wod-format-badge">${item.duration}</span>
                                <span class="card-chevron">▾</span>
                            </div>
                        </div>
                        <h4 class="wod-card-title">${item.title}</h4>
                        <div class="wod-format-sub">🎯 ${item.focus}</div>
                    </div>

                    <div class="wod-collapsible-body">
                        <ul class="wod-steps-list">
                            ${item.steps.map(s => `<li>${s}</li>`).join('')}
                        </ul>
                        <div class="wod-equip-footer">
                            <span class="equip-label">🧰 Material requerido:</span> ${item.equipment}
                        </div>
                    </div>
                </article>
            `;
        }).join('');

        this.bindCollapsibleCards(container);
    }

    // =========================================
    // RENDER: 60 WODS DESPLEGABLES (30 PARTNER + 30 INDIVIDUAL)
    // =========================================
    renderWodsList() {
        const q = (this.searchQueries.wods || '').trim().toLowerCase();
        this.trackListEl.innerHTML = `
            <div class="offline-search-box">
                <span class="search-icon">🔍</span>
                <input type="text" id="wods-search-input" class="offline-search-input" placeholder="Buscar WOD (#01–#30, cluster, cuerda, sled, sandbag, fran...)" value="${this.escapeAttr(this.searchQueries.wods)}">
                <button type="button" id="wods-search-clear" class="search-clear-btn" style="display: ${q ? 'inline-flex' : 'none'};" aria-label="Limpiar búsqueda">✕</button>
            </div>
            <div id="wods-cards-container" class="collapsible-list-wrap"></div>
        `;

        const inputEl = document.getElementById('wods-search-input');
        const clearBtn = document.getElementById('wods-search-clear');

        inputEl?.addEventListener('input', () => {
            this.searchQueries.wods = inputEl.value;
            if (clearBtn) clearBtn.style.display = inputEl.value.trim() ? 'inline-flex' : 'none';
            this.renderWodsCardsOnly();
        });

        clearBtn?.addEventListener('click', () => {
            this.searchQueries.wods = '';
            if (inputEl) {
                inputEl.value = '';
                inputEl.focus();
            }
            clearBtn.style.display = 'none';
            this.renderWodsCardsOnly();
        });

        this.renderWodsCardsOnly();
    }

    renderWodsCardsOnly() {
        const container = document.getElementById('wods-cards-container');
        if (!container) return;

        const q = (this.searchQueries.wods || '').trim().toLowerCase();
        const list = this.wodsData[this.wodsCategory] || [];

        const filtered = list.filter(wod => {
            if (!q) return true;
            const blockText = wod.blocks.map(b => `${b.name} ${b.desc} ${b.items.join(' ')}`).join(' ');
            const hay = `${wod.code} ${wod.title} ${wod.format} ${wod.rmRef} ${wod.weights.pro} ${wod.weights.open} ${wod.equipment} ${blockText}`.toLowerCase();
            return hay.includes(q);
        });

        if (!filtered.length) {
            container.innerHTML = `<div class="offline-empty-msg">No se encontraron rutinas con "${this.escapeHtml(this.searchQueries.wods)}".</div>`;
            return;
        }

        container.innerHTML = filtered.map(wod => {
            const isOpen = this.expandedCards.has(wod.id);
            return `
                <article class="wod-routine-card collapsible-card ${isOpen ? 'expanded' : ''}" data-card-id="${wod.id}">
                    <div class="wod-summary-trigger" role="button" tabindex="0" aria-expanded="${isOpen}">
                        <div class="wod-card-top">
                            <span class="wod-code-badge">${wod.code}</span>
                            <div class="wod-top-right">
                                <span class="wod-rm-pill">📊 ${wod.rmRef}</span>
                                <span class="card-chevron">▾</span>
                            </div>
                        </div>
                        <h4 class="wod-card-title">${wod.title}</h4>
                        <div class="wod-format-sub">${wod.format}</div>
                    </div>

                    <div class="wod-collapsible-body">
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
                    </div>
                </article>
            `;
        }).join('');

        this.bindCollapsibleCards(container);
    }

    bindCollapsibleCards(container) {
        container.querySelectorAll('.wod-routine-card.collapsible-card').forEach(card => {
            const trigger = card.querySelector('.wod-summary-trigger');
            const id = card.dataset.cardId;
            if (!trigger || !id) return;

            const toggle = () => {
                const nowOpen = !card.classList.contains('expanded');
                card.classList.toggle('expanded', nowOpen);
                trigger.setAttribute('aria-expanded', String(nowOpen));
                if (nowOpen) this.expandedCards.add(id);
                else this.expandedCards.delete(id);
            };

            trigger.addEventListener('click', toggle);
            trigger.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggle();
                }
            });
        });
    }

    // =========================================
    // RENDER: HYROX (15 VARIADOS + EQUIVALENCIAS DE MÁQUINAS + BUSCADOR)
    // =========================================
    renderHyroxView() {
        const currentWorkout = this.hyroxCatalog.find(h => h.number === this.selectedHyroxNumber) || this.hyroxCatalog[0];
        const q = (this.searchQueries.hyrox || '').trim().toLowerCase();
        const equivOpen = this.expandedCards.has('hyrox-equiv-guide');

        this.trackListEl.innerHTML = `
            <div class="hyrox-ux-controls">
                <!-- Buscador en vivo de HYROX (estaciones, distancias, máquinas) -->
                <div class="offline-search-box">
                    <span class="search-icon">🔍</span>
                    <input type="text" id="hyrox-search-input" class="offline-search-input" placeholder="Buscar por distancia o ejercicio (ej. 800m, 1km, thruster, remo, sled, 120...)" value="${this.escapeAttr(this.searchQueries.hyrox)}">
                    <button type="button" id="hyrox-search-clear" class="search-clear-btn" style="display: ${q ? 'inline-flex' : 'none'};" aria-label="Limpiar búsqueda">✕</button>
                </div>

                <!-- Selector Desplegable Custom UX -->
                <div class="hyrox-custom-dropdown" id="hyrox-custom-dropdown">
                    <button type="button" class="hyrox-dropdown-trigger ${this.hyroxDropdownOpen ? 'open' : ''}" id="hyrox-dropdown-btn" aria-expanded="${this.hyroxDropdownOpen}">
                        <div class="dropdown-trigger-left">
                            <span class="dropdown-num-pill">⚡ ${currentWorkout.code}</span>
                            <span class="dropdown-city-name">${currentWorkout.title}</span>
                        </div>
                        <span class="dropdown-chevron">▾</span>
                    </button>

                    <div class="hyrox-dropdown-menu" id="hyrox-dropdown-menu" style="display: ${this.hyroxDropdownOpen ? 'flex' : 'none'};">
                        ${this.hyroxCatalog.map(h => `
                            <button type="button" class="hyrox-dropdown-option ${h.number === currentWorkout.number ? 'selected' : ''}" data-hnum="${h.number}">
                                <span class="opt-code">#${String(h.number).padStart(2, '0')}</span>
                                <span class="opt-title">${h.title}</span>
                                <span class="opt-focus">${h.tag.split('·')[0]}</span>
                            </button>
                        `).join('')}
                    </div>
                </div>

                <!-- Guía Rápida Desplegable: Equivalencias de Máquinas (Metros ⇄ Calorías) -->
                <article class="wod-routine-card collapsible-card ${equivOpen ? 'expanded' : ''}" id="hyrox-equiv-card" style="margin-bottom: 4px; border-color: rgba(0, 229, 255, 0.28);">
                    <div class="wod-summary-trigger" role="button" tabindex="0" aria-expanded="${equivOpen}">
                        <div class="wod-card-top">
                            <span class="wod-code-badge">🔄 MÁQUINA OCUPADA · EQUIVALENCIAS</span>
                            <div class="wod-top-right">
                                <span class="wod-rm-pill">METROS ⇄ CALORÍAS</span>
                                <span class="card-chevron">▾</span>
                            </div>
                        </div>
                        <div class="wod-format-sub">Si otra pareja ocupa Remo, SkiErg, Bike o Sled, usa cualquiera de estos equivalentes:</div>
                    </div>
                    <div class="wod-collapsible-body">
                        <ul class="wod-steps-list">
                            <li><strong>1000m Carrera / Pista</strong> = <code>1000m Remo</code> = <code>1000m SkiErg</code> = <code>70 Cal Remo/Ski</code> = <code>65 Cal CrossFit Bike (o 2000m Bike)</code></li>
                            <li><strong>800m Carrera / Pista</strong> = <code>800m Remo</code> = <code>800m SkiErg</code> = <code>55 Cal Remo/Ski</code> = <code>50 Cal CrossFit Bike (o 1600m Bike)</code></li>
                            <li><strong>600m Carrera / Pista</strong> = <code>600m Remo</code> = <code>600m SkiErg</code> = <code>42 Cal Remo/Ski</code> = <code>38 Cal CrossFit Bike (o 1200m Bike)</code></li>
                            <li><strong>400m Carrera / Pista</strong> = <code>400m Remo</code> = <code>400m SkiErg</code> = <code>30 Cal Remo/Ski</code> = <code>26 Cal CrossFit Bike (o 800m Bike)</code></li>
                            <li><strong>50m Sled Push ocupado</strong> = <code>100m Heavy Farmers Carry (2x24 kg / 2x55 lb)</code> o <code>50 Barbell/DB Thrusters</code></li>
                            <li><strong>50m Sled Pull ocupado</strong> = <code>40m Bear Crawl arrastrando Sandbag 75 lb</code> o <code>60 American KB Swings + 4 Cuerdas</code></li>
                        </ul>
                    </div>
                </article>
            </div>

            <div id="hyrox-results-container" class="collapsible-list-wrap"></div>
        `;

        const searchInput = document.getElementById('hyrox-search-input');
        const clearBtn = document.getElementById('hyrox-search-clear');
        const dropdownBtn = document.getElementById('hyrox-dropdown-btn');
        const dropdownMenu = document.getElementById('hyrox-dropdown-menu');
        const equivCard = document.getElementById('hyrox-equiv-card');

        equivCard?.querySelector('.wod-summary-trigger')?.addEventListener('click', () => {
            const nowOpen = !equivCard.classList.contains('expanded');
            equivCard.classList.toggle('expanded', nowOpen);
            if (nowOpen) this.expandedCards.add('hyrox-equiv-guide');
            else this.expandedCards.delete('hyrox-equiv-guide');
        });

        searchInput?.addEventListener('input', () => {
            this.searchQueries.hyrox = searchInput.value;
            if (clearBtn) clearBtn.style.display = searchInput.value.trim() ? 'inline-flex' : 'none';
            this.renderHyroxCardsOnly();
        });

        clearBtn?.addEventListener('click', () => {
            this.searchQueries.hyrox = '';
            if (searchInput) {
                searchInput.value = '';
                searchInput.focus();
            }
            clearBtn.style.display = 'none';
            this.renderHyroxCardsOnly();
        });

        dropdownBtn?.addEventListener('click', () => {
            this.hyroxDropdownOpen = !this.hyroxDropdownOpen;
            dropdownBtn.classList.toggle('open', this.hyroxDropdownOpen);
            if (dropdownMenu) dropdownMenu.style.display = this.hyroxDropdownOpen ? 'flex' : 'none';
        });

        this.trackListEl.querySelectorAll('.hyrox-dropdown-option').forEach(opt => {
            opt.addEventListener('click', () => {
                const num = parseInt(opt.dataset.hnum, 10) || 1;
                this.selectedHyroxNumber = num;
                this.hyroxDropdownOpen = false;
                this.searchQueries.hyrox = '';
                this.expandedHyroxSet.clear();
                this.expandedHyroxSet.add(num);
                this.renderHyroxView();
                const targetCard = this.trackListEl.querySelector(`[data-hyrox-num="${num}"]`);
                targetCard?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            });
        });

        this.renderHyroxCardsOnly();
    }

    renderHyroxCardsOnly() {
        const container = document.getElementById('hyrox-results-container');
        if (!container) return;

        const q = (this.searchQueries.hyrox || '').trim().toLowerCase();
        const listToRender = this.hyroxCatalog.filter(h => {
            if (!q) return true;
            const stText = h.stations.map(s => `${s.num} ${s.name} ${s.ind} ${s.part}`).join(' ');
            const hay = `${h.code} ${h.number} ${h.title} ${h.tag} ${h.focus} ${h.runNote} ${stText} ${h.weights.pro} ${h.weights.open}`.toLowerCase();
            return hay.includes(q);
        });

        if (!listToRender.length) {
            container.innerHTML = `<div class="offline-empty-msg">No se encontró ningún HYROX con "${this.escapeHtml(this.searchQueries.hyrox)}".</div>`;
            return;
        }

        container.innerHTML = listToRender.map(h => {
            const isOpen = this.expandedHyroxSet.has(h.number);
            return `
                <article class="wod-routine-card hyrox-featured-card collapsible-card ${isOpen ? 'expanded' : ''}" data-hyrox-num="${h.number}">
                    <div class="wod-summary-trigger" role="button" tabindex="0" aria-expanded="${isOpen}">
                        <div class="wod-card-top">
                            <span class="wod-code-badge hyrox-badge">⚡ ${h.code}</span>
                            <div class="wod-top-right">
                                <span class="wod-rm-pill">${this.hyroxMode === 'partner' ? '🤝 PARTNER (DOUBLES)' : '🏃 INDIVIDUAL'}</span>
                                <span class="card-chevron">▾</span>
                            </div>
                        </div>
                        <h4 class="wod-card-title">${h.title}</h4>
                        <div class="wod-format-sub">${h.tag} · ${h.focus}</div>
                    </div>

                    <div class="wod-collapsible-body">
                        <div class="hyrox-run-banner">
                            🏃 <strong>Protocolo & Máquinas:</strong> ${h.runNote}
                            ${this.hyroxMode === 'partner' ? '<br><em>En Partner: ambos corren juntos (o dividen calorías/metros en máquina) y reparten las repeticiones de estación.</em>' : ''}
                        </div>

                        <div class="hyrox-stations-list">
                            ${h.stations.map(st => `
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
                                <p>${h.weights.pro}</p>
                            </div>
                            <div class="weight-tier tier-open">
                                <span class="tier-badge">⚡ PESOS OPEN (BOX)</span>
                                <p>${h.weights.open}</p>
                            </div>
                        </div>

                        <div class="wod-equip-footer">
                            <span class="equip-label">🧰 Material requerido:</span> ${h.equipment}
                        </div>
                    </div>
                </article>
            `;
        }).join('');

        container.querySelectorAll('.hyrox-featured-card').forEach(card => {
            const trigger = card.querySelector('.wod-summary-trigger');
            const num = parseInt(card.dataset.hyroxNum, 10);
            if (!trigger || !num) return;

            trigger.addEventListener('click', () => {
                const nowOpen = !card.classList.contains('expanded');
                card.classList.toggle('expanded', nowOpen);
                trigger.setAttribute('aria-expanded', String(nowOpen));
                if (nowOpen) {
                    this.expandedHyroxSet.add(num);
                    this.selectedHyroxNumber = num;
                } else {
                    this.expandedHyroxSet.delete(num);
                }
            });
        });
    }

    // =========================================
    // RENDER: CALCULADORAS (% RM + DISCOS & IMC)
    // Sin flechas y permitiendo borrar/escribir libremente
    // =========================================
    calculatePlateLoad(discsLb, barKg, totalLb) {
        const barLb = Math.round(barKg * 2.20462);
        let perSide = discsLb / 2;
        if (perSide <= 0) return `Solo barra vacía (${barKg} kg / ${barLb} lb)`;

        const availablePlates = [45, 35, 25, 15, 10, 5];
        const loaded = [];
        for (const p of availablePlates) {
            while (perSide >= p - 0.01) {
                loaded.push(`${p}lb`);
                perSide -= p;
            }
        }
        const totalKg = Math.round(totalLb / 2.20462);
        return loaded.length
            ? `Por lado (${Math.round(discsLb / 2)} lb): ${loaded.join(' + ')} · Total c/barra ${barKg}kg: ${Math.round(totalLb)} lb (${totalKg} kg)`
            : `Menos de 5lb por lado · Total c/barra ${barKg}kg: ${Math.round(totalLb)} lb (${totalKg} kg)`;
    }

    renderCalcView() {
        if (this.calcCategory === 'rm') {
            const { oneRmRaw, unit, barKg, customPct } = this.rmState;

            this.trackListEl.innerHTML = `
                <div class="calc-card">
                    <div class="calc-row-grid">
                        <label class="calc-field">
                            <span>RM máximo (discos)</span>
                            <input type="text" inputmode="decimal" id="calc-rm-input" class="calc-input" placeholder="Ej. 180" value="${this.escapeAttr(oneRmRaw)}" autocomplete="off">
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
                        <div class="calc-slider-header" id="calc-rm-slider-header"></div>
                        <input type="range" id="calc-rm-slider" class="player-seek-bar" min="40" max="105" step="5" value="${customPct}">
                        <div class="calc-plate-hint" id="calc-rm-plate-hint"></div>
                    </div>

                    <div class="calc-rm-table" id="calc-rm-table"></div>
                </div>
            `;

            const rmInput = document.getElementById('calc-rm-input');
            const rmSlider = document.getElementById('calc-rm-slider');

            rmInput?.addEventListener('input', () => {
                this.rmState.oneRmRaw = rmInput.value;
                const parsed = parseFloat(rmInput.value.replace(',', '.'));
                this.rmState.oneRm = !isNaN(parsed) && parsed > 0 ? parsed : 0;
                this.updateRmResultsOnly();
            });

            rmSlider?.addEventListener('input', () => {
                this.rmState.customPct = parseInt(rmSlider.value, 10) || 75;
                this.updateRmResultsOnly();
            });

            this.trackListEl.querySelectorAll('[data-unit]').forEach(btn => {
                btn.addEventListener('click', () => {
                    const newUnit = btn.dataset.unit;
                    if (newUnit && newUnit !== this.rmState.unit) {
                        if (this.rmState.oneRm > 0) {
                            this.rmState.oneRm = newUnit === 'kg'
                                ? Math.round(this.rmState.oneRm / 2.20462)
                                : Math.round(this.rmState.oneRm * 2.20462);
                            this.rmState.oneRmRaw = String(this.rmState.oneRm);
                        }
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

            this.updateRmResultsOnly();
        } else {
            // Calculadora de IMC y Rango de Peso Adecuado (Permite borrar y escribir libremente)
            const { heightRaw, weightRaw } = this.bmiState;

            this.trackListEl.innerHTML = `
                <div class="calc-card">
                    <div class="calc-row-grid two-cols">
                        <label class="calc-field">
                            <span>Altura (cm)</span>
                            <input type="text" inputmode="decimal" id="calc-bmi-height" class="calc-input" placeholder="Ej. 174" value="${this.escapeAttr(heightRaw)}" autocomplete="off">
                        </label>
                        <label class="calc-field">
                            <span>Peso Actual (kg)</span>
                            <input type="text" inputmode="decimal" id="calc-bmi-weight" class="calc-input" placeholder="Ej. 76" value="${this.escapeAttr(weightRaw)}" autocomplete="off">
                        </label>
                    </div>

                    <div id="calc-bmi-results-wrap" class="bmi-results-dynamic"></div>
                </div>
            `;

            const hInput = document.getElementById('calc-bmi-height');
            const wInput = document.getElementById('calc-bmi-weight');

            hInput?.addEventListener('input', () => {
                this.bmiState.heightRaw = hInput.value;
                const parsed = parseFloat(hInput.value.replace(',', '.'));
                this.bmiState.heightCm = !isNaN(parsed) && parsed > 0 ? parsed : 0;
                this.updateBmiResultsOnly();
            });

            wInput?.addEventListener('input', () => {
                this.bmiState.weightRaw = wInput.value;
                const parsed = parseFloat(wInput.value.replace(',', '.'));
                this.bmiState.weightKg = !isNaN(parsed) && parsed > 0 ? parsed : 0;
                this.updateBmiResultsOnly();
            });

            this.updateBmiResultsOnly();
        }
    }

    updateRmResultsOnly() {
        const headerEl = document.getElementById('calc-rm-slider-header');
        const plateEl = document.getElementById('calc-rm-plate-hint');
        const tableEl = document.getElementById('calc-rm-table');
        if (!headerEl || !plateEl || !tableEl) return;

        const { oneRm, unit, barKg, customPct } = this.rmState;
        const barLb = barKg * 2.20462;
        const inputDiscsLb = unit === 'lb' ? oneRm : oneRm * 2.20462;
        const total1RmLb = oneRm > 0 ? inputDiscsLb + barLb : 0;

        const targetTotalLb = total1RmLb * (customPct / 100);
        const targetDiscsLb = Math.max(0, Math.round(targetTotalLb - barLb));
        const targetDiscsKg = Math.max(0, Math.round(targetDiscsLb / 2.20462));
        const plateBreakdown = this.calculatePlateLoad(targetDiscsLb, barKg, targetTotalLb);
        const percentages = [95, 90, 85, 80, 75, 70, 65, 60, 50];

        headerEl.innerHTML = `
            <span>Objetivo <strong>${customPct}% RM</strong> <em>(discos a montar)</em></span>
            <span class="calc-highlight-val">${targetDiscsLb} lb · ${targetDiscsKg} kg</span>
        `;
        plateEl.textContent = `🏋️ ${plateBreakdown}`;

        tableEl.innerHTML = percentages.map(pct => {
            const cellTotalLb = total1RmLb * (pct / 100);
            const cellDiscsLb = Math.max(0, Math.round(cellTotalLb - barLb));
            const perSideLb = Math.round(cellDiscsLb / 2);
            const activeRow = pct === customPct ? 'active' : '';
            return `
                <div class="calc-rm-cell ${activeRow}" data-pct="${pct}">
                    <span class="rm-cell-pct">${pct}%</span>
                    <strong class="rm-cell-main">${cellDiscsLb} lb</strong>
                    <span class="rm-cell-sub">${perSideLb} lb/lado · Total ${Math.round(cellTotalLb)} lb</span>
                </div>
            `;
        }).join('');

        tableEl.querySelectorAll('.calc-rm-cell').forEach(cell => {
            cell.addEventListener('click', () => {
                this.rmState.customPct = parseInt(cell.dataset.pct, 10) || 75;
                const slider = document.getElementById('calc-rm-slider');
                if (slider) slider.value = this.rmState.customPct;
                this.updateRmResultsOnly();
            });
        });
    }

    updateBmiResultsOnly() {
        const wrap = document.getElementById('calc-bmi-results-wrap');
        if (!wrap) return;

        const { heightCm, weightKg } = this.bmiState;
        if (!heightCm || heightCm < 50 || !weightKg || weightKg < 15) {
            wrap.innerHTML = `
                <div class="bmi-result-banner" style="border-color: rgba(59, 176, 214, 0.35)">
                    <div class="bmi-score-col">
                        <span class="bmi-kicker">INGRESA TUS DATOS</span>
                        <span class="bmi-status-pill" style="color: var(--text-muted)">Escribe tu altura en cm (ej. 174) y tu peso en kg (ej. 76)</span>
                    </div>
                </div>
            `;
            return;
        }

        const hMeters = heightCm > 3 ? heightCm / 100 : heightCm;
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
            statusLabel = 'Rango Atleta Fuerza / Masa Muscular';
            statusColor = '#fbbf24';
        } else if (bmi > 26.8) {
            statusLabel = 'Por encima del rango recomendado';
            statusColor = '#f87171';
        }

        wrap.innerHTML = `
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
        `;
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

        this.trackSubEl.textContent = `${track.artist} · ${track.mediaType.toUpperCase()}`;
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

    escapeHtml(str) {
        return String(str || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    escapeAttr(str) {
        return this.escapeHtml(str).replace(/"/g, '&quot;');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.offlineTools = new OfflineToolsManager();
});
