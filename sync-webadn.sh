#!/usr/bin/env bash
###############################################################################
# sync-webadn.sh
#
# OBJETIVO:
#   Dejar el repositorio remoto de GitHub (CharlyCyber/WebADN) 100% IGUAL a la
#   carpeta local de trabajo.
#
# CAUSA DEL PROBLEMA QUE RESUELVE:
#   1) El trabajo real vive en la rama 'master', pero GitHub muestra 'main'
#      (que estaba desactualizada). -> Se sincroniza 'main' = 'master'.
#   2) Habia cambios locales editados pero NUNCA commiteados (briefComposer.js,
#      orchestrator.js, README.md, etc.). -> Se commitean y se suben.
#
# DECISION DE RAMA:
#   'master' es la fuente de verdad. 'main' se hace identica a 'master'.
#
# USO (desde Git Bash en Windows, dentro de la carpeta del proyecto):
#   cd /c/Users/Charli/Documents/Proyectos/WebADN
#   bash sync-webadn.sh
###############################################################################

set -e  # Abortar si cualquier comando falla

echo "=============================================="
echo " SINCRONIZADOR WebADN -> GitHub"
echo "=============================================="

# --- 0. Verificar que estamos dentro de un repo git ------------------------
if [ ! -d ".git" ]; then
  echo "ERROR: Esta carpeta no es un repositorio git (no existe .git/)."
  echo "Ejecuta el script dentro de C:\\Users\\Charli\\Documents\\Proyectos\\WebADN"
  exit 1
fi

# --- 1. Mostrar estado actual ----------------------------------------------
echo ""
echo ">> Estado actual del repositorio:"
git status --short
echo ""

# --- 2. Asegurar que estamos en master -------------------------------------
echo ">> Cambiando a la rama 'master'..."
git checkout master

# --- 3. Commitear TODOS los cambios pendientes (incluye borrados y nuevos) --
if [ -n "$(git status --porcelain)" ]; then
  echo ">> Hay cambios pendientes. Commiteando..."
  git add -A
  git commit -m "chore: sincronizar cambios locales pendientes con el remoto"
else
  echo ">> No hay cambios pendientes que commitear."
fi

# --- 4. Traer lo ultimo del remoto y subir master --------------------------
echo ">> Trayendo cambios remotos (fetch)..."
git fetch origin

echo ">> Subiendo 'master' a GitHub..."
git push origin master

# --- 5. Hacer que 'main' quede IDENTICA a 'master' -------------------------
echo ">> Sincronizando rama 'main' para que sea igual a 'master'..."

# Crear 'main' local si no existe, rastreando la remota
if git show-ref --verify --quiet refs/heads/main; then
  git checkout main
else
  git checkout -b main origin/main 2>/dev/null || git checkout -b main
fi

# Fusionar master dentro de main. Si hay historia divergente sin conflicto real,
# esto avanza main hasta master. (master es la fuente de verdad).
git merge master -m "merge: sincronizar main con master" || {
  echo ""
  echo "!! Conflicto al fusionar. Forzando main = master (master manda)..."
  git merge --abort 2>/dev/null || true
  git reset --hard master
}

echo ">> Subiendo 'main' a GitHub..."
git push origin main

# --- 6. Volver a master ----------------------------------------------------
git checkout master

echo ""
echo "=============================================="
echo " LISTO. Ahora 'main' y 'master' son identicas"
echo " y todos tus cambios locales estan en GitHub."
echo "=============================================="
echo ""
echo "RECOMENDACION FINAL (opcional, manual en la web):"
echo "  GitHub -> Settings -> Branches -> Default branch"
echo "  Asegurate de que la rama por defecto sea la que quieres ver."
echo ""
echo ">> Verificacion: ultimos commits en cada rama"
echo "--- master ---"
git --no-pager log master -1 --oneline
echo "--- main ---"
git --no-pager log main -1 --oneline
