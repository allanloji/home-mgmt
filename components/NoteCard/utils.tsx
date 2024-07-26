const backgrounds = [
  "#d4e7c5",
  "#e6d3a3",
  "#f0c3c3",
  "#c3c3f0",
  "#c3f0f0",
  "#f0c3f0",
  "#f0d3c3",
  "#d3f0c3",
  "#d3c3f0",
  "#c3f0c3",
  "#f0d3d3",
  "#6e9ebf",
];

/**
 * This function takes a UUID and returns a background object
 */
export const getBackground = (id: string) => {
  const sanitizedUuid = id.replace(/-/g, "");

  const uuidNumber = parseInt(sanitizedUuid.substring(0, 8), 16);

  const index = (uuidNumber * 10) % backgrounds.length;

  return backgrounds[index];
};
