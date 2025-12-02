import React from "react";
import "./Header.css";

export default function Header({ onContactClick, onHomeClick, onPage2Click }) {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-placeholder"></div>
        <h1 className="logo-text">
          Once Upon a Dress
          <span className="byline"> por Franciele e Júlia </span>
        </h1>
      </div>

      <nav className="header-right">
        <button className="nav-button" onClick={onHomeClick}>
          Home
        </button>

        <button className="nav-button" onClick={onPage2Click}>
          Página 2
        </button>

        <button className="contact-button" onClick={onContactClick}>
          Contato
        </button>
      </nav>
    </header>
  );
}


