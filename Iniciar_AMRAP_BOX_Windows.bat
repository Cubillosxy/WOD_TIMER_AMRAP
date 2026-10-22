@echo off
chcp 65001 >nul
setlocal

:: Ruta exacta de este directorio y del archivo HTML principal
set "APP_DIR=%~dp0"
set "HTML_FILE=%APP_DIR%wod_timer.html"
set "ICON_FILE=%APP_DIR%assets\favicon.ico"

:: 1. Crear acceso directo en el Escritorio de Windows automaticamente (si no existe)
set "SHORTCUT=%USERPROFILE%\Desktop\AMRAP BOX Timer.lnk"
if not exist "%SHORTCUT%" (
    powershell -NoProfile -ExecutionPolicy Bypass -Command "$ws = New-Object -ComObject WScript.Shell; $s = $ws.CreateShortcut('%SHORTCUT%'); $s.TargetPath = '%HTML_FILE%'; $s.WorkingDirectory = '%APP_DIR%'; if (Test-Path '%ICON_FILE%') { $s.IconLocation = '%ICON_FILE%' }; $s.Description = 'AMRAP BOX - WOD Timer & Offline Tools'; $s.Save()" >nul 2>&1
)

:: 2. Abrir en modo Aplicacion limpia (sin barra de direcciones) en Chrome o Edge, o navegador por defecto
where chrome >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    start "" chrome --app="file:///%HTML_FILE:\=/%" --start-maximized
    exit /b 0
)

if exist "%ProgramFiles%\Google\Chrome\Application\chrome.exe" (
    start "" "%ProgramFiles%\Google\Chrome\Application\chrome.exe" --app="file:///%HTML_FILE:\=/%" --start-maximized
    exit /b 0
)

if exist "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" (
    start "" "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" --app="file:///%HTML_FILE:\=/%" --start-maximized
    exit /b 0
)

:: Fallback: abrir directamente con el navegador predeterminado de Windows
start "" "%HTML_FILE%"
exit /b 0
