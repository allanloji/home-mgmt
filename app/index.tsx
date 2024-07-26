import { Note, NoteCard, Spacer, Subtitle, Title } from "@/components";
import { FlatList, ScrollView, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ padding: 16, flex: 1 }}>
      <Subtitle>Hello!</Subtitle>
      <Title>Your Notes</Title>
      <View style={{ width: "100%" }}>
        <FlatList
          data={[
            { id: "c1855081-193e-4084-973b-c606c6c02bd1" },
            { id: "312da2ea-005d-4014-89e2-fe8b7e204bf0" },
            { id: "157bbf17-d050-4ceb-bf31-219d699dbc1e" },
          ]}
          horizontal
          renderItem={({ item }) => <NoteCard key={item.id} note={item} />}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <Spacer horizontal size="16px" />}
        />
      </View>

      <FlatList
        data={[
          { id: "c1855081-193e-4084-973b-c606c6c02bd1" },
          { id: "312da2ea-005d-4014-89e2-fe8b7e204bf0" },
          { id: "157bbf17-d050-4ceb-bf31-219d699dbc1e" },
          { id: "da92a591-86b1-48ce-999f-c1c447c0e3e1" },
          { id: "c1855081-193e-4084-973b-c606c6c02bd1" },
          { id: "312da2ea-005d-4014-89e2-fe8b7e204bf0" },
          { id: "157bbf17-d050-4ceb-bf31-219d699dbc1e" },
          { id: "da92a591-86b1-48ce-999f-c1c447c0e3e1" },
        ]}
        renderItem={({ item }) => <Note key={item.id} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <Spacer size="16px" />}
        ListFooterComponent={() => <Spacer size="40px" />}
      />
    </View>
  );
}
