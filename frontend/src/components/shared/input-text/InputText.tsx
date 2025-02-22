import { JSX, ChangeEvent } from "react";
import { IconType } from "react-icons";
import { IoClose } from "react-icons/io5";

import { InputBody, InputContainer } from "@styles/globalStyles.style";
import { InputBox } from "./InputText.style";

interface InputProps {
  id: string;
  name: string;
  type: "text" | "number";
  placeholder: string;
  Icon: IconType;
  value: string | number;
  disabled?: boolean;
  style: { unit: "px" | "%"; width?: number };
  errorMessage: string | null;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClearInput: () => void;
}

const InputText = ({
  Icon,
  onClearInput,
  style,
  errorMessage,
  id,
  ...props
}: InputProps): JSX.Element => {
  return (
    <InputContainer>
      <InputBox id={id} {...style}>
        <InputBody>
          <Icon id="input-icon" />
          <input {...props} />
          {props.value !== "" && (
            <IoClose id="icon-close" onClick={onClearInput} />
          )}
        </InputBody>
      </InputBox>
      {errorMessage && <p>{errorMessage}</p>}
    </InputContainer>
  );
};

export default InputText;
