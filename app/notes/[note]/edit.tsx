import { Link, router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

import { Spacer, Title } from "@/components";
import * as S from "@/components/NewNote/NewNote.styles";
import { Button, TextInput, Switch } from "@/components/ui";
import { useMutation, useQuery } from "@tanstack/react-query";
import { api, queries } from "@/api";

function EditNotePage() {
  const { note } = useLocalSearchParams<{ note: string }>();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isImportant, setIsImportant] = useState(false);

  const { data: noteData, isLoading: isLoadingNote } = useQuery({
    ...queries.notes.detail(note || ""),
    enabled: !!note,
  });
  const { mutate: editNote } = useMutation({
    mutationFn: api.notes.update,
    onSuccess: () => {
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
      <Button onPress={onSubmit}>
        <Text style={{ color: "#fff", lineHeight: 24, fontSize: 16 }}>
          Save
        </Text>
      </Button>
    </S.Container>
  );
}

export default EditNotePage;
