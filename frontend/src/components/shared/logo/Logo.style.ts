import styled from "styled-components";

import { BreakPoints } from "@styles/globalStyles.style";

const LogoContainer = styled.div`
  width: auto;
  height: auto;
  display: inline-flex;
  gap: var(--spacing-xs);
  justify-content: flex-start;
  align-items: center;

  p {
    display: none;
    color: var(--dark-gray);
    font-weight: bold;
    text-align: left;
    text-transform: capitalize;
    font-size: var(--font-size-2xl);
  }

  @media (min-width: ${BreakPoints.laptop}px) {
    p {
      display: block;
    }
  }
`;
const LogoCircle = styled.div`
  width: 60px;
  height: 60px;
  display: grid;
  place-content: center;
  border-radius: var(--radius-rounded);
  background-color: var(--primary);
  overflow: hidden;
  svg {
    width: 32px;
    height: 32px;
    color: var(--white);
  }
  @media (min-width: ${BreakPoints.tablet}px) {
    width: 70px;
    height: 70px;
    svg {
      width: 36px;
      height: 36px;
    }
  }
`;

export { LogoContainer, LogoCircle };
