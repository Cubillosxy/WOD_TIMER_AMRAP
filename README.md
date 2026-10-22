<!--
  _____    _          _          ____      _     _ _ _           
 | ____|__| |_      _(_)_ __    / ___|   _| |__ (_) | | ___  ___ 
 |  _| / _` \ \ /\ / / | '_ \  | |  | | | | '_ \| | | |/ _ \/ __|
 | |__| (_| |\ V  V /| | | | | | |__| |_| | |_) | | | | (_) \__ \
 |_____\__,_| \_/\_/ |_|_| |_|  \____\__,_|_.__/|_|_|_|\___/|___/
-->

<div align="center">

# 🏋️‍♂️ AMRAP BOX — WOD Timer & Offline Tools

**Sistema integral de cronometraje para CrossFit & Functional Training en Puro HTML + CSS + JavaScript (100% Offline, sin servidores ni instalaciones) para Windows / Navegador.**

![Platform: Windows & Web](https://img.shields.io/badge/Plataforma-Windows%20%7C%20Navegador%20Directo-00e5ff.svg)
![Stack: Pure HTML + CSS + JS](https://img.shields.io/badge/Tecnolog%C3%ADa-Puro%20HTML%20%2B%20JS%20(Cero%20Dependencias)-10b981.svg)
![Workouts: 60 WODs + 17 HYROX](https://img.shields.io/badge/Programaci%C3%B3n-60%20WODs%20%2B%2017%20HYROX%20H%C3%ADbridos-f59e0b.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

</div>

---

## 🚀 Cómo Usar en Windows (Cero Instalación)

Este proyecto está construido en **puro HTML, CSS y JavaScript local**. **No requiere instalar Node.js, ni Python, ni compiladores, ni conexión a internet**.

1. Descarga o descomprime esta carpeta en el computador Windows del Box.
2. Tienes **dos formas inmediatas** de abrirlo:
   - **Forma 1 — Doble clic directo en [`wod_timer.html`](./wod_timer.html)** *(o [`index.html`](./index.html))*:
     Se abrirá directamente en tu navegador predeterminado (Chrome, Edge, Brave, Firefox) con toda la música, videos, rutinas y temporizadores listos.
   - **Forma 2 — Doble clic en [`Iniciar_AMRAP_BOX_Windows.bat`](./Iniciar_AMRAP_BOX_Windows.bat)** *(Recomendado en Windows)*:
     - Abre el sistema en **Modo Aplicación a pantalla maximizada** (sin barras de direcciones ni pestañas del navegador).
     - Crea automáticamente un acceso directo llamado **`AMRAP BOX Timer`** con el logo oficial en el **Escritorio de Windows** para abrirlo con un clic todos los días.

> 💡 **Tip para el televisor o monitor del Box:** Una vez abierto, puedes presionar el botón de **Pantalla Completa** (esquina superior derecha del timer) o la tecla **`F11`** en Windows.

---

## 📸 Vista Previa del Sistema

### 1. Pantalla Principal Renderizada (`AMRAP BOX`)
Vista general con la esfera 3D interactiva de partículas (`assets/three.min.js` local), selector central de modos (`CLOCK`, `TABATA`, `FOR TIME`, `EMOM`, `AMRAP`), pestaña lateral sutil `OFFLINE` y el **Mini-Player flotante** en la esquina inferior izquierda reproduciendo en segundo plano:

<div align="center">
  <img src="./assets/screenshots/amrap-box-home.png" alt="AMRAP BOX - Pantalla Principal Renderizada" width="95%" />
</div>

### 2. Menú Lateral Desplegable (`Offline Tools`)
Detalle del panel lateral izquierdo desplegado con acceso rápido a **🎵 Music**, **🤸 Movilidad**, **🏋️ Rutinas**, **⚡ HYROX** y **🧮 Calc**, tarjetas de retos (*Challenge Songs*) y reproductor completo con modo secuencial `AUTO`:

<div align="center">
  <img src="./assets/screenshots/offline-tools-sidebar.png" alt="AMRAP BOX - Detalle del Menú Lateral Offline Tools" width="85%" />
</div>

---

## ⚙️ ¿Cómo Funciona el Proyecto?

El proyecto funciona **100% desde el disco local** sin depender de internet ni servidores externos. Todos los recursos (fuentes tipográficas, motor 3D, sonidos de conteo y canciones/videos comprimidos) viven dentro de la carpeta `assets/`.

```text
+-----------------------------------------------------------------------------------+
|                           AMRAP BOX · WOD TIMER ENGINE                            |
+-----------------------------------------+-----------------------------------------+
| 1. MOTOR PRINCIPAL DE TIEMPO (Derecha)  | 2. SUITE OFFLINE TOOLS (Panel Izquierdo)|
| --------------------------------------- | --------------------------------------- |
| • CLOCK + Cronómetro Minimalista Oculto | • 🎵 Workout Music (Tabata/Retos/Mixes) |
| • TABATA (Trabajo / Descanso / Rondas)  | • 🤸 Movilidad (Caminatas/Parejas/CF-L2)|
| • FOR TIME (Cronómetro + Time Cap)      | • 🏋️ Rutinas (30 Partner + 30 Indiv.)   |
| • EMOM (Intervalos + Rondas automáticas)| • ⚡ HYROX (17 Híbridos + Equivalencias) |
| • AMRAP (Cuenta regresiva de bloque)    | • 🧮 Calc (% 1RM + Discos / IMC)        |
| • Audio Local + Esfera 3D (Three.js)    | • Reproductor de Audio/Video + Mini-Bar |
+-----------------------------------------+-----------------------------------------+
```

### ⏱️ 1. Modos del Temporizador Principal (`script.js` + `audio_manager.js`)

| Modo | Configuración | Funcionamiento |
| :--- | :--- | :--- |
| **CLOCK** | Hora actual (`12H` / `24H` + Segundos) | Muestra el reloj digital de pared en formato gigante. Incluye debajo un **botón de cronómetro minimalista** que despliega un cronómetro auxiliar rápido con un solo botón `START / PAUSE` y `RESET` sin salir del reloj. |
| **TABATA** | `ROUNDS`, `WORK (SEC)`, `REST (SEC)` | Alterna automáticamente bloques de trabajo y descanso con alertas acústicas en los últimos 3 segundos. |
| **FOR TIME** | `TIME CAP (MIN)` | Cuenta ascendente para medir el tiempo total de ejecución hasta alcanzar el *Time Cap* configurado. |
| **EMOM** | `EVERY (SEC)`, `ROUNDS` | Reinicia el intervalo cada minuto (o segundos configurados) avanzando automáticamente de ronda hasta completar el total. |
| **AMRAP** | `TIME (MIN)` | Cuenta regresiva continua de alta visibilidad para completar la mayor cantidad de rondas o repeticiones posibles. |

- **Cuenta regresiva de preparación (`PREPARE`)**: Antes de iniciar cualquier WOD se ejecuta un conteo previo con avisos sonoros `3, 2, 1, GO!`.
- **Temas Visuales Dinámicos**: Selector de paletas de color y control de partículas 3D en el menú de configuración superior derecho.

---

### 🧰 2. Menú Lateral `Offline Tools` (`offline_tools.js`)

El panel izquierdo se abre desde la franja vertical `OFFLINE › › ›` y se pliega con `OCULTAR ‹ ‹ ‹` (siempre visible). Cuenta con **5 módulos especializados**:

#### 🎵 A. Workout Music & Reproductor Persistente
- **Tabata Songs**: Videos y canciones cronometradas con guías de `WORK` y `REST` integradas (*Tabata Rocky*, *Tabata Africa*, *Tabata Just Dance*).
- **Challenge Songs (Canciones de Reto)**:
  1. **Dale Don Dale (Don Omar)**: Un abdominal (*sit-up*) por cada *"dale"*.
  2. **Gasolina (Daddy Yankee)**: Un burpee / sentadilla por cada *"gasolina"* *(incluye video)*.
  3. **Who Let the Dogs Out (Baha Men)**: Un burpee / sentadilla por cada ladrido *(incluye video)*.
  4. **Thunderstruck (AC/DC)**: Sentadilla con salto por cada *"thunder"*.
  5. **Azul (Cristian Castro)**: Una sentadilla / burpee por cada *"azul"*.
  6. **Bring Sally Up (Moby)**: Cuando diga *"up"* se sube y cuando diga *"down"* se baja manteniendo abajo. **PRO: con disco**.
- **Music (Sesiones de Entrenamiento)**: Mezclas de **30 minutos**, **10 minutos**, tracks de alta energía y todos los retos unificados.
- **Modo `AUTO` y Mini-Player**:
  - Al activar **`AUTO`**, el reproductor salta automáticamente a la siguiente pista de la lista actual al terminar.
  - Si la pista es **video (`.mp4`)**, despliega el visor de video; si es **audio (`.m4a`)**, muestra el reproductor compacto.
  - Al cerrar el panel lateral, aparece un **Mini-Player flotante** abajo a la izquierda para pausar/reanudar o pasar de canción sin interrumpir el reloj.

#### 🤸 B. Movilidad & Warm-up (con Buscador y Tarjetas Desplegables)
- **18 protocolos estructurados** en 3 categorías:
  - **Caminatas Dinámicas (6)**: *Monster Walk*, *Bear Crawl + Inchworm*, *Spiderman Walk*, *Overhead Plate Duck Walk*, *Caminata de Granjero Asimétrica*, *Frankenstein & Quad Walk*.
  - **Movilidad en Parejas (6)**: *Partner Banded Hip Distraction*, *apertura torácica asistida*, *isquios PNF*, *rotación con KB*, *estiramiento dorsal en estructura*, *sentadilla profunda cara a cara*.
  - **CF-L2 & Kettlebell (6)**: Basado en la *Guía de Entrenamiento CrossFit Nivel 2 (CF-L2)* para corrección de fallos comunes en sentadilla, *overhead*, *rack frontal* y bisagra lumbar.

#### 🏋️ C. Rutinas de Box — 60 WODs Desplegables y Numerados
- **30 Partner WODs (`PARTNER WOD #01` al `#30`)** + **30 Individual WODs (`INDIVIDUAL WOD #01` al `#30`)**.
- Incluye en el cierre de parejas (`#30`) el benchmark real del box: **`Trifecta 45s Switch & Cash-Out`** (*Bloque A: 24 rondas cambiando cada 45s de 4 Wall Balls + 4 Pull-Ups + 4 American Swings + 4 Burpees; Bloque B: AMRAP 12' de 11 Clusters + Sync V-Ups; Bloque C: 39 Power Cleans + 45 Toes-to-Bar*).
- Cada tarjeta muestra en vista resumida su número, porcentaje de `% 1RM`, título y formato; al desplegarla detalla los bloques, pesos sugeridos **PRO / OPEN** y el **Material requerido** ajustado al inventario real del gimnasio.

#### ⚡ D. Serie HYROX & Híbridos Variados (`#01` a `#17` — Sin Repetidos + Equivalencias de Máquinas)
- **17 formatos HYROX y entrenamientos híbridos 100% diferentes entre sí**:
  - **#01 a #15**: *Oficial 8x1km, Triple Máquina (Cero Filas), Heavy Sled & Sandbag 75, Pirámide 1200-800-400m, EMOM 36 Minutos Rotativo, Duatlón Remo & Pista, El Centurión (6x100 reps), You Go I Go 10x400m, Devil Press & Cuerda, Escalera 20-40-60-80-100, Piernas de Hierro, Grip & Tracción, 4 Mega-Bloques, Barbell Hybrid, Half Sprint, Castigo de Cuerda & Core y Gran Final Monterrey*.
  - **#16 · HYROX Tunja**: *800m + 120m Burpees; 800m + 120m Lunges (2x20 lb); 800m + 120 DB Thrusters (2x20 lb); 800m + 120 American Swings (20 kg); 800m + 200m Farmers Carry (40 kg); 800m + 100 Push-Ups + 800m Run final*.
  - **#17 · HYROX Box Trifecta (3 Bloques de 1 km)**: *1 km + 50m Sled + 70 Burpee Broad Jumps; 1 km + 1 km Remo + 100 Lunges; 1 km + 100 Wall Balls + 100 Abdominales*.
- **Tabla Integrada de Equivalencias (`Metros ⇄ Calorías ⇄ Máquina Ocupada`)**: Indica en cada estación cuántos metros o calorías hacer en **Remo**, **SkiErg**, **Bicicleta de CrossFit** o **Pista** si otra pareja tiene ocupada una máquina o el trineo.
- **Conmutador `Individual` vs `Partner (Doubles)`**, buscador en vivo y selector desplegable rápido.

#### 🧮 E. Calculadoras de Atleta (`% RM` & `IMC`)
1. **Calculadora de `% 1RM` y Carga de Discos**:
   - Ingresa **`Tu 1RM Máximo (solo discos)`** (en `lb` o `kg`) y elige el tipo de barra (**Hombre 20 kg / 45 lb** o **Mujer 15 kg / 35 lb**).
   - Calcula automáticamente la tabla desde **50% hasta 95% del 1RM (solo discos y libras por lado)**, muestra el total sumando la barra y te indica exactamente **qué discos de libras (`45, 35, 25, 15, 10, 5 lb`) montar a cada lado**.
2. **Calculadora de `IMC` y Rango de Peso Adecuado**:
   - Ingresa tu **Altura (`cm`)** y **Peso (`kg`)** libremente con el teclado.
   - Muestra tu **IMC exacto**, clasificación y el **rango de peso recomendado** en kilogramos para tu estatura.

---

## 📂 Estructura del Proyecto (Puro HTML + JS + CSS)

```text
.
├── wod_timer.html                   # Aplicación principal (doble clic para abrir en cualquier navegador)
├── index.html                       # Redirección directa a wod_timer.html
├── Iniciar_AMRAP_BOX_Windows.bat    # Lanzador 1-clic para Windows (abre en modo App y crea icono en Escritorio)
├── style.css                        # Estilos visuales, temas, animaciones y diseño responsive
├── script.js                        # Motor de tiempo (CLOCK, TABATA, FOR TIME, EMOM, AMRAP + Cronómetro)
├── offline_tools.js                 # Suite Offline Tools (Música, 18 Movilidad, 60 WODs, 17 HYROX y Calculadoras)
├── audio_manager.js                 # Generador de sonidos y conteos de ronda
├── background_3d.js                 # Esfera 3D interactiva de partículas
└── assets/
    ├── three.min.js                 # Motor 3D local (sin internet)
    ├── fonts/                       # Fuentes Iosevka locales (.woff2)
    ├── screenshots/                 # Capturas de pantalla de referencia
    │   ├── amrap-box-home.png
    │   └── offline-tools-sidebar.png
    └── media/                       # Biblioteca de audio (.m4a) y video (.mp4) lista para reproducir
        ├── tabata/
        ├── challenges/
        └── music/
```

---

<div align="center">
  <strong>AMRAP BOX · Functional & CrossFit</strong><br/>
  <sub>Made in Monterrey 🇨🇴 By Edwin C. 🤖</sub>
</div>
