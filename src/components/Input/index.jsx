import { InputContainer } from "./styles";

const Input = ({ label, name, value, onChange, ...props }) => {
  return (
    <InputContainer>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        {...props}
      />
    </InputContainer>
  );
};

export default Input;
