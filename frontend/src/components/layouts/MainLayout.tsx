import React from "react";
import Header from "./Header";
import Footer from "./Footer";
type MainLayoutProps = {
  children: React.ReactNode;
};
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mb-4">{children}</main>
      <Footer />
    </>
  );
};
export default MainLayout;
