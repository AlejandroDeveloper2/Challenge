import styled from "styled-components";

import { BreakPoints } from "@styles/globalStyles.style";

const FormBox = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: var(--spacing-xl);
`;

const FieldSet = styled.fieldset`
  width: 100%;
  height: auto;
  display: grid;
  border: none;
  grid-template-columns: repeat(1, 100%);
  gap: var(--spacing-md);

  @media (min-width: ${BreakPoints.tablet}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Controls = styled.menu`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(1, 100%);
  gap: var(--spacing-sm);

  @media (min-width: ${BreakPoints.tablet}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export { FormBox, FieldSet, Controls };
