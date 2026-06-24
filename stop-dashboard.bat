@echo off
REM WebADN — Detiene el servidor node que corre en background.
REM Usa el PID guardado por start-dashboard-hidden.vbs; si no existe, busca node.exe.

cd /d "%~dp0"
set "PIDFILE=webadn-server.pid"

if exist "%PIDFILE%" (
  set /p PID=<"%PIDFILE%"
  if defined PID (
    taskkill /F /PID %PID% >nul 2>&1
    if not errorlevel 1 (
      echo Servidor detenido (PID %PID%).
      del "%PIDFILE%" >nul 2>&1
      goto :done
    )
    echo No se encontro el proceso con PID %PID%. Buscando node.exe...
  )
)

REM Fallback: matar cualquier node.exe que escuche el puerto 4173.
set "FOUND=0"
for /f "tokens=5" %%P in ('netstat -ano ^| findstr ":4173" ^| findstr "LISTENING"') do (
  taskkill /F /PID %%P >nul 2>&1
  if not errorlevel 1 (
    echo Servidor detenido (PID %%P por puerto 4173).
    set "FOUND=1"
  )
)
if "%FOUND%"=="0" echo No habia servidor en ejecucion.

:done
if exist "%PIDFILE%" del "%PIDFILE%" >nul 2>&1
timeout /t 2 /nobreak >nul
