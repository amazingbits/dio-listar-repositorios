import React from "react";
import { FormContainer } from "./styles";
import Input from "../Input";
import Button from "../Button";
import { api } from "../../services/api";
import List from "../Card";

const Form = () => {
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [repo, setRepo] = React.useState("");
  const [data, setData] = React.useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    setData(null);
    setLoading(true);
    let endPoint;
    if (username.trim() !== "" && repo.trim() !== "") {
      // usuário e repositório
      endPoint = `/repos/${username}/${repo}`;
    } else if (username.trim() !== "" && repo.trim() === "") {
      // apenas usuário
      endPoint = `/users/${username}`;
    } else {
      // apenas repositório
      setData(null);
      setError("Você deve preencher um usuário");
      setLoading(false);
      return;
    }

    try {
      setError("");
      const response = await api.get(endPoint);
      setData(response.data);
      setUsername("");
      setRepo("");
    } catch (err) {
      setError("Repositório não encontrado");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          label="Usuário"
          name="username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
          autoFocus
        />
        <Input
          label="Repositório"
          name="repo"
          value={repo}
          onChange={({ target }) => setRepo(target.value)}
        />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Pesquisar</Button>
        )}
      </FormContainer>
      <p style={{ color: "#fff", marginTop: "1rem" }}>{error}</p>
      {data && <List data={data} />}
    </>
  );
};

export default Form;
