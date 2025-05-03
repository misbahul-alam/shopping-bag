import React from "react";
import Header from "./Header";
type MainLayoutProps = {
  children: React.ReactNode;
};
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="px-[5%]">{children}</main>
    </>
  );
};
export default MainLayout;
