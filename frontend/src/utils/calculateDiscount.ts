const calculateDiscount = (
  discountPercentage: number,
  productPrice: number
): number => {
  const discount = (discountPercentage / 100) * productPrice;
  return productPrice - discount;
};

export default calculateDiscount;
