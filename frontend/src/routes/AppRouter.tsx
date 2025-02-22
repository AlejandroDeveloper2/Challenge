import { JSX } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import MainLayout from "@layout/MainLayout";

import { ArticlesPage } from "@pages/index";

const AppRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ArticlesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
