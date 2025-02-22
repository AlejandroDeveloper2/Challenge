import { JSX } from "react";
import { IconType } from "react-icons";

import { IoClose } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

import { InputBody, InputContainer } from "@styles/globalStyles.style";
import { SelectBox, SelectedOptionsList } from "./MultiSelectInput.style";
import {
  Option,
  Options,
  SelectTools,
} from "../select-input/SelectInput.style";

interface MultiSelectInputProps<T> {
  id: string;
  Icon: IconType;
  style: { unit: "px" | "%"; width?: number };
  placeholder: string;
  options: T[];
  selectedOptions: T[];
  idKey: keyof T;
  showKey: keyof T;
  isOptionsTriggered: boolean;
  errorMessage?: string;
  onSelectOption: (option: T, idKey: keyof T) => void;
  onTriggerSelectOptions: () => void;
  onResetSelections: () => void;
  onRemoveSelection: (optionId: string, idKey: keyof T) => void;
}

function MultiSelectInput<T>({
  id,
  Icon,
  style,
  placeholder,
  options,
  selectedOptions,
  showKey,
  idKey,
  isOptionsTriggered,
  errorMessage,
  onSelectOption,
  onTriggerSelectOptions,
  onResetSelections,
  onRemoveSelection,
}: MultiSelectInputProps<T>): JSX.Element {
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
          {selectedOptions.length === 0 ? (
            <span>{placeholder}</span>
          ) : (
            <SelectedOptionsList>
              {selectedOptions.map((option, i) => (
                <li key={i}>
                  <Option type="button">
                    <span>{Object(option)[showKey]}</span>
                    <IoClose
                      id="remove-selection-icon"
                      onClick={() =>
                        onRemoveSelection(
                          Object(option)[idKey] as string,
                          idKey
                        )
                      }
                    />
                  </Option>
                </li>
              ))}
            </SelectedOptionsList>
          )}
        </InputBody>
        <SelectTools>
          {isOptionsTriggered && (
            <IoClose id="reset-selection-icon" onClick={onResetSelections} />
          )}
          <IoIosArrowForward id="select-arrow" />
        </SelectTools>
        <Options triggered={isOptionsTriggered ? "Yes" : "Not"}>
          {options.map((option, index) => (
            <li key={index}>
              <Option
                onClick={() => onSelectOption(option, idKey)}
                type="button"
              >
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

export default MultiSelectInput;
