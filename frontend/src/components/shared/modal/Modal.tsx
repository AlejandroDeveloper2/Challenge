import { JSX, ReactNode } from "react";

import { Title } from "@styles/globalStyles.style";
import { Dialog, Overlay } from "./Modal.style";
import { IoCloseCircle } from "react-icons/io5";

import { Portal } from "@components/index";

interface ModalProps {
  isModalVisible: boolean;
  title: string;
  height?: number;
  children: ReactNode | ReactNode[];
  toggleModal: () => void;
}

const Modal = ({
  title,
  isModalVisible,
  toggleModal,
  children,
  height,
}: ModalProps): JSX.Element => {
  return (
    <Portal>
      <Overlay visible={isModalVisible ? "Yes" : "Not"}>
        <Dialog height={height} visible={isModalVisible ? "Yes" : "Not"}>
          <IoCloseCircle
            style={{ width: 32, height: 32 }}
            onClick={toggleModal}
          />
          <Title>{title}</Title>
          {children}
        </Dialog>
      </Overlay>
    </Portal>
  );
};

export default Modal;
