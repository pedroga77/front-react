import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #F0F2FF; 
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #1e1e2f;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

export const Card = styled.div`
  background: #4b39b8;
  border-radius: 12px;
  padding: 30px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: #fff;
`;

export const BackButton = styled.button`
  align-self: flex-start;
  background: #6c5dd3;
  border: none;
  border-radius: 20px;
  padding: 6px 14px;
  font-size: 14px;
  cursor: pointer;
  color: #fff;
  margin-bottom: 10px;

  &:hover {
    background: #7a6de0;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 12px;
  border: none;
  outline: none;
  font-size: 14px;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  border-radius: 12px;
  border: none;
  outline: none;
  font-size: 14px;
  resize: none;
  min-height: 60px;
`;

export const FileInput = styled.input`
  padding: 6px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
`;

export const CreateButton = styled.button`
  align-self: flex-end;
  background: #6c5dd3;
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: #7a6de0;
  }
`;


