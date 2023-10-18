import { Container } from "./AppStyles";
import githubLogo from "../assets/github-mark-white.svg";
import Form from "../components/Form";

function App() {
  return (
    <Container>
      <img src={githubLogo} alt="Logo do github" />
      <Form />
    </Container>
  );
}

export default App;
