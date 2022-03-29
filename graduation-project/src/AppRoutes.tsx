import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import NewsPage from "./components/pages/NewsPage/NewsPage";
import PageError from "./components/pages/PageError/PageError";
import TitlePage from "./components/pages/TitlePage/TitlePage";


const AppRoutes: FC = () => {
 
  return (
    <Routes>
      <Route path="/" element={<TitlePage/>} />
      <Route path="/news/:news" element={<NewsPage/>} />
      <Route path="*" element={<PageError/>} />
    </Routes>
  );
};

export default AppRoutes;
