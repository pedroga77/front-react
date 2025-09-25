import React from "react";
import { SidebarHeader, ProfileAvatar, SidebarNav, NavBtn } from "./style";

function Sidebar() {
  return (
    <SidebarHeader>
      <ProfileAvatar>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Avatar" />
      </ProfileAvatar>

      <SidebarNav>
        <NavBtn>➕ Criar Grupo</NavBtn>
        <NavBtn>👥 Meus Grupos</NavBtn>
        <NavBtn>💬 Chats</NavBtn>
        <NavBtn>📖 E - Books</NavBtn>
      </SidebarNav>
    </SidebarHeader>
  );
}

export default Sidebar;
