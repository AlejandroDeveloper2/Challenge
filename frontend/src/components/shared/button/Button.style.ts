import styled from "styled-components";

import { ButtonVariantType } from "@interfaces/index";
import { BreakPoints } from "@styles/globalStyles.style";

interface Style {
  variant: ButtonVariantType;
  width: number | "auto";
  unit: "px" | "%";
}

const Button = styled.button<Style>`
  width: ${({ width, unit }: Style) =>
    width === "auto" ? "auto" : width + unit};
  height: auto;
  background-color: ${({ variant }: Style) => `var(--${variant})`};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-xs);
  border-radius: var(--radius-pilled);
  cursor: pointer;
  transition: opacity 0.5s ease;
  overflow: hidden;
  border: none;
  padding: var(--spacing-sm) var(--spacing-xl);
  &:hover {
    opacity: 0.7;
  }
  svg,
  span {
    color: ${({ variant }: Style) =>
      variant === "success" || variant === "default"
        ? "var(--gray-dark)"
        : "var(--white)"};
  }

  svg {
    width: 24px;
    height: 24px;
  }
  span {
    font-size: var(--font-size-normal);
    font-weight: bold;
    text-align: center;
    text-transform: capitalize;
  }

  @media (min-width: ${BreakPoints.tablet}px) {
    padding: var(--spacing-md) var(--spacing-3xl);
    span {
      font-size: var(--font-size-lg);
    }
  }
`;

export { Button };
