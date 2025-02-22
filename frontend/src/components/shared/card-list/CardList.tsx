import { JSX, lazy, Suspense } from "react";

import {
  useAppStore,
  useLoading,
  useModal,
  useProductStore,
  useSpecialPriceStore,
} from "@hooks/index";

import Card from "../card/Card";

import { List } from "./CardList.style";
import { SpecialPricesForm } from "@components/index";

const Modal = lazy(() => import("@components/shared/modal/Modal"));

const CardList = (): JSX.Element => {
  const { user } = useAppStore();
  const { specialPrices, findProductWithDiscountById } = useSpecialPriceStore();
  const { products } = useProductStore();

  const { isModalVisible, toggleModal } = useModal();
  const { toggleLoading } = useLoading();

  return (
    <>
      <Suspense fallback={<p>Cargando modal..</p>}>
        {isModalVisible && (
          <Modal
            title="Editar precio especial"
            isModalVisible={isModalVisible}
            toggleModal={toggleModal}
          >
            <SpecialPricesForm mode="edit" toggleModal={toggleModal} />
          </Modal>
        )}
      </Suspense>
      <List>
        {user
          ? specialPrices.map((specialPrice) => (
              <li
                key={specialPrice.specialPriceId}
                onClick={() => {
                  if (specialPrice.specialPriceId)
                    findProductWithDiscountById(
                      specialPrice.specialPriceId,
                      toggleLoading
                    );
                  toggleModal();
                }}
              >
                <Card
                  product={specialPrice.product}
                  discount={specialPrice.discount}
                />
              </li>
            ))
          : products.map((product) => (
              <li key={product.productId}>
                <Card product={product} />
              </li>
            ))}
      </List>
    </>
  );
};

export default CardList;
