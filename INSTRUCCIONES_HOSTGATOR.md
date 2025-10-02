# 🚀 INSTRUCCIONES PARA SUBIR A HOSTGATOR

## ✅ ¡Tu proyecto está listo!

### 📁 Archivos generados:
- ✅ Carpeta `build` creada con todos los archivos optimizados
- ✅ Archivo `.htaccess` incluido para React Router
- ✅ Build optimizado para producción

## 🌐 Pasos para subir a HostGator:

### 1. Comprimir archivos
- Ve a la carpeta `build` en tu proyecto
- Selecciona TODOS los archivos y carpetas dentro de `build`
- Comprímelos en un archivo ZIP llamado `entretenimiento-barato.zip`

### 2. Subir a HostGator (cPanel)

#### Opción A: File Manager
1. **Accede a tu cPanel de HostGator**
2. **Busca "File Manager" o "Administrador de archivos"**
3. **Navega a `public_html`** (carpeta principal)
4. **Sube el archivo ZIP**
   - Haz clic en "Upload" o "Subir archivos"
   - Selecciona `entretenimiento-barato.zip`
   - Espera a que se suba completamente
5. **Extraer archivos**
   - Haz clic derecho en el ZIP
   - Selecciona "Extract" o "Extraer"
   - Confirma la extracción
6. **Mover archivos a la raíz**
   - Entra a la carpeta extraída
   - Selecciona TODOS los archivos (Ctrl+A)
   - Córtalos (Ctrl+X)
   - Ve a `public_html` (carpeta raíz)
   - Pégalos (Ctrl+V)

#### Opción B: FTP (FileZilla)
1. **Descarga FileZilla** desde https://filezilla-project.org/
2. **Configura la conexión:**
   - Host: tu-dominio.com
   - Usuario: tu-usuario-hostgator
   - Contraseña: tu-contraseña-hostgator
   - Puerto: 21
3. **Conecta y sube:**
   - Navega a `public_html`
   - Arrastra TODOS los archivos de la carpeta `build`
   - Espera a que se suban completamente

## 📁 Estructura final en HostGator:

```
public_html/
├── index.html
├── asset-manifest.json
├── manifest.json
├── .htaccess
└── static/
    ├── css/
    │   └── main.ac5eb6fe.css
    └── js/
        └── main.2f82a086.js
```

## ✅ Verificación:

1. **Ve a tu dominio:** `https://tu-dominio.com`
2. **Prueba el formulario** de historias
3. **Verifica que los emails** lleguen a podcastbarato@gmail.com

## 🎯 ¡Ventajas de tu proyecto!

- ✅ **No necesita servidor backend** - Solo archivos estáticos
- ✅ **EmailJS funciona** desde cualquier dominio
- ✅ **Completamente gratuito** - Solo hosting básico
- ✅ **Fácil de mantener** - Solo subir archivos

## 🔧 Si algo no funciona:

### Error 404 en rutas:
- Verifica que el archivo `.htaccess` esté en `public_html`
- Asegúrate de que no esté dentro de una subcarpeta

### Emails no funcionan:
- EmailJS funciona desde cualquier dominio
- No necesita configuración adicional en el servidor
- Verifica que los IDs de EmailJS estén correctos en el código

### Archivos no cargan:
- Verifica que todos los archivos estén directamente en `public_html`
- No debe haber carpetas anidadas innecesarias

---

## 🎉 ¡Listo para subir!

Tu proyecto está completamente preparado para HostGator. Solo necesitas:
1. Comprimir la carpeta `build`
2. Subirla a `public_html`
3. ¡Disfrutar tu aplicación web funcionando!

**Los usuarios podrán enviar historias que llegarán automáticamente a podcastbarato@gmail.com.**
