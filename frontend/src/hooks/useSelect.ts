import { useState } from "react";

const useSelect = <T>() => {
  const [isOptionsTriggered, setIsOptionsTriggered] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<T | null>(null);

  function onSelectOption(option: T): void {
    setSelectedOption(option);
  }

  function onTriggerSelectOptions(): void {
    setIsOptionsTriggered(!isOptionsTriggered);
  }

  function onResetSelection(): void {
    setSelectedOption(null);
  }

  function updateInitialOption(option: T): void {
    setSelectedOption(option);
  }

  return {
    selectedOption,
    isOptionsTriggered,
    onSelectOption,
    onTriggerSelectOptions,
    onResetSelection,
    updateInitialOption,
  };
};

export default useSelect;
