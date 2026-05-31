@echo off
cd /d "%~dp0"
echo Starting Awwwards Surgical Extractor Dashboard...
echo.
start /B "" node src/server.js
timeout /t 2 /nobreak >nul
start http://127.0.0.1:4173/
echo Dashboard opened in your browser.
echo Close this window to stop the server.
echo.
pause >nul
taskkill /f /im node.exe >nul 2>&1
