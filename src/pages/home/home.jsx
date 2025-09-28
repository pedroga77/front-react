import Header from "../../components/header/index.jsx";
import {
  Sidebar,
  Container,
  Content,
  Welcome,
  Box,
  GroupList,
  GroupCard,
} from "./home.js";

function Home() {
  return (
    <Container>
      <Header />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar /> {/* Sidebar já existe */}

        <Content>
          <Welcome>Bem-vindo ao Journey!</Welcome>

          {/* Título Direito fora da box */}
          <h2>Direito</h2>

          <Box>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2>Grupos</h2>
              <div>
                <button style={{ marginRight: "10px" }}>+ Criar Grupo</button>
                <button>▼ Filtros</button>
              </div>
            </div>

            <GroupList>
              <GroupCard>
                <span>⚖️</span>
                <div>
                  <strong>Direito</strong>
                  <p>12 membros</p>
                </div>
              </GroupCard>

              <GroupCard>
                <span>⚖️</span>
                <div>
                  <strong>Direito</strong>
                  <p>30 membros (limite atingido)</p>
                </div>
              </GroupCard>

              <GroupCard>
                <span>⚖️</span>
                <div>
                  <strong>Direito</strong>
                  <p>12 membros</p>
                </div>
              </GroupCard>

              <GroupCard>
                <span>⚖️</span>
                <div>
                  <strong>Direito</strong>
                  <p>12 membros</p>
                </div>
              </GroupCard>
            </GroupList>
          </Box>
        </Content>
      </div>
    </Container>
  );
}

export default Home;
