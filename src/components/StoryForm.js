import React, { useState } from "react";
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

const StoryForm = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    section: "",
    story: "",
    isAnonymous: false,
  });
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
  const [successInfo, setSuccessInfo] = useState(null);

  const sections = [
    { name: "Me Ondie - Dilemas Morales", color: "#ff0000" },
    { name: "Dr. Cupido - Consejos para el amor", color: "#ff00ff" },
    { name: "Yo Opino - Opiniones Controversiales", color: "#ffff00" },
    {
      name: "Zona Majin - Anecdotas y consultas paranormales",
      color: "#00ff00",
    },
    { name: "Desde la Oficina - Historias del trabajo", color: "#00ffff" },
  ];

  const handleCloseSuccess = () => {
    setShowSuccessScreen(false);
    setSuccessInfo(null);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submitButton = e.target.querySelector(".submit-button");
    const originalText = submitButton.textContent;
    submitButton.textContent = "ENVIANDO...";
    submitButton.disabled = true;

    try {
      const messageLines = [
        "**Nueva carta recibida**",
        `Seccion: ${formData.section || "Sin seccion"}`,
        `Nombre: ${
          formData.isAnonymous ? "Anonimo" : formData.name || "Sin nombre"
        }`,
        `Email: ${
          formData.isAnonymous ? "Anonimo" : formData.email || "Sin email"
        }`,
        "",
        formData.story,
      ];

      const webhookUrl = SECTION_WEBHOOKS[formData.section];

      if (!webhookUrl) {
        throw new Error(
          `No Discord webhook configured for section "${formData.section}"`
        );
      }

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

      setSuccessInfo({
        section: formData.section,
        isAnonymous: formData.isAnonymous,
        name: formData.name,
      });
      setShowSuccessScreen(true);
      setFormData({
        name: "",
        email: "",
        section: "",
        story: "",
        isAnonymous: false,
      });
    } catch (error) {
      console.error("Error enviando mensaje a Discord:", error);
      alert(
        "Error al enviar la historia. Revisa la configuracion e intenta de nuevo."
      );
    } finally {
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }
  };

  const selectedSection = sections.find((s) => s.name === formData.section);
  const accentColor = selectedSection ? selectedSection.color : "#ffffff";

  const successAccentColor =
    successInfo && successInfo.section
      ? sections.find((s) => s.name === successInfo.section)?.color || "#ffffff"
      : "#ffffff";

  const successViewerMessage = successInfo
    ? successInfo.isAnonymous
      ? "Gracias, agente anonimo."
      : `Gracias, ${successInfo.name || "telespectador"}.`
    : "";

  const successSectionMessage =
    successInfo?.section || "la programacion principal";

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
              required
            >
              <option value="">Selecciona una seccion</option>
              {sections.map((section) => (
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
                required={!formData.isAnonymous}
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
            />
          </div>

          <button type="submit" className="submit-button">
            ENVIAR HISTORIA
          </button>
        </form>

        <div className="action-buttons">
          <button className="action-btn" onClick={() => onNavigate("redes")}>
            REDES
          </button>
          <button
            className="action-btn"
            onClick={() => onNavigate("quienes-somos")}
          >
            PODCAST
          </button>
          <button className="action-btn" data-hover="PROXIMAMENTE">
            TIENDA
          </button>
        </div>
      </div>

      {showSuccessScreen && (
        <div
          className="tv-success-overlay"
          style={{ "--success-accent-color": successAccentColor }}
        >
          <div className="tv-success-noise"></div>
          <div className="tv-success-bars"></div>
          <div className="tv-success-content">
            <p className="success-signal">TRANSMISION COMPLETADA</p>
            <p className="success-message">{successViewerMessage}</p>
            <p className="success-submessage">
              Tu historia ya esta en programacion para{" "}
              <span className="success-section-name">
                {successSectionMessage}
              </span>
              .
            </p>
            <button
              type="button"
              className="success-close-button"
              onClick={handleCloseSuccess}
            >
              VOLVER AL FORMULARIO
            </button>
          </div>
        </div>
      )}

      {showEasterEgg && <EasterEgg onClose={() => setShowEasterEgg(false)} />}
    </div>
  );
};

export default StoryForm;
