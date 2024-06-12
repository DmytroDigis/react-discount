import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../store";

interface OptionsState {
  selectedOptionValue: string | null;
}

const initialState: OptionsState = {
  selectedOptionValue: null,
};

export const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    setOption: (state, { payload }: PayloadAction<string>) => {
      state.selectedOptionValue = payload;
    },
  },
});

export const { setOption } = optionsSlice.actions;

export const selectOption = (state: RootState) => state.options.selectedOptionValue;

export default optionsSlice.reducer;
