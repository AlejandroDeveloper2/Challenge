import { JSX } from "react";
import { Outlet } from "react-router-dom";

import { Navigation } from "@components/index";

import { MainContainer } from "@styles/globalStyles.style";

const MainLayout = (): JSX.Element => {
  return (
    <MainContainer>
      <Navigation />
      <Outlet />
    </MainContainer>
  );
};

export default MainLayout;
