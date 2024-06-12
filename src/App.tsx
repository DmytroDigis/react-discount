import { DiscountCodeGenerator } from "./components/discounts/DiscountCodeGenerator/DiscountCodeGenerator";
import { DiscountCodeInput } from "./components/discounts/DiscountCodeInput/DiscountCodeInput";
import { NotesInput } from "./components/notes/NotesInput/NotesInput";
import { OptionSelector } from "./components/options/OptionSelector/OptionSelector";

function App() {
  return (
    <div className="p-4">
      <OptionSelector />
      <DiscountCodeInput />
      <DiscountCodeGenerator />
      <NotesInput />
    </div>
  );
}

export default App;
