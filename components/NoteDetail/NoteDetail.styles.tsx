import styled from "styled-components/native";
import { getBackground } from "../NoteCard/utils";

export const Container = styled.ScrollView<{ id: string }>`
  padding: 16px;
  flex: 1;
  padding-top: 40px;
  background-color: ${({ id }) => getBackground(id)};
`;

export const Title = styled.Text`
  font-size: 40px;
`;

export const Content = styled.Text`
  font-size: 24px;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
`;
