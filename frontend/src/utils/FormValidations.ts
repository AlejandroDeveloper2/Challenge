import { FieldErrorType, KeyList } from "@interfaces/index";

class FormValidations {
  private static markWrongInput = <T>(
    formRef: React.RefObject<HTMLFormElement | null>,
    inputKey: KeyList<T>,
    error: boolean
  ): void => {
    const $fieldset = formRef.current?.querySelector("fieldset");
    const $input = $fieldset?.querySelector(`#${inputKey as string}`);
    if (error) $input?.setAttribute("style", "border: 1px solid var(--error)");
    else $input?.setAttribute("style", "border: none");
  };

  public static validateNullObjects<T, S>(
    field: S | null,
    key: KeyList<T>,
    formRef: React.RefObject<HTMLFormElement | null>
  ): Promise<FieldErrorType> {
    let error: FieldErrorType;
    if (field === null) {
      error = {
        message: "El campo es obligatorio!",
        error: true,
      };
      this.markWrongInput<T>(formRef, key, true);
      return Promise.reject(error);
    } else {
      error = {
        message: "",
        error: false,
      };
      this.markWrongInput<T>(formRef, key, false);
      return Promise.resolve(error);
    }
  }

  public static validateEmptyFields<T>(
    field: string | number | null,
    key: KeyList<T>,
    formRef: React.RefObject<HTMLFormElement | null>
  ): Promise<FieldErrorType> {
    let error: FieldErrorType;
    if (field === "" || field === 0) {
      error = {
        message: "El campo es obligatorio!",
        error: true,
      };
      this.markWrongInput<T>(formRef, key, true);
      return Promise.reject(error);
    } else {
      error = {
        message: "",
        error: false,
      };
      this.markWrongInput<T>(formRef, key, false);
      return Promise.resolve(error);
    }
  }
}

export default FormValidations;
