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
  content: string;
  isImportant: boolean;
  date: string;
};
