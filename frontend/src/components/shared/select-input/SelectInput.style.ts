import { BreakPoints } from "@styles/globalStyles.style";
import styled from "styled-components";

interface Style {
  width: number | "auto";
  unit: "px" | "%";
  triggered: "Yes" | "Not";
}

interface OptionsStyle {
  triggered: "Yes" | "Not";
}

const SelectBox = styled.div<Style>`
  width: ${({ width, unit }: Style) =>
    width === "auto" ? "auto" : width + unit};
  height: auto;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-3xl);
  box-shadow: 0 0 4px var(--black-opacity-30);
  background-color: var(--white);
  border-top-right-radius: var(--radius-2xl);
  border-top-left-radius: var(--radius-2xl);
  border-bottom-left-radius: ${({ triggered }: Style) =>
    triggered === "Yes" ? "0px" : "var(--radius-2xl)"};
  border-bottom-right-radius: ${({ triggered }: Style) =>
    triggered === "Yes" ? "0px" : "var(--radius-2xl)"};
  cursor: pointer;
  svg[id="input-icon"],
  svg[id="select-arrow"] {
    width: 24px;
    height: 24px;
    color: var(--dark-gray);
    transition: transform 0.6s ease;
  }
  position: relative;
  &:hover {
    svg[id="input-icon"] {
      color: var(--primary);
      transform: rotate(-15deg);
    }
    svg[id="select-arrow"] {
      transform: rotate(90deg);
    }
  }
`;

const SelectTools = styled.div`
  display: inline-flex;
  gap: var(--spacing-xs);
  justify-content: center;
  align-items: center;
  svg[id="reset-selection-icon"] {
    width: 24px;
    height: 24px;
    color: var(--gray);
  }
`;

/** select styles */
const Select = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  p {
    color: var(--gray-dark);
    font-size: var(--font-size-sm);
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  @media (min-width: ${BreakPoints.tablet}px) {
    p {
      font-size: var(--font-size-normal);
    }
  }
`;

const Options = styled.ul<OptionsStyle>`
  width: 100%;
  height: auto;
  max-height: 250px;
  background-color: var(--white);
  box-shadow: 0 0 5px var(--black-opacity-30);
  border-bottom-left-radius: var(--radius-2xl);
  border-bottom-right-radius: var(--radius-2xl);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: var(--spacing-null);
  z-index: 2;
  overflow-y: auto;
  overflow-x: hidden;
  opacity: ${({ triggered }: OptionsStyle) => (triggered === "Yes" ? 1 : 0)};
  transition: all 0.5s ease-out;
  transform-origin: top;
  transform: ${({ triggered }: OptionsStyle) =>
    triggered === "Yes" ? "scaleY(1)" : "scaleY(0);"};
  li {
    width: 100%;
    list-style: none;
    display: block;
  }
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
`;

const Option = styled.button`
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-xl);
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-sm);
  background-color: var(--white);
  transition: background-color ease 0.6s;
  span {
    font-size: var(--font-size-normal);
    font-weight: 500;
    text-align: center;
    text-transform: capitalize;
    color: var(--gray-dark);
  }
  cursor: pointer;
  &:hover {
    background-color: var(--gray-dark);
    span {
      color: var(--white);
    }
  }
`;

export { SelectBox, SelectTools, Select, Options, Option };
