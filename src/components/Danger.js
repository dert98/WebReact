import React, { useState, useEffect } from "react";

const Danger = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookieAccepted) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowBanner(false);
  };

  return (
    showBanner && (
      <div
        style={{
          position: "fixed",
          bottom: "0",
          width: "100%",
          backgroundColor: "#333",
          color: "#fff",
          padding: "10px",
          textAlign: "center",
          zIndex: "1000",
        }}
      >
        <p style={{ margin: "0", fontSize: "14px" }}>
          Utilizamos cookies para mejorar tu experiencia en este sitio.{" "}
          <a
            href="/politica-de-cookies"
            style={{ color: "#4CAF50", textDecoration: "underline" }}
          >
            Leer más.
          </a>
        </p>
        <button
          onClick={handleAccept}
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            padding: "8px 16px",
            marginLeft: "10px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Aceptar
        </button>
      </div>
    )
  );
};

export default Danger;
