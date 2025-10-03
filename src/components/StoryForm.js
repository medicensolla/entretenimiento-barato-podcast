import React, { useCallback, useMemo, useState } from "react";
import EasterEgg from "./EasterEgg";
import "./StoryForm.css";

const SECTION_WEBHOOKS = {
  "Me Ondie - Dilemas Morales":
    process.env.REACT_APP_DISCORD_ME_ONDIE_WEBHOOK_URL,
  "Dr. Cupido - Consejos para el amor":
    process.env.REACT_APP_DISCORD_DR_CUPIDO_WEBHOOK_URL,
  "Yo Opino - Opiniones Controversiales":
    process.env.REACT_APP_DISCORD_YO_OPINO_WEBHOOK_URL,
  "Desde la Oficina - Historias del trabajo":
    process.env.REACT_APP_DISCORD_LA_OFICINA_WEBHOOK_URL,
  "Zona Majin - Anecdotas y consultas paranormales":
    process.env.REACT_APP_DISCORD_LA_ZONA_MAJIN_WEBHOOK_URL,
};

const SECTIONS = [
  { name: "Me Ondie - Dilemas Morales", color: "#ff0000" },
  { name: "Dr. Cupido - Consejos para el amor", color: "#ff00ff" },
  { name: "Yo Opino - Opiniones Controversiales", color: "#ffff00" },
  {
    name: "Zona Majin - Anecdotas y consultas paranormales",
    color: "#00ff00",
  },
  { name: "Desde la Oficina - Historias del trabajo", color: "#00ffff" },
];

const getInitialFormData = () => ({
  name: "",
  email: "",
  section: "",
  story: "",
  isAnonymous: false,
});

const StoryForm = ({ onNavigate }) => {
  const [formData, setFormData] = useState(getInitialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleInputChange = useCallback((event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }, []);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      if (isSubmitting) {
        return;
      }

      setIsSubmitting(true);

      try {
        const { section, isAnonymous, name, email, story } = formData;
        const webhookUrl = SECTION_WEBHOOKS[section];

        if (!webhookUrl) {
          throw new Error(`No Discord webhook configured for section "${section}"`);
        }

        const authorName = isAnonymous ? "Anonimo" : name.trim() || "Sin nombre";
        const authorEmail = isAnonymous ? "Anonimo" : email.trim() || "Sin email";
        const trimmedStory = story.trim();

        if (!trimmedStory) {
          window.alert("Por favor escribe tu historia antes de enviarla.");
          return;
        }

        const messageLines = [
          "**Nueva carta recibida**",
          `Seccion: ${section || "Sin seccion"}`,
          `Nombre: ${authorName}`,
          `Email: ${authorEmail}`,
          "",
          trimmedStory,
        ];

        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: messageLines.join("\n"),
          }),
        });

        if (!response.ok) {
          throw new Error(
            `Discord webhook responded with status ${response.status}`
          );
        }

        window.alert("Historia enviada exitosamente. Gracias por compartirla.");
        setFormData(getInitialFormData());
      } catch (error) {
        console.error("Error enviando mensaje a Discord:", error);
        window.alert(
          "Error al enviar la historia. Revisa la configuracion e intenta de nuevo."
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, isSubmitting]
  );

  const accentColor = useMemo(() => {
    const selectedSection = SECTIONS.find((section) => section.name === formData.section);
    return selectedSection ? selectedSection.color : "#ffffff";
  }, [formData.section]);

  return (
    <div className="tv-screen" style={{ "--accent-color": accentColor }}>
      <div className="scanlines"></div>
      <div className="noise"></div>
      <div className="tv-static"></div>

      <div className="tv-content">
        <div className="channel-info">
          <span
            className="channel-number"
            onClick={() => onNavigate("podcast")}
          >
            EB-TV
          </span>
          <span className="channel-name" onClick={() => onNavigate("story")}>
            Entretenimiento Barato
          </span>
          <span
            className="signal-strength"
            onClick={() => setShowEasterEgg(true)}
          >
            +-+-+-
          </span>
        </div>

        <div className="program-info">
          <h1 className="program-title">Cuentanos tu Historia</h1>
        </div>

        <form className="story-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">SECCION:</label>
            <select
              name="section"
              value={formData.section}
              onChange={handleInputChange}
              className="form-select"
              disabled={isSubmitting}
              required
            >
              <option value="">Selecciona una seccion</option>
              {SECTIONS.map((section) => (
                <option key={section.name} value={section.name}>
                  {section.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="isAnonymous"
                checked={formData.isAnonymous}
                onChange={handleInputChange}
                className="checkbox-input"
                disabled={isSubmitting}
              />
              <span className="checkbox-text">ENVIO ANONIMO</span>
            </label>
          </div>

          {!formData.isAnonymous && (
            <div className="form-group">
              <label className="form-label">NOMBRE:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Tu nombre aqui..."
                required
                disabled={isSubmitting}
              />
            </div>
          )}

          {!formData.isAnonymous && (
            <div className="form-group">
              <label className="form-label">EMAIL:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                placeholder="tu@email.com"
                required
                disabled={isSubmitting}
              />
            </div>
          )}

          <div className="form-group">
            <label className="form-label">TU HISTORIA:</label>
            <textarea
              name="story"
              value={formData.story}
              onChange={handleInputChange}
              className="form-textarea"
              placeholder="Escribe tu historia aqui..."
              rows="8"
              required
              disabled={isSubmitting}
            />
          </div>

          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? "ENVIANDO..." : "ENVIAR HISTORIA"}
          </button>
        </form>

        <div className="action-buttons">
          <button
            className="action-btn"
            onClick={() => onNavigate("redes")}
            disabled={isSubmitting}
          >
            REDES
          </button>
          <button
            className="action-btn"
            onClick={() => onNavigate("quienes-somos")}
            disabled={isSubmitting}
          >
            PODCAST
          </button>
          <button className="action-btn" data-hover="PROXIMAMENTE" disabled={isSubmitting}>
            TIENDA
          </button>
        </div>
      </div>

      {showEasterEgg && <EasterEgg onClose={() => setShowEasterEgg(false)} />}
    </div>
  );
};

export default StoryForm;
