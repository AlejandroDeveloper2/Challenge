import styled from "styled-components";

const BadgeBox = styled.div`
  width: auto;
  height: auto;
  border-radius: var(--radius-pilled);
  padding: var(--spacing-2xs) var(--spacing-xs);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-2xs);
  position: absolute;
  top: 10px;
  right: 10px;

  label,
  span {
    font-size: var(--font-size-xs);
    font-weight: 400;
    text-align: center;
  }

  span {
    font-weight: bold;
  }
`;

export { BadgeBox };
