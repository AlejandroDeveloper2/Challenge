import { useState, useRef } from "react";

import { FieldErrorType, KeyList, WrongInput } from "@interfaces/index";

const useForm = <T>(
  initialValues: T,
  initialErrors: WrongInput<T>,
  validationSchema: (
    formData: T,
    formRef: React.RefObject<HTMLFormElement | null>
  ) => Promise<WrongInput<T>>,
  action: () => void
) => {
  const [data, setData] = useState<T>(initialValues);
  const [errors, setErrors] = useState<WrongInput<T>>(initialErrors);
  const formRef = useRef<HTMLFormElement | null>(null);

  const updateErrors = (updatedErrors: WrongInput<T>): void => {
    setErrors(updatedErrors);
  };

  const updateInitialValues = (updatedInitialValues: T): void => {
    setData(updatedInitialValues);
  };

  const updateFormData = <T>(fieldValue: unknown, key: KeyList<T>): void => {
    setData({ ...data, [key]: fieldValue });
  };

  const clearForm = (): void => {
    setData(initialValues);
    setErrors(initialErrors);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const clearInputText = (key: keyof T, type: "number" | "text"): void => {
    setData({ ...data, [key]: type === "text" ? "" : 0 });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const wrongInput = await validationSchema(data, formRef);
    updateErrors(wrongInput);

    if (
      Object.values<FieldErrorType>(wrongInput).every((error) => !error.error)
    ) {
      action();
      return;
    }
  };

  return {
    formRef,
    errors,
    data,
    updateInitialValues,
    updateFormData,
    handleChange,
    clearInputText,
    handleSubmit,
    clearForm,
  };
};

export default useForm;
