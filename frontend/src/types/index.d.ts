type CurrencyType = "USD" | "COPS";
type ButtonVariantType = "error" | "default" | "primary" | "success";
type BadgeVariantType = ButtonVariantType | "gray-dark";
type FieldErrorType = {
  message: string;
  error: boolean;
};
type KeyList<T> = keyof T;
type WrongInput<T> = Record<KeyList<T>, FieldErrorType>;

interface ServerResponse<T> {
  data: T;
  message: string;
}

interface User {
  name: string;
  lastName: string;
  email: string;
  userId: string;
}

interface Product {
  name: string;
  price: number;
  currencyPrice: CurrencyType;
  stock: number;
  category: string;
  description?: string;
  productId: string;
}

interface SpecialPrice {
  product: Product;
  users: User[];
  discount: number;
  finalPrice: number;
  specialPriceId: string;
}

interface SpecialPriceForm extends Omit<SpecialPrice, "specialPriceId"> {
  product: Product | null;
  discount: string;
}

interface Loading {
  isLoading: boolean;
  message: string;
}

export type {
  CurrencyType,
  ButtonVariantType,
  BadgeVariantType,
  KeyList,
  WrongInput,
  FieldErrorType,
  ServerResponse,
  User,
  Product,
  SpecialPrice,
  SpecialPriceForm,
  Loading,
};
