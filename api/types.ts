export enum NoteCategory {
  Important = "important",
  Normal = "normal",
}

export type NoteFilter = {
  category?: NoteCategory;
};

export type Note = {
  id: string;
  title: string;
  description: string;
  isImportant: boolean;
  date: string;
};

export type NoteDTO = {
  title: string;
  description: string;
  isImportant: boolean;
};
