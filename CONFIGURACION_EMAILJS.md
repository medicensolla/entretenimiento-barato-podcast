# 📧 Configuración de EmailJS para Entretenimiento Barato

## ✅ ¿Qué está listo?
- ✅ EmailJS instalado y configurado en el código
- ✅ Formulario actualizado para usar EmailJS
- ✅ Sin necesidad de servidor backend
- ✅ Solución completamente gratuita

## 🔧 Solo necesitas hacer esto:

### 1. Crear cuenta en EmailJS
- Ve a https://www.emailjs.com/
- Haz clic en "Sign Up" y crea una cuenta gratuita
- La cuenta gratuita permite hasta 200 emails por mes

### 2. Configurar servicio de email
- En el dashboard, ve a "Email Services"
- Haz clic en "Add New Service"
- Selecciona "Gmail" como proveedor
- Conecta tu cuenta de Gmail (podcastbarato@gmail.com)
- Copia el **Service ID** que se genera

### 3. Crear plantilla de email
- Ve a "Email Templates"
- Haz clic en "Create New Template"
- Usa esta plantilla:

**Asunto:**
```
Nueva historia para {{section}} - Entretenimiento Barato
```

**Contenido HTML:**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
  <div style="background-color: #000; color: #fff; padding: 20px; text-align: center; margin-bottom: 20px;">
    <h1 style="margin: 0; font-size: 24px;">📺 ENTERTENIMIENTO BARATO</h1>
    <p style="margin: 10px 0 0 0; font-size: 16px;">Nueva historia recibida</p>
  </div>
  
  <div style="background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <h2 style="color: #333; margin-top: 0;">📝 Detalles de la historia</h2>
    
    <div style="margin-bottom: 15px;">
      <strong style="color: #666;">Sección:</strong>
      <span style="color: #333; margin-left: 10px; background-color: #e8f4fd; padding: 4px 8px; border-radius: 4px;">{{section}}</span>
    </div>
    
    <div style="margin-bottom: 15px;">
      <strong style="color: #666;">Enviado por:</strong>
      <span style="color: #333; margin-left: 10px;">{{sender_name}}</span>
    </div>
    
    <div style="margin-bottom: 15px;">
      <strong style="color: #666;">Email:</strong>
      <span style="color: #333; margin-left: 10px;">{{sender_email}}</span>
    </div>
    
    <div style="margin-bottom: 15px;">
      <strong style="color: #666;">Tipo de envío:</strong>
      <span style="color: #333; margin-left: 10px;">{{is_anonymous}}</span>
    </div>
    
    <div style="margin-top: 20px;">
      <strong style="color: #666; display: block; margin-bottom: 10px;">Historia:</strong>
      <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #007bff; border-radius: 4px; line-height: 1.6; color: #333;">
        {{story}}
      </div>
    </div>
  </div>
  
  <div style="text-align: center; margin-top: 20px; color: #666; font-size: 14px;">
    <p>Este email fue enviado automáticamente desde el formulario de Entretenimiento Barato</p>
    <p>Fecha: {{date}}</p>
  </div>
</div>
```

- Guarda la plantilla y copia el **Template ID**

### 4. Obtener Public Key
- Ve a "Account" → "General"
- Copia tu **Public Key**

### 5. Actualizar el código
- Abre el archivo `src/components/StoryForm.js`
- Busca la sección `EMAILJS_CONFIG` (líneas 23-28)
- Reemplaza los valores:
  - `PUBLIC_KEY`: Tu Public Key
  - `SERVICE_ID`: Tu Service ID  
  - `TEMPLATE_ID`: Tu Template ID

### 6. ¡Probar!
- La aplicación ya está ejecutándose en http://localhost:3000
- Llena el formulario y envía una historia de prueba
- Verifica que llegue el email a podcastbarato@gmail.com

## 🎯 Ventajas de esta solución:
- ✅ **Completamente gratuita** (200 emails/mes)
- ✅ **Sin servidor** que mantener
- ✅ **Fácil configuración** (solo 3 valores)
- ✅ **Emails profesionales** con plantilla HTML
- ✅ **Funciona inmediatamente** después de configurar

## 📊 Límites de la cuenta gratuita:
- 200 emails por mes
- 2 servicios de email
- 2 plantillas
- Soporte por email

Si necesitas más emails, puedes actualizar a un plan de pago.

---
**¡Listo!** Una vez que configures los 3 valores en el código, el formulario funcionará perfectamente y enviará todas las historias directamente a podcastbarato@gmail.com.

