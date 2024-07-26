import * as S from "./Note.styles";
import { Text } from "react-native";
function Note() {
  return (
    <S.Container
      style={{
        shadowOffset: {
          width: 0,
          height: 2,
        },
      }}
    >
      <Text>My note</Text>
    </S.Container>
  );
}

export default Note;
