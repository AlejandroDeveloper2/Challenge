import { useState } from "react";

const useModal = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const toggleModal = (): void => {
    setIsModalVisible(!isModalVisible);
  };

  return {
    isModalVisible,
    toggleModal,
  };
};
export default useModal;
