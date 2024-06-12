import { combineReducers, configureStore } from "@reduxjs/toolkit";

import notesReducer from "../slices/notes/notes.slice";
import optionsReducer from "../slices/options/options.slice";

const rootReducer = combineReducers({
  options: optionsReducer,
  notes: notesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
