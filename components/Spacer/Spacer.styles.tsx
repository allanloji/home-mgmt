import styled from "styled-components/native";

export const Spacer = styled.View<{ horizontal?: boolean; size: string }>`
  width: ${({ horizontal = false, size }) => (horizontal ? size : "1px")};
  height: ${({ horizontal = false, size }) => (horizontal ? "1px" : size)};
`;
