import * as S from "./Button.styles";

interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
}

function Button({ children, onPress, disabled }: ButtonProps) {
  return (
    <S.Container
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.95 : 1 }] }]}
    >
      {children}
    </S.Container>
  );
}

export default Button;
