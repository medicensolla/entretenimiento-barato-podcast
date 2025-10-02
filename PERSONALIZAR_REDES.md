# 📱 PÁGINA DE REDES SOCIALES - PERSONALIZACIÓN

## ✅ ¡Página de redes creada!

### 📁 Archivos creados:
- ✅ `src/components/Redes.js` - Componente principal
- ✅ `src/components/Redes.css` - Estilos
- ✅ `src/App.js` - Navegación actualizada
- ✅ `src/components/StoryForm.js` - Botón REDES funcional

## 🔧 Cómo personalizar las redes sociales:

### 1. Editar información de presentadores
Abre `src/components/Redes.js` y modifica el array `presentadores`:

```javascript
const presentadores = [
  {
    nombre: "NOMBRE REAL DEL PRESENTADOR",
    rol: "Me Ondié",
    color: "#ff0000",
    redes: [
      { nombre: "Instagram", url: "https://instagram.com/usuario_real", icono: "📷" },
      { nombre: "Twitter", url: "https://twitter.com/usuario_real", icono: "🐦" },
      { nombre: "TikTok", url: "https://tiktok.com/@usuario_real", icono: "🎵" },
      { nombre: "YouTube", url: "https://youtube.com/@usuario_real", icono: "📺" }
    ]
  },
  // ... más presentadores
];
```

### 2. Editar redes generales del programa
Modifica el array `redesGenerales`:

```javascript
const redesGenerales = [
  { nombre: "Entretenimiento Barato", url: "https://instagram.com/usuario_real", icono: "📷", plataforma: "Instagram" },
  { nombre: "Entretenimiento Barato", url: "https://twitter.com/usuario_real", icono: "🐦", plataforma: "Twitter" },
  // ... más redes
];
```

### 3. Agregar más presentadores
Simplemente agrega más objetos al array `presentadores`:

```javascript
{
  nombre: "Nuevo Presentador",
  rol: "Nueva Sección",
  color: "#color_hex",
  redes: [
    { nombre: "Instagram", url: "https://instagram.com/usuario", icono: "📷" },
    // ... más redes
  ]
}
```

### 4. Cambiar colores de secciones
Modifica el valor `color` de cada presentador:
- Me Ondié: `#ff0000` (Rojo)
- Dr. Cupido: `#ff00ff` (Magenta)
- Yo Opino: `#ffff00` (Amarillo)
- Zona Majin: `#00ff00` (Verde)
- Desde la Oficina: `#00ffff` (Cian)

### 5. Agregar más redes sociales
Puedes agregar más plataformas:

```javascript
{ nombre: "Facebook", url: "https://facebook.com/usuario", icono: "👥" },
{ nombre: "Twitch", url: "https://twitch.tv/usuario", icono: "🎮" },
{ nombre: "Discord", url: "https://discord.gg/servidor", icono: "💬" },
{ nombre: "Spotify", url: "https://open.spotify.com/user/usuario", icono: "🎵" }
```

## 🎯 Funcionalidades incluidas:

### ✅ Diseño TV analógica
- Efectos de scanlines y ruido
- Colores SMPTE para cada sección
- Estilo retro consistente

### ✅ Responsive design
- Se adapta a móviles y tablets
- Grid flexible para presentadores
- Botones táctiles optimizados

### ✅ Navegación
- Botón "REDES" funcional
- Botón "VOLVER" en página de redes
- Navegación fluida entre páginas

### ✅ Enlaces externos
- Todos los enlaces abren en nueva pestaña
- Seguridad con `rel="noopener noreferrer"`
- Iconos visuales para cada plataforma

## 🚀 Cómo probar:

1. **Ejecuta la aplicación:**
   ```bash
   npm start
   ```

2. **Ve a http://localhost:3000**

3. **Haz clic en "REDES"**

4. **Verifica que los enlaces funcionen**

## 📱 Cómo actualizar en HostGator:

1. **Haz los cambios** en los archivos
2. **Prueba localmente** con `npm start`
3. **Crea nuevo build:**
   ```bash
   npm run build
   ```
4. **Prepara archivos:**
   ```bash
   ./preparar-hostgator.sh
   ```
5. **Sube a HostGator** siguiendo las instrucciones anteriores

## 🎨 Personalización avanzada:

### Cambiar iconos:
Reemplaza los emojis por iconos personalizados:
```javascript
{ nombre: "Instagram", url: "...", icono: "📷" } // Emoji
{ nombre: "Instagram", url: "...", icono: "🔗" } // Otro emoji
```

### Cambiar estilos:
Modifica `src/components/Redes.css` para:
- Cambiar colores
- Modificar tamaños
- Ajustar espaciado
- Personalizar efectos

---

## ✅ ¡Listo para personalizar!

La página de redes está completamente funcional. Solo necesitas reemplazar las URLs y nombres con la información real de los presentadores.
