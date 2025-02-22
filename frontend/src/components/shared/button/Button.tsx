import { JSX, ReactNode } from "react";
import { IconType } from "react-icons";

import { ButtonVariantType } from "@interfaces/index";
import { Button } from "./Button.style";

interface ButtonBaseProps {
  id: string;
  title: string;
  type: "submit" | "button";
  variant: ButtonVariantType;
  style: { unit: "px" | "%"; width: number | "auto" };
  children: ReactNode[] | ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
}

interface ButtonWithLabelProps extends Omit<ButtonBaseProps, "children"> {
  label: string;
  Icon: IconType;
}

interface IconOnlyButtonProps extends Omit<ButtonBaseProps, "children"> {
  Icon: IconType;
}

const BaseButton = ({
  children,
  loading,
  style,
  ...props
}: ButtonBaseProps): JSX.Element => {
  return (
    <Button unit={style.unit} width={style.width} {...props}>
      {loading ? <span>cargando...</span> : children}
    </Button>
  );
};

const ButtonWithLabel = ({
  label,
  Icon,
  ...props
}: ButtonWithLabelProps): JSX.Element => {
  return (
    <BaseButton {...props}>
      <Icon />
      <span>{label}</span>
    </BaseButton>
  );
};

const IconOnlyButton = ({
  Icon,
  ...props
}: IconOnlyButtonProps): JSX.Element => {
  return (
    <BaseButton {...props}>
      <Icon />
    </BaseButton>
  );
};

export { ButtonWithLabel, IconOnlyButton };
