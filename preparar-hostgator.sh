#!/bin/bash

# Script para preparar archivos para HostGator
echo "🚀 Preparando archivos para HostGator..."

# Verificar que existe la carpeta build
if [ ! -d "build" ]; then
    echo "❌ Error: No se encontró la carpeta 'build'"
    echo "Ejecuta primero: npm run build"
    exit 1
fi

# Crear archivo ZIP
echo "📦 Comprimiendo archivos..."
cd build
zip -r ../entretenimiento-barato.zip . -x "*.map" "*.DS_Store"
cd ..

echo "✅ Archivo creado: entretenimiento-barato.zip"
echo ""
echo "📋 Próximos pasos:"
echo "1. Ve a tu cPanel de HostGator"
echo "2. Sube el archivo 'entretenimiento-barato.zip'"
echo "3. Extráelo en public_html"
echo "4. ¡Listo!"
echo ""
echo "📁 Archivos incluidos:"
ls -la build/
