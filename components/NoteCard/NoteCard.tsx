import * as S from "./NoteCard.styles";

interface NoteCardProps {
  note: {
    id: string;
    // title: string;
    // content: string;
  };
}

function NoteCard({ note }: NoteCardProps) {
  return (
    <S.Container id={note.id}>
      <S.Title>My note</S.Title>
    </S.Container>
  );
}

export default NoteCard;
