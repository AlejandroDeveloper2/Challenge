import { JSX } from "react";
import { MdOutlineInventory } from "react-icons/md";
import { IoImageOutline, IoPricetagOutline } from "react-icons/io5";
import { FaBoxOpen } from "react-icons/fa6";

import { Product, SpecialPrice } from "@interfaces/index";

import { useAnimatedValues, useSpecialPriceStore } from "@hooks/index";
import { calculateDiscount, formatMoney } from "@utils/index";

import { Badge } from "@components/index";

import {
  CardBox,
  CardCol,
  CardDetailsBox,
  CardImageBox,
  CardRow,
} from "./Card.style";

interface CardProps {
  product: Product;
  discount?: number;
}

const Card = ({ product, discount }: CardProps): JSX.Element => {
  const { specialPrice } = useSpecialPriceStore();
  const animatedDiscountValue = useAnimatedValues<SpecialPrice | null>(
    specialPrice?.product.productId === product.productId
      ? specialPrice.discount
      : discount ?? 10,
    specialPrice
  );

  return (
    <CardBox>
      <Badge
        label={discount ? "Descuento:" : "Precio normal"}
        value={discount ? `${animatedDiscountValue}%` : null}
        variant={discount ? "primary" : "gray-dark"}
      />
      <CardImageBox>
        <IoImageOutline />
      </CardImageBox>
      <CardDetailsBox>
        <CardRow>
          <FaBoxOpen />
          <h2>{product.name}</h2>
        </CardRow>
        <CardRow>
          <CardCol>
            <MdOutlineInventory />
            <p>{product.stock}</p>
          </CardCol>
          <CardCol>
            <IoPricetagOutline />
            <strong
              style={{
                color: discount ? "var(--primary)" : "var(--gray-dark)",
              }}
            >
              {discount
                ? formatMoney(
                    calculateDiscount(discount, product.price),
                    product.currencyPrice
                  )
                : formatMoney(product.price, product.currencyPrice)}
            </strong>
          </CardCol>
        </CardRow>
      </CardDetailsBox>
    </CardBox>
  );
};

export default Card;
