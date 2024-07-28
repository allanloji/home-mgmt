import { Switch as RNSwitch } from "react-native";
import * as S from "./Switch.styles";

interface SwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  label: string;
}

function Switch({ value, onValueChange, label }: SwitchProps) {
  return (
    <S.Container>
      <RNSwitch value={value} onValueChange={onValueChange} />
      <S.Label>{label}</S.Label>
    </S.Container>
  );
}

export default Switch;
