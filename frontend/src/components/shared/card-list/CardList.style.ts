import styled from "styled-components";

import { BreakPoints } from "@styles/globalStyles.style";

const List = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 100%);
  gap: var(--spacing-md);

  li {
    list-style: none;
    display: block;
  }

  @media (min-width: ${BreakPoints.tablet}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${BreakPoints.laptop}px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export { List };
