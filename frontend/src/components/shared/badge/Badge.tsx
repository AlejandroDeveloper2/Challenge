import { JSX } from "react";

import { BadgeVariantType } from "@interfaces/index";

import { BadgeBox } from "./Badge.style";

interface BadgeProps {
  label: string;
  value: string | null;
  variant: BadgeVariantType;
}

const Badge = ({ label, value, variant }: BadgeProps): JSX.Element => {
  return (
    <BadgeBox
      style={{
        backgroundColor: `var(--${variant})`,
        color:
          variant === "success" || variant === "default"
            ? "var(--gray-dark)"
            : "var(--white)",
      }}
    >
      <label>{label}</label>
      <span>{value}</span>
    </BadgeBox>
  );
};

export default Badge;
