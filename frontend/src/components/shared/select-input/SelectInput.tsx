import { JSX } from "react";
import { IconType } from "react-icons";
import { IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";

import {
  SelectBox,
  Options,
  Select,
  Option,
  SelectTools,
} from "./SelectInput.style";
import { InputBody, InputContainer } from "@styles/globalStyles.style";

interface SelectInputProps<T> {
  id: string;
  Icon: IconType;
  style: { unit: "px" | "%"; width: number | "auto" };
  placeholder: string;
  options: T[];
  selectedOption: T | null;
  showKey: keyof T;
  isOptionsTriggered: boolean;
  errorMessage?: string;
  onSelectOption: (option: T) => void;
  onTriggerSelectOptions: () => void;
  onResetSelection: () => void;
}

function InputSelect<T>({
  id,
  Icon,
  style,
  placeholder,
  options,
  selectedOption,
  showKey,
  isOptionsTriggered,
  errorMessage,
  onSelectOption,
  onTriggerSelectOptions,
  onResetSelection,
}: SelectInputProps<T>): JSX.Element {
  const parsedSelectedOption = Object(selectedOption);

  return (
    <InputContainer>
      <SelectBox
        id={id}
        {...style}
        triggered={isOptionsTriggered ? "Yes" : "Not"}
        onClick={onTriggerSelectOptions}
      >
        <InputBody>
          <Icon id="input-icon" />
          <Select>
            <p>
              {selectedOption ? parsedSelectedOption[showKey] : placeholder}
            </p>
          </Select>
        </InputBody>
        <SelectTools>
          {isOptionsTriggered && (
            <IoClose id="reset-selection-icon" onClick={onResetSelection} />
          )}
          <IoIosArrowForward id="select-arrow" />
        </SelectTools>
        <Options triggered={isOptionsTriggered ? "Yes" : "Not"}>
          {options.map((option, index) => (
            <li key={index}>
              <Option onClick={() => onSelectOption(option)} type="button">
                <span>{Object(option)[showKey]}</span>
              </Option>
            </li>
          ))}
        </Options>
      </SelectBox>
      {errorMessage && <p>{errorMessage}</p>}
    </InputContainer>
  );
}

export default InputSelect;
