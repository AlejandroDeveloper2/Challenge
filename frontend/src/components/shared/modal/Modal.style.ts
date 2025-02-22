import { BreakPoints } from "@styles/globalStyles.style";
import styled from "styled-components";

interface Style {
  visible: "Yes" | "Not";
  height?: number;
}

const Overlay = styled.div<Style>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: ${({ visible }: Style) => (visible === "Yes" ? 50 : -50)};
  background-color: var(--black-opacity-30);
  transition: opacity ease-in-out 0.6s;
  top: 0;
  left: 0;
  display: block;
  opacity: ${({ visible }: Style) => (visible === "Yes" ? 1 : 0)};
`;

const Dialog = styled.dialog<Style>`
  z-index: 60;
  border: none;
  width: 100%;
  height: ${({ height }: Style) => (height ? height + "px" : "auto")};
  max-height: 500px;
  background-color: var(--white);
  border-top-right-radius: var(--radius-2xl);
  border-top-left-radius: var(--radius-2xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4xl);
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  bottom: 0;
  padding: var(--spacing-3xl) var(--spacing-xl);
  animation-duration: 0.8s;
  animation-timing-function: ease-in;
  animation-name: ${({ visible }: Style) =>
    visible === "Yes" ? "modal-move-up" : "modal-move-down"};
  overflow-y: auto;

  @media (min-width: ${BreakPoints.tablet}px) {
    width: 400px;
    animation-name: ${({ visible }: Style) =>
      visible === "Yes" ? "modal-scale-up" : "modal-scale-down"};
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: var(--radius-2xl);
  }
  @media (min-width: ${BreakPoints.laptop}px) {
    width: 750px;
  }

  @keyframes modal-scale-up {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes modal-scale-down {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }

  @keyframes modal-move-up {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes modal-move-down {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100%);
    }
  }
`;

export { Overlay, Dialog };
