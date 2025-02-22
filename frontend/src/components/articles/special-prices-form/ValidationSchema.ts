import {
  SpecialPriceForm,
  FieldErrorType,
  WrongInput,
  Product,
} from "@interfaces/index";

import { FormValidations } from "@utils/index";

export const validationSchema = async (
  formData: SpecialPriceForm,
  formRef: React.RefObject<HTMLFormElement | null>
): Promise<WrongInput<SpecialPriceForm>> => ({
  discount: await FormValidations.validateEmptyFields<SpecialPriceForm>(
    formData.discount,
    "discount",
    formRef
  ).catch((error: FieldErrorType) => error),
  finalPrice: await FormValidations.validateEmptyFields<SpecialPriceForm>(
    formData.finalPrice,
    "finalPrice",
    formRef
  ).catch((error: FieldErrorType) => error),
  users: {
    error: false,
    message: "",
  },
  product: await FormValidations.validateNullObjects<SpecialPriceForm, Product>(
    formData.product,
    "product",
    formRef
  ).catch((error: FieldErrorType) => error),
});
