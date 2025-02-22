import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode | ReactNode[];
}

const Portal = ({ children }: PortalProps) => {
  const portalRoot = document.getElementById("root-portal");

  if (!portalRoot) return null;

  return createPortal(children, portalRoot);
};

export default Portal;
