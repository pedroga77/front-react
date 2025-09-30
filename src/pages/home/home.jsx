import React, { useEffect, useState } from "react";
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
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await fetch("http://localhost:8080/v1/journey/group");
        if (!response.ok) throw new Error("Erro ao buscar grupos");

        const data = await response.json();
        // Ajusta conforme o formato retornado pela API
        const groupsArray = Array.isArray(data.Group) ? data.Group : [];

        // Formata os campos para bater com o JSX
        const formattedGroups = groupsArray.map(g => ({
          id: g.id_group,
          nome: g.nome || "Sem nome",
          limite: g.limite || 0,
          membros: Array.isArray(g.membros) ? g.membros : [],
        }));

        setGroups(formattedGroups);
      } catch (error) {
        console.error("Erro ao buscar grupos:", error);
        setGroups([]);
      }
    };

    fetchGroups();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Container>
        <Header>
          <Title>Bem-vindo ao Journey!</Title>
        </Header>

        <GroupsWrapper>
          <GroupsTitle>Meus Grupos</GroupsTitle>

          <Actions>
            <ActionButton>
              <Link to="/criarGrupo" style={{ display: "flex", alignItems: "center", gap: "5px", color: "inherit", textDecoration: "none" }}>
                <FaPlus /> Criar Grupo
              </Link>
            </ActionButton>
            <ActionButton>
              <FaFilter /> Filtros
            </ActionButton>
          </Actions>

          <GroupGrid>
            {groups.length > 0 ? (
              groups.map((group) => (
                <GroupCard key={group.id}>
                  <GroupIcon>
                    <FaBalanceScale />
                  </GroupIcon>
                  <GroupInfo>
                    <GroupName>{group.nome}</GroupName>
                    <GroupMembers>
                      {group.membros.length} membros
                      {group.limite && group.membros.length >= group.limite
                        ? " (limite atingido)"
                        : ""}
                    </GroupMembers>
                  </GroupInfo>
                </GroupCard>
              ))
            ) : (
              <p>Nenhum grupo encontrado</p>
            )}
          </GroupGrid>
        </GroupsWrapper>
      </Container>
    </div>
  );
};

export default Home;
