import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Drawer from "./Drawer";
import AddToCart from "./AddToCart";
type MainLayoutProps = {
  children: React.ReactNode;
};
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Drawer />
      <AddToCart />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default MainLayout;
