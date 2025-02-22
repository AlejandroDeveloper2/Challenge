import styled, { css } from "styled-components";

const BreakPoints = {
  smartphone: 400,
  tablet: 768,
  laptop: 1440,
  desktop: 1600,
};

const displayFlex = css`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const MainContainer = styled.main`
  width: 100vw;
  ${displayFlex};
  overflow: hidden;
  gap: var(--spacing-xl);
  padding-top: var(--spacing-5xl);

  @media (min-width: ${BreakPoints.tablet}px) {
    gap: var(--spacing-3xl);
  }

  @media (min-width: ${BreakPoints.laptop}px) {
    gap: var(--spacing-4xl);
  }
`;

const PageContainer = styled.section`
  ${displayFlex};
  max-width: var(--sm-width);
  gap: var(--spacing-md);
  width: 100%;
  padding: var(--spacing-2xl) 0;

  @media (min-width: ${BreakPoints.tablet}px) {
    gap: var(--spacing-4xl);
    max-width: var(--md-width);
    padding: var(--spacing-3xl) 0;
  }

  @media (min-width: ${BreakPoints.laptop}px) {
    max-width: var(--lg-width);
  }
`;

const Title = styled.h1`
  font-size: var(--font-size-2xl);
  color: var(--gray-dark);
  font-weight: 400;
  text-align: center;
  text-transform: capitalize;
`;

const InputBody = styled.div`
  display: inline-flex;
  gap: var(--spacing-xs);
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: var(--spacing-sm);

  p {
    font-size: var(--font-size-xs);
    color: var(--error);
    text-align: left;
    font-weight: 500;
  }
`;

export {
  BreakPoints,
  MainContainer,
  PageContainer,
  Title,
  InputBody,
  InputContainer,
};
