import React, { useEffect, useState } from "react";
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
  const [nome, setNome] = useState("");
  const [limite_membros, setLimiteMembros] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState(null);
  const [id_usuario] = useState(1); // mockado
  const [id_area, setIdArea] = useState("");
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/v1/journey/area")
      .then(res => res.json())
      .then(data => setAreas(Array.isArray(data) ? data : []))
      .catch(err => {
        console.error("Erro ao buscar áreas:", err);
        setAreas([]);
      });
  }, []);

  const handleSubmit = async () => {
    if (!nome || !limite_membros || !descricao || !id_area) {
      alert("Preencha todos os campos obrigatórios");
      return;
    }

    const payload = {
      nome,
      limite_membros: Number(limite_membros),
      descricao,
      imagem: null,
      id_usuario,
      id_area: Number(id_area),
    };

    try {
      const response = await fetch("http://localhost:8080/v1/journey/group", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Erro ao criar grupo");
      const data = await response.json();
      alert(data.message || "Grupo criado com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao criar grupo");
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Container>
        <Header>
          <Title>Bem-vindo ao Journey!</Title>
        </Header>

        <CardWrapper>
          <Card>
            <BackButton onClick={() => window.history.back()}>← Voltar</BackButton>

            <Label>Nome do Grupo:</Label>
            <Input
              type="text"
              placeholder="Digite o nome do grupo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <Label>Área específica:</Label>
            <select
              value={id_area}
              onChange={(e) => setIdArea(e.target.value)}
              style={{ padding: "10px", borderRadius: "12px", border: "none", fontSize: "14px" }}
            >
              <option value="">Selecione uma área</option>
              {areas.map(area => (
                <option key={area.id} value={area.id}>{area.nome}</option>
              ))}
            </select>

            <Label>Limite de Membros (máx: 30)</Label>
            <Input
              type="number"
              placeholder="Máximo 30"
              value={limite_membros}
              max={30}
              onChange={(e) => setLimiteMembros(e.target.value)}
            />

            <Label>Descrição do Grupo:</Label>
            <Textarea
              placeholder="Digite a descrição do grupo"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />

            <Label className="upload">Imagem do Grupo:</Label>
            <FileInput
              type="file"
              onChange={(e) => setImagem(e.target.files[0] || null)}
            />

            <CreateButton onClick={handleSubmit}>+ Criar Grupo</CreateButton>
          </Card>
        </CardWrapper>
      </Container>
    </div>
  );
};

export default CriarGrupo;
