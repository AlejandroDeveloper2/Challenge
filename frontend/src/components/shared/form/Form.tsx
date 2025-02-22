import { FormEvent, JSX, ReactNode, RefObject } from "react";

import {
  ButtonWithLabel,
  InputText,
  MultiSelectInput,
  SelectInput,
} from "@components/index";

import { Controls, FieldSet, FormBox } from "./Form.style";

interface FormProps {
  formRef: RefObject<HTMLFormElement | null>;
  children: ReactNode | ReactNode[];
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

interface Props {
  children: ReactNode | ReactNode[];
}

const Form = ({ formRef, children, onSubmit }: FormProps): JSX.Element => {
  return (
    <FormBox ref={formRef} onSubmit={onSubmit}>
      {children}
    </FormBox>
  );
};

const Fields = ({ children }: Props): JSX.Element => {
  return <FieldSet>{children}</FieldSet>;
};

const FormControls = ({ children }: Props): JSX.Element => {
  return <Controls>{children}</Controls>;
};

Form.Fields = Fields;
Form.Controls = FormControls;

Form.Button = ButtonWithLabel;
Form.Select = SelectInput;
Form.InputText = InputText;
Form.MultiSelect = MultiSelectInput;

export default Form;
