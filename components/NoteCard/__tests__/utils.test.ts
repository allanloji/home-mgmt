import { expect, test } from "vitest";
import { getBackground } from "../utils";

test("gets same background color based on the id", () => {
  const color = getBackground("01c4215b-84af-4f71-9a54-c3e72e49160a");
  const expectedColor = "#f0d3c3";
  expect(color).toEqual(expectedColor);
});
