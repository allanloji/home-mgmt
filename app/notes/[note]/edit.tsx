import { Link, router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

import * as S from "@/components/EditNote/EditNote.styles";
import { Button, TextInput, Switch, Spacer, Title } from "@/components/ui";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api, queries } from "@/api";

function EditNotePage() {
  const queryClient = useQueryClient();
  const { note } = useLocalSearchParams<{ note: string }>();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isImportant, setIsImportant] = useState(false);

  const { data: noteData } = useQuery({
    ...queries.notes.detail(note || ""),
    enabled: !!note,
  });
  const { mutate: editNote, isPending } = useMutation({
    mutationFn: api.notes.update,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queries.notes._def,
      });
      router.back();
    },
  });

  useEffect(() => {
    if (noteData) {
      setTitle(noteData.title);
      setContent(noteData.content);
      setIsImportant(noteData.isImportant);
    }
  }, [noteData]);

  const onSubmit = () => {
    const note = {
      id: noteData?.id,
      title,
      content,
      isImportant,
    };
    editNote(note);
  };

  return (
    <S.Container>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Link
          href={{
            pathname: "/notes/[id]",
            params: { id: noteData?.id },
          }}
          asChild
        >
          <Button>
            <Text style={{ color: "#fff", lineHeight: 24, fontSize: 20 }}>
              {"<"}
            </Text>
          </Button>
        </Link>
      </View>
      <Title>Edit note</Title>
      <Spacer size="16px" />
      <TextInput
        placeholder="Title"
        onChangeText={(text) => setTitle(text)}
        value={title}
      />
      <Spacer size="16px" />
      <TextInput
        placeholder="Content"
        onChangeText={(text) => setContent(text)}
        value={content}
        multiline
      />
      <Spacer size="16px" />
      <Switch
        value={isImportant}
        onValueChange={(value) => setIsImportant(value)}
        label="Is important?"
      />
      <Spacer size="16px" />
      <Button onPress={onSubmit} disabled={isPending}>
        <Text style={{ color: "#fff", lineHeight: 24, fontSize: 16 }}>
          Save
        </Text>
      </Button>
    </S.Container>
  );
}

export default EditNotePage;
