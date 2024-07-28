import * as S from "./Button.styles";

interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
}

function Button({ children, onPress }: ButtonProps) {
  return <S.Container onPress={onPress}>{children}</S.Container>;
}

export default Button;
