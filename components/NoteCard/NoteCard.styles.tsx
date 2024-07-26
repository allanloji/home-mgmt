import styled from "styled-components/native";
import { getBackground } from "./utils";

export const Container = styled.View<{ id: string }>`
  background-color: ${({ id }) => getBackground(id)};
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 16px;
  height: 250px;
  width: 200px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #000;
`;
