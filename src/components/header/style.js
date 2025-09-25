import styled from "styled-components";

export const SidebarHeader = styled.aside`
  width: 220px;
  background-color: #3b2da0;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 15px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  height: 100vh;
  box-sizing: border-box;
`;

export const ProfileAvatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
  border: 2px solid rgba(255, 255, 255, 0.18);
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

/* O "card interno" — roxo, com padding, gap e sombra */
export const NavCard = styled.div`
  background: linear-gradient(180deg, #4b39b8 0%, #3d2f9a 100%);
  width: 100%;
  border-radius: 12px;
  padding: 14px;
  margin-top: 12px;
  box-shadow: 0 6px 18px rgba(16, 10, 60, 0.25);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

/* Botões dentro do card — ocupam a largura, padding confortável */
export const NavBtn = styled.button`
  background: transparent;
  border: none;
  color: white;
  text-align: left;
  cursor: pointer;
  font-size: 15px;
  padding: 12px 14px;
  width: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background 0.18s ease, transform 0.12s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;
