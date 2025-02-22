import styled from "styled-components";

import { BreakPoints } from "@styles/globalStyles.style";

const Nav = styled.nav`
  min-width: var(--sm-width);
  height: auto;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 4px var(--black-opacity-30);
  border-radius: var(--radius-pilled);
  background-color: var(--white);
  padding: var(--spacing-md) var(--spacing-3xl);
  position: relative;

  menu {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-sm);

    div[id="select-user"] {
      display: none;
    }
  }

  @media (min-width: ${BreakPoints.tablet}px) {
    min-width: var(--md-width);
    menu {
      div[id="select-user"] {
        display: flex;
      }
    }
    button[id="btn-filter-by-user"] {
      display: none;
    }
  }

  @media (min-width: ${BreakPoints.laptop}px) {
    min-width: var(--lg-width);
  }
`;

export { Nav };
