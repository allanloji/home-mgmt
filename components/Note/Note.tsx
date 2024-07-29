import { Link } from "expo-router";

import * as S from "./Note.styles";
import { Note as NoteAPI } from "../../api/types";
import { Spacer } from "../ui/Spacer";

interface NoteProps {
  note: NoteAPI;
}

function Note({ note }: NoteProps) {
  return (
    <Link href={{ pathname: "/notes/[id]", params: { id: note.id } }} asChild>
      <S.Container
        style={({ pressed }) => [
          { transform: [{ scale: pressed ? 0.95 : 1 }] },
        ]}
      >
        <S.Title>{note.title}</S.Title>
        <Spacer size="8px" />
        <S.Content>{note.content}</S.Content>
      </S.Container>
    </Link>
  );
}

export default Note;
