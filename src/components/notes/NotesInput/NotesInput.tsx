import { ChangeEventHandler } from "react";

import { useAppDispatch } from "../../../hooks/use-app-dispatch";
import { useAppSelector } from "../../../hooks/use-app-selector";
import { selectNotesValue, setNotesValue } from "../../../redux/slices/notes/notes.slice";
import { Textarea } from "../../common/Textarea/Textarea";

export function NotesInput() {
  const dispatch = useAppDispatch();
  const notes = useAppSelector(selectNotesValue);

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => dispatch(setNotesValue(e.target.value));

  return <Textarea label="Notes" value={notes} onChange={onChange} className="mt-6" />;
}
