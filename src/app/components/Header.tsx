"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="navbar container">
        <a className="logo" href="#inicio">
          <span className="logo-mark">J</span>
          <span>
            jovi academy<span className="logo-dot">.</span>
          </span>
        </a>

        <div className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#solucao" onClick={closeMenu}>A Solução</a>
          <a href="#publico" onClick={closeMenu}>Público-Alvo</a>
          <a href="#galeria" onClick={closeMenu}>Galeria</a>
          <a href="#equipe" onClick={closeMenu}>Nossa Equipe</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
        </div>

        <button
          className="menu-toggle"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
}