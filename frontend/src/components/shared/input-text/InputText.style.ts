import styled from "styled-components";

interface Style {
  width?: number;
  unit: "px" | "%";
}

const InputBox = styled.div<Style>`
  width: ${({ width, unit }: Style) => (width ? width + unit : "auto")};
  height: auto;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-3xl);
  box-shadow: 0 0 4px var(--black-opacity-30);
  background-color: var(--white);
  border-radius: var(--radius-pilled);
  cursor: pointer;
  svg[id="input-icon"],
  svg[id="icon-close"] {
    width: 24px;
    height: 24px;
    color: var(--dark-gray);
    transition: transform 0.6s ease;
  }
  input {
    width: 100%;
    border: none;
    outline: none;
    &::placeholder {
      color: var(--gray);
      font-size: var(--font-size-normal);
    }
  }
  position: relative;
  &:hover {
    svg[id="input-icon"] {
      color: var(--primary);
      transform: rotate(-15deg);
    }
    svg[id="icon-close"] {
      transform: rotate(360deg);
    }
  }
`;
export { InputBox };
