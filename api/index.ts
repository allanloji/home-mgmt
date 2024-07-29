import { createQueryKeyStore } from "@lukemorales/query-key-factory";
import { Note, NoteCategory, NoteFilter } from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Crypto from "expo-crypto";

export const queries = createQueryKeyStore({
  notes: {
    list: (filters: NoteFilter) => ({
      queryKey: [{ filters }],
      queryFn: () => api.notes.list({ filters }),
    }),
    detail: (id: string) => ({
      queryKey: ["notes", id],
      queryFn: () => api.notes.get(id),
    }),
  },
});

export const api = {
  notes: {
    list: async ({ filters }: { filters: NoteFilter }) => {
      const res = await AsyncStorage.getItem("notes");
      const notes: Note[] = res !== null ? JSON.parse(res) : [];
      if (notes.length > 0) {
        if (filters.category === NoteCategory.Important) {
          return notes.filter((note) => note.isImportant);
        }

        if (filters.category === NoteCategory.Normal) {
          return notes.filter((note) => !note.isImportant);
        }
      }
      return notes;
    },
    get: async (id: string) => {
      const res = await AsyncStorage.getItem("notes");
      const notes: Note[] = res !== null ? JSON.parse(res) : [];
      return notes.find((note) => note.id === id) || null;
    },
    create: async (
      note: Partial<Pick<Note, "content" | "title" | "isImportant">>
    ) => {
      const res = await AsyncStorage.getItem("notes");
      const notes: Note[] = res !== null ? JSON.parse(res) : [];
      const id = Crypto.randomUUID();
      const date = new Date().toISOString();
      notes.push({ ...note, id, date } as Note);
      await AsyncStorage.setItem("notes", JSON.stringify(notes));
    },
    update: async (
      note: Partial<Pick<Note, "id" | "content" | "title" | "isImportant">>
    ) => {
      const res = await AsyncStorage.getItem("notes");
      const notes: Note[] = res !== null ? JSON.parse(res) : [];
      const { id } = note;

      const newNotes = notes.filter((note) => note.id !== id);
      newNotes.push({ ...note, id } as Note);
      await AsyncStorage.setItem("notes", JSON.stringify(newNotes));
    },
    delete: async (id: string) => {
      const res = await AsyncStorage.getItem("notes");
      const notes: Note[] = res !== null ? JSON.parse(res) : [];
      const newNotes = notes.filter((note) => note.id !== id);
      await AsyncStorage.setItem("notes", JSON.stringify(newNotes));
    },
  },
};
