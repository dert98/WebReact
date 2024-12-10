import React from "react";

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <h2 style={styles.title}>Menú</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <a href="#home" style={styles.link}>
            Inicio
          </a>
        </li>
        <li style={styles.listItem}>
          <a href="#about" style={styles.link}>
            Acerca de
          </a>
        </li>
        <li style={styles.listItem}>
          <a href="#services" style={styles.link}>
            Servicios
          </a>
        </li>
        <li style={styles.listItem}>
          <a href="#contact" style={styles.link}>
            Contacto
          </a>
        </li>
      </ul>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "250px",
    height: "100vh",
    backgroundColor: "#333",
    color: "white",
    padding: "20px",
    boxSizing: "border-box",
    position: "fixed",
    left: "0",
    top: "0",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  list: {
    listStyleType: "none",
    padding: "0",
  },
  listItem: {
    marginBottom: "15px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    display: "block",
    padding: "10px",
    borderRadius: "4px",
    transition: "background 0.3s ease",
  },
  linkHover: {
    backgroundColor: "#575757",
  },
};

export default Sidebar;
