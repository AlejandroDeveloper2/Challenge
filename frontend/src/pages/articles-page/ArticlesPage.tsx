/* eslint-disable react-hooks/exhaustive-deps */
import { JSX, Suspense, useEffect } from "react";

import {
  useAppStore,
  useLoading,
  useProductStore,
  useSpecialPriceStore,
} from "@hooks/index";

import { CardList } from "@components/index";

import { PageContainer, Title } from "@styles/globalStyles.style";

const ArticlesPage = (): JSX.Element => {
  const { user } = useAppStore();
  const { findProductsWithDiscountByUser } = useSpecialPriceStore();
  const { products, findAllProducts } = useProductStore();

  const { toggleLoading, message } = useLoading();
  const { toggleLoading: toggleLoadingUser, message: messageUser } =
    useLoading();

  useEffect(() => {
    if (products.length > 0) return;
    findAllProducts(toggleLoading);
  }, [products.length]);

  useEffect(() => {
    if (user) findProductsWithDiscountByUser(user.userId, toggleLoadingUser);
  }, [user]);

  return (
    <PageContainer>
      <Title>
        {user
          ? "Listado de productos con precio especial "
          : "Listado de productos"}
      </Title>
      <Suspense fallback={<p>{user ? messageUser : message}</p>}>
        <CardList />
      </Suspense>
    </PageContainer>
  );
};

export default ArticlesPage;
