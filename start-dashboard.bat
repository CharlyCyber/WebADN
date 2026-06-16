@echo off
cd /d "%~dp0"
title WebADN Dashboard

echo === WebADN - Surgical Web Extractor ===
echo.

REM 1) Comprobar que Node esta instalado
where node >nul 2>&1
if errorlevel 1 (
  echo [ERROR] Node.js no esta instalado.
  echo Descargalo de https://nodejs.org  (version LTS, 20 o superior^)
  pause
  exit /b
)

REM 2) Instalar dependencias la primera vez (VISIBLE)
if not exist "node_modules\playwright" (
  echo Primera ejecucion: instalando dependencias. Esto puede tardar varios minutos...
  call npm install
  if errorlevel 1 ( echo [ERROR] Fallo npm install & pause & exit /b )
  call npx playwright install chromium
  if errorlevel 1 ( echo [ERROR] Fallo la instalacion de Chromium & pause & exit /b )
  echo Dependencias instaladas.
  echo.
)

REM 3) Arrancar el servidor en background (misma ventana)
echo Iniciando servidor...
start /b node src/server.js

REM 4) Esperar a que el puerto 4173 responda ANTES de abrir el navegador
echo Esperando a que el servidor este listo...
:waitloop
timeout /t 1 /nobreak >nul
powershell -NoProfile -Command "try{(New-Object Net.Sockets.TcpClient('127.0.0.1',4173)).Close()}catch{exit 1}"
if errorlevel 1 goto waitloop

REM 5) Abrir el navegador
start http://127.0.0.1:4173/
echo.
echo Dashboard abierto en el navegador.
echo Cierra la ventana "WebADN Server" para detener el servidor.
