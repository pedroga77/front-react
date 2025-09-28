import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Sidebar = styled.div`
  width: 220px;
  background-color: transparent; /* sidebar já pronto */
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
  background: #f5f5f5;
`;

export const Welcome = styled.h1`
  color: #2b2b2b;
  font-size: 28px;
  margin-bottom: 20px;
`;

export const Box = styled.div`
  background-color: #3b2da0;
  padding: 20px;
  border-radius: 12px;
  color: white;
`;

export const GroupList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;
`;

export const GroupCard = styled.div`
  background-color: #5b45d6;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;

  strong {
    display: block;
    font-size: 16px;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: #e0e0e0;
  }
`;

export const Button = styled.button`
  background: rebeccapurple;
  border: none;
  border-radius: 20px;
  padding: 6px 14px;
  cursor: pointer;
  font-weight: bold;
  margin-left: 10px;

  &:hover {
    background: #ddd;
  }
`;
