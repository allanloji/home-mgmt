import { Link } from "expo-router";
import { useState } from "react";
import { View, Text } from "react-native";

import { Spacer, Title } from "@/components";
import * as S from "@/components/NewNote/NewNote.styles";
import { Button, TextInput, Switch } from "@/components/ui";

function EditNotePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isImportant, setIsImportant] = useState(false);

  return (
    <S.Container>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Link href="/" asChild>
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
      <Button>
        <Text style={{ color: "#fff", lineHeight: 24, fontSize: 16 }}>
          Create
        </Text>
      </Button>
    </S.Container>
  );
}

export default EditNotePage;
