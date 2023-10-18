import { CardContainer } from "./styles";
const Card = ({ data }) => {
  let type = data.login ? "user" : "repo";
  if (type === "user") {
    return (
      <CardContainer>
        <img src={data.avatar_url} alt={`Foto de ${data.name}`} />
        <p>
          <b>Nome:</b> {data.name}
        </p>
        <p>
          <b>Login:</b> {data.login}
        </p>
        <p>
          <b>Bio:</b> {data.bio}
        </p>
        <p>
          <a href={data.url} target="_blank" rel="noreferrer">
            Acessar Perfil
          </a>
        </p>
      </CardContainer>
    );
  }
  return (
    <CardContainer>
      <img src={data.owner.avatar_url} alt={`Foto de ${data.owner.login}`} />
      <p>
        <b>ID do Rep:</b> {data.id}
      </p>
      <p>
        <b>Nome:</b> {data.name}
      </p>
      <p>
        <b>Dono:</b> {data.owner.login}
      </p>
    </CardContainer>
  );
};

export default Card;
