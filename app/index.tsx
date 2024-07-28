import { queries } from "@/api";
import { NoteCategory } from "@/api/types";
import { Note, NoteCard, Spacer, Subtitle, Title } from "@/components";
import * as S from "@/components/Dashboard/Dashboard.styles";
import { Button } from "@/components/ui";
import { useQuery } from "@tanstack/react-query";
import { Link } from "expo-router";
import { FlatList, View, Text } from "react-native";

export default function HomeScreen() {
  const { data: importantNotes, isLoading: isLoadingImportantNotes } = useQuery(
    {
      ...queries.notes.list({ category: NoteCategory.Important }),
    }
  );

  const { data: notes, isLoading: isLoadingNotes } = useQuery({
    ...queries.notes.list({ category: NoteCategory.Normal }),
  });

  console.log({ importantNotes, notes });

  return (
    <S.Container>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Subtitle>Hello! 🌞 </Subtitle>
        <Link href="/notes/new" asChild>
          <Button>
            <Text style={{ color: "#fff", lineHeight: 24, fontSize: 20 }}>
              +
            </Text>
          </Button>
        </Link>
      </View>
      <Title>Your Notes</Title>
      <View style={{ width: "100%" }}>
        <FlatList
          data={importantNotes}
          horizontal
          renderItem={({ item }) => <NoteCard key={item.id} note={item} />}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <Spacer horizontal size="16px" />}
        />
      </View>

      <FlatList
        data={notes}
        renderItem={({ item }) => <Note key={item.id} note={item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <Spacer size="16px" />}
        ListFooterComponent={() => <Spacer size="40px" />}
      />
    </S.Container>
  );
}
