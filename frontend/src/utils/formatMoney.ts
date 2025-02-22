import { CurrencyType } from "@interfaces/index";

const formatMoney = (value: number, currencyType: CurrencyType): string => {
  const locale = currencyType == "COPS" ? "es-CO" : "en-US";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyType === "COPS" ? "COP" : currencyType,
  }).format(value);
};

export default formatMoney;
