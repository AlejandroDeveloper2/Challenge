import styled from "styled-components";

const CardBox = styled.div`
  width: 100%;
  height: 240px;
  box-shadow: 0 0 4px var(--black-opacity-30);
  border-radius: var(--radius-md);
  background-color: var(--white);
  display: flex;
  gap: var(--spacing-null);
  position: relative;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  cursor: pointer;
  transition: all 0.6s ease-in;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 4px var(--primary);
  }
`;

const CardImageBox = styled.figure`
  width: 100%;
  height: calc(240px - 104px);
  display: grid;
  place-content: center;
  background-color: none;
  svg {
    width: 60px;
    height: 60px;
    color: var(--default);
  }
`;
const CardDetailsBox = styled.section`
  width: 100%;
  height: auto;
  padding: var(--spacing-3xl) 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-sm);
  background-color: var(--default);
  border-top-left-radius: var(--radius-2xl);
  border-top-right-radius: var(--radius-2xl);
`;

const CardRow = styled.div`
  display: inline-flex;
  gap: var(--spacing-sm);
  justify-content: center;
  align-items: center;
  svg {
    width: 24px;
    height: 24px;
    color: var(--gray-dark);
  }
  h2,
  p,
  strong {
    width: 80%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: var(--font-size-xl);
    font-weight: 500;
    color: var(--gray-dark);
    text-align: left;
    text-transform: capitalize;
  }
`;

const CardCol = styled(CardRow)`
  gap: var(--spacing-xs);
  svg {
    width: 20px;
    height: 20px;
  }
  p,
  strong {
    width: auto;
    font-size: var(--font-size-normal);
  }
  strong {
    font-weight: bold;
  }
`;

export { CardBox, CardImageBox, CardDetailsBox, CardCol, CardRow };
