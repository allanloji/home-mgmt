import { Link, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

import { Spacer } from "@/components";
import * as S from "@/components/NoteDetail/NoteDetail.styles";

import { Button } from "@/components/ui";
import { useQuery } from "@tanstack/react-query";
import { queries } from "@/api";

function NotePage() {
  const { note } = useLocalSearchParams<{ note: string }>();
  const { data: noteData, isLoading: isLoadingNote } = useQuery({
    ...queries.notes.detail(note || ""),
    enabled: !!note,
  });

  return (
    <S.Container id={note || ""}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href="/" asChild>
          <Button>
            <Text style={{ color: "#fff", lineHeight: 24, fontSize: 20 }}>
              {"<"}
            </Text>
          </Button>
        </Link>
        <View style={{ flexDirection: "row" }}>
          <Link
            href={{
              pathname: "/notes/[id]/edit",
              params: { id: noteData?.id },
            }}
          >
            <Text style={{ lineHeight: 24, fontSize: 20 }}>Edit</Text>
          </Link>
          <Spacer horizontal size="16px" />
          <Link href="/">
            <Text style={{ lineHeight: 24, fontSize: 20 }}>Delete</Text>
          </Link>
        </View>
      </View>
      <S.Title>{noteData?.title}</S.Title>
      <Spacer size="16px" />
      <S.Content>{noteData?.content}</S.Content>
    </S.Container>
  );
}

export default NotePage;
