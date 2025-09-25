import styled from "styled-components";

export const SidebarHeader = styled.div`
  width: 220px;
  background-color: #3b2da0;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 15px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  height: 100vh;
`;

export const ProfileAvatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 25px;
  border: 2px solid #fff;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

export const NavBtn = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  padding: 12px 15px;
  border-radius: 10px;
  text-align: left;
  cursor: pointer;
  font-size: 15px;
  transition: 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`;
