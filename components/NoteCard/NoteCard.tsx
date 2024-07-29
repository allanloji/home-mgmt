import { Note } from "@/api/types";
import * as S from "./NoteCard.styles";
import { Spacer } from "../ui/Spacer";
import { Link } from "expo-router";

interface NoteCardProps {
  note: Note;
}

function NoteCard({ note }: NoteCardProps) {
  return (
    <Link href={{ pathname: "/notes/[id]", params: { id: note.id } }} asChild>
      <S.Container
        id={note.id}
        style={({ pressed }) => [
          { transform: [{ scale: pressed ? 0.95 : 1 }] },
        ]}
      >
        <S.Title>{note.title}</S.Title>
        <Spacer size="16px" />
        <S.Content>{note.content}</S.Content>
      </S.Container>
    </Link>
  );
}

export default NoteCard;
