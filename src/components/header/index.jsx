import React from "react";
import { SidebarHeader, ProfileAvatar, NavCard, NavBtn } from "./style";

function Sidebar() {
  return (
    <SidebarHeader>
      {/* Avatar do usuário */}
      <ProfileAvatar>
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="Avatar"
        />
      </ProfileAvatar>

      {/* Card com todos os botões */}
      <NavCard>
        <NavBtn>➕ Criar Grupo</NavBtn>
        <NavBtn>👥 Meus Grupos</NavBtn>
        <NavBtn>💬 Chats</NavBtn>
        <NavBtn>📖 E-Books</NavBtn>
      </NavCard>
    </SidebarHeader>
  );
}

export default Sidebar;
