import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/header/index.jsx";
import {
  Container,
  Header,
  Title,
  GroupsWrapper,
  GroupsTitle,
  GroupGrid,
  GroupCard,
  GroupIcon,
  GroupInfo,
  GroupName,
  GroupMembers,
  Actions,
  ActionButton,
} from "./home.js";

import { FaPlus, FaFilter, FaBalanceScale } from "react-icons/fa";

const Home = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <Container>
        <Header>
          <Title>Bem-vindo ao Journey!</Title>
        </Header>

        <GroupsWrapper>
  <GroupsTitle>
      Meus Grupos
  </GroupsTitle>

  {/* Actions fora dos cards, no topo direito */}
  <Actions>
    <ActionButton>
      <Link to= "/criarGrupo">
      <FaPlus /> Criar Grupo
      </Link>
    </ActionButton>
    <ActionButton>
      <FaFilter /> Filtros
    </ActionButton>
  </Actions>

  <GroupGrid>
    <GroupCard>
      <GroupIcon>
        <FaBalanceScale />
      </GroupIcon>
      <GroupInfo>
        <GroupName>Direito</GroupName>
        <GroupMembers>12 membros</GroupMembers>
      </GroupInfo>
    </GroupCard>

    <GroupCard>
      <GroupIcon>
        <FaBalanceScale />
      </GroupIcon>
      <GroupInfo>
        <GroupName>Direito</GroupName>
        <GroupMembers>30 membros (limite atingido)</GroupMembers>
      </GroupInfo>
    </GroupCard>

    <GroupCard>
      <GroupIcon>
        <FaBalanceScale />
      </GroupIcon>
      <GroupInfo>
        <GroupName>Direito</GroupName>
        <GroupMembers>12 membros</GroupMembers>
      </GroupInfo>
    </GroupCard>

    <GroupCard>
      <GroupIcon>
        <FaBalanceScale />
      </GroupIcon>
      <GroupInfo>
        <GroupName>Direito</GroupName>
        <GroupMembers>12 membros</GroupMembers>
      </GroupInfo>
    </GroupCard>
  </GroupGrid>
</GroupsWrapper>
      </Container>
    </div>
  );
};

export default Home;
