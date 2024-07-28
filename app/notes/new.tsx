import { Spacer, Title } from "@/components";
import * as S from "@/components/NewNote/NewNote.styles";
import { Button } from "@/components/ui";
import { Link } from "expo-router";
import { View, Text } from "react-native";

function NewNotePage() {
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
      <Title>New note</Title>
      <Spacer size="16px" />
    </S.Container>
  );
}

export default NewNotePage;
