import { Link, router, useLocalSearchParams } from "expo-router";
import { View, Text, Alert, Pressable } from "react-native";
import { format } from "@formkit/tempo";
import { Spacer } from "@/components";
import * as S from "@/components/NoteDetail/NoteDetail.styles";

import { Button } from "@/components/ui";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api, queries } from "@/api";

function NotePage() {
  const queryClient = useQueryClient();

  const { note } = useLocalSearchParams<{ note: string }>();
  const { data: noteData, isLoading: isLoadingNoteData } = useQuery({
    ...queries.notes.detail(note || ""),
    enabled: !!note,
  });
  const { mutate: deleteNote } = useMutation({
    mutationFn: api.notes.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queries.notes._def,
      });
      router.replace("/");
    },
  });

  const onDelete = () => {
    Alert.alert(
      "Confirm deletion of note",
      "We will delete the selected note",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            if (noteData?.id) {
              deleteNote(noteData.id);
            }
          },
        },
      ]
    );
  };

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
          <Pressable onPress={onDelete}>
            <Text style={{ lineHeight: 24, fontSize: 20 }}>Delete</Text>
          </Pressable>
        </View>
      </View>
      {isLoadingNoteData || !noteData ? null : (
        <>
          <S.Title>{noteData.title}</S.Title>
          <S.Subtitle>{format(noteData.date, "long")}</S.Subtitle>
          <Spacer size="16px" />
          <S.Content>{noteData.content}</S.Content>
        </>
      )}
    </S.Container>
  );
}

export default NotePage;
