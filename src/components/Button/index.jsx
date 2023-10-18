import { ButtonComponent } from "./styles";

const Button = (props) => {
  return <ButtonComponent {...props}>{props.children}</ButtonComponent>;
};

export default Button;
