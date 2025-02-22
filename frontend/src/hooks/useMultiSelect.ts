import { useState } from "react";

const useMultiSelect = <T>() => {
  const [isOptionsTriggered, setIsOptionsTriggered] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<T[]>([]);

  function onSelectOption(newOption: T, idKey: keyof T): void {
    const foundOption = selectedOptions.find(
      (option) => Object(option)[idKey] === Object(newOption)[idKey]
    );

    if (foundOption) return;

    setSelectedOptions([...selectedOptions, newOption]);
  }

  function onTriggerSelectOptions(): void {
    setIsOptionsTriggered(!isOptionsTriggered);
  }

  function onResetSelections(): void {
    setSelectedOptions([]);
  }

  function onRemoveSelection(optionId: string, idKey: keyof T): void {
    const filteredOptions = selectedOptions.filter(
      (option) => Object(option)[idKey] !== optionId
    );
    setSelectedOptions(filteredOptions);
  }
  function updateInitialOptions(options: T[]): void {
    setSelectedOptions(options);
  }

  return {
    selectedOptions,
    isOptionsTriggered,
    onSelectOption,
    onTriggerSelectOptions,
    onResetSelections,
    onRemoveSelection,
    updateInitialOptions,
  };
};

export default useMultiSelect;
