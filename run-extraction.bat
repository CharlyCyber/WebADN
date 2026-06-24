@echo off
cd /d "%~dp0"
echo WebADN - Surgical Web Extractor CLI
echo =================================
echo.

set /p url="URL de referencia: "
set /p niche="Nicho (ej: estudio premium de arquitectura): "

echo.
echo Ejecutando extraccion...
node src/cli.js --url "%url%" --niche "%niche%"

echo.
pause