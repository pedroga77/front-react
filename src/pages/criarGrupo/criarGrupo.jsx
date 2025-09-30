import React from "react";
import Sidebar from "../../components/header/index.jsx";
import {
  Container,
  CardWrapper,
  Card,
  BackButton,
  Label,
  Input,
  Textarea,
  FileInput,
  CreateButton,
  Header,
  Title
} from "./criarGrupo.js";

const CriarGrupo = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Container>
        <Header>
         <Title>Bem-vindo ao Journey!</Title>
        </Header>


        <CardWrapper>
          <Card>
            <BackButton>← Voltar</BackButton>

            <Label>Nome do Grupo:</Label>
            <Input type="text" placeholder="Digite o nome do grupo" />

            <Label>Área específica:</Label>
            <Input type="text" placeholder="Digite a área específica" />

            <Label>Limite de Membros (máx: 30)</Label>
            <Input type="number" placeholder="Máximo 30" max={30} />

            <Label>Descrição do Grupo:</Label>
            <Textarea placeholder="Digite a descrição do grupo" />

            <Label className="upload">Imagem do Grupo:</Label>
            <FileInput type="file" />

            <CreateButton>+ Criar Grupo</CreateButton>
          </Card>
        </CardWrapper>
      </Container>
    </div>
  );
};

export default CriarGrupo;
