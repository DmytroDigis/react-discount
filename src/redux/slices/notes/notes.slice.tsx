import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../store";

interface NotesState {
  value: string;
}

const initialState: NotesState = {
  value: "",
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setNotesValue: (state, { payload }: PayloadAction<string>) => {
      state.value = payload;
    },
  },
});

export const { setNotesValue } = notesSlice.actions;

export const selectNotesValue = (state: RootState) => state.notes.value;

export default notesSlice.reducer;
