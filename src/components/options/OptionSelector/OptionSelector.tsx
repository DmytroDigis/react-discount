import { useAppDispatch } from "../../../hooks/use-app-dispatch";
import { useAppSelector } from "../../../hooks/use-app-selector";
import { selectOption, setOption } from "../../../redux/slices/options/options.slice";
import { RadioGroup } from "../../common/RadioGroup/RadioGroup";

const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

export function OptionSelector() {
  const optionValue = useAppSelector(selectOption);
  const dispatch = useAppDispatch();

  const onChange = (value: string) => dispatch(setOption(value));

  return (
    <div>
      <RadioGroup options={options} value={optionValue} onChange={onChange} />
    </div>
  );
}
