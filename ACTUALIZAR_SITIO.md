# 🔄 CÓMO ACTUALIZAR TU PÁGINA WEB EN HOSTGATOR

## ✅ ¡Tu sitio ya funciona! Ahora te explico cómo actualizarlo.

## 🔄 Proceso de actualización:

### Paso 1: Hacer cambios en tu proyecto local
1. **Edita los archivos** en tu computadora (`/Users/superhill/react-web-app/`)
2. **Prueba localmente** con `npm start`
3. **Verifica que todo funcione** correctamente

### Paso 2: Crear nuevo build
```bash
npm run build
```
Esto creará una nueva carpeta `build` con los cambios.

### Paso 3: Preparar archivos para subir
```bash
./preparar-hostgator.sh
```
Esto creará un nuevo `entretenimiento-barato.zip` con los cambios.

### Paso 4: Subir a HostGator

#### Opción A: File Manager (Recomendado)
1. **Ve a tu File Manager en HostGator**
2. **Selecciona todos los archivos antiguos** en `public_html`:
   - `index.html`
   - `asset-manifest.json`
   - `manifest.json`
   - `static/` (carpeta completa)
3. **Elimínalos** (NO elimines `.htaccess`)
4. **Sube el nuevo** `entretenimiento-barato.zip`
5. **Extráelo** en `public_html`
6. **¡Listo!**

#### Opción B: FTP (FileZilla)
1. **Conecta con FileZilla**
2. **Navega a `public_html`**
3. **Elimina archivos antiguos** (excepto `.htaccess`)
4. **Arrastra los nuevos archivos** de la carpeta `build`
5. **Espera a que se suban**

## 🚀 Script automatizado para actualizaciones:

### Crear script de actualización rápida:
```bash
#!/bin/bash
echo "🔄 Actualizando sitio web..."

# Crear build
echo "📦 Creando build..."
npm run build

# Preparar archivos
echo "📁 Preparando archivos..."
cd build
zip -r ../entretenimiento-barato.zip . -x "*.map" "*.DS_Store"
cd ..

echo "✅ Archivo actualizado: entretenimiento-barato.zip"
echo ""
echo "📋 Próximos pasos:"
echo "1. Ve a File Manager en HostGator"
echo "2. Elimina archivos antiguos (excepto .htaccess)"
echo "3. Sube el nuevo entretenimiento-barato.zip"
echo "4. Extráelo en public_html"
echo "5. ¡Actualizado!"
```

## ⚠️ IMPORTANTE: No eliminar estos archivos

### Archivos que NO debes eliminar:
- ✅ `.htaccess` - **NUNCA elimines este archivo**
- ✅ Cualquier archivo de configuración SSL

### Archivos que SÍ puedes eliminar:
- ❌ `index.html` (se reemplaza)
- ❌ `asset-manifest.json` (se reemplaza)
- ❌ `manifest.json` (se reemplaza)
- ❌ `static/` (carpeta completa se reemplaza)

## 🔧 Actualizaciones comunes:

### Cambiar contenido del formulario:
1. **Edita** `src/components/StoryForm.js`
2. **Sigue el proceso** de actualización

### Cambiar estilos:
1. **Edita** `src/components/StoryForm.css`
2. **Sigue el proceso** de actualización

### Cambiar configuración de EmailJS:
1. **Edita** `src/components/StoryForm.js` (líneas 24-28)
2. **Sigue el proceso** de actualización

## 🎯 Verificación después de actualizar:

1. **Ve a tu sitio:** `https://tu-dominio.com`
2. **Verifica que cargue** correctamente
3. **Prueba el formulario** de historias
4. **Confirma que los emails** lleguen a podcastbarato@gmail.com

## 💡 Consejos para actualizaciones:

### Actualización rápida (solo archivos específicos):
- Si solo cambias CSS: sube solo `static/css/`
- Si solo cambias JS: sube solo `static/js/`

### Actualización completa:
- Si cambias HTML o configuración: sube todo el build

### Backup antes de actualizar:
- Descarga una copia de `public_html` antes de cambios grandes

## 🚀 Comando rápido para actualizar:

```bash
# En tu terminal, ejecuta:
npm run build && ./preparar-hostgator.sh
```

Esto creará automáticamente el archivo ZIP listo para subir.

---

## ✅ ¡Tu sitio está listo para actualizaciones!

Cada vez que hagas cambios, solo sigue estos pasos y tu sitio se actualizará en minutos.
