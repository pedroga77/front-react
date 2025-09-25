import React from "react";
import ""; // caso use CSS normal
// se quiser CSS-in-JS direto, pode importar styled-components ou emotion

function header() {
  return (
    <div className="sidebar-header">
      {/* Avatar */}
      <div className="profile-avatar">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="Avatar"
        />
      </div>

      {/* Navegação */}
      <nav className="sidebar-nav">
        <button className="nav-btn">➕ Criar Grupo</button>
        <button className="nav-btn">👥 Meus Grupos</button>
        <button className="nav-btn">💬 Chats</button>
        <button className="nav-btn">📖 E - Books</button>
      </nav>
    </div>
  );
}

export default header;
