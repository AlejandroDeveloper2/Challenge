import styled from "styled-components";

interface Style {
  width?: number;
  unit: "px" | "%";
  triggered: "Yes" | "Not";
}

const SelectBox = styled.div<Style>`
  width: ${({ width, unit }: Style) => (width ? width + unit : "auto")};
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

const SelectedOptionsList = styled.ul`
  width: 100%;
  max-width: 100%;
  display: inline-flex;
  gap: var(--spacing-sm);
  justify-content: flex-start;
  align-items: center;
  overflow-x: auto;
  li {
    display: block;
    list-style: none;
  }
`;

export { SelectBox, SelectedOptionsList };
