import React, { ReactNode } from "react";
import Header from "@/components/Header/Header";
import Main from "./Shared/Main";
import Footer from "./Footer/Footer";
import UTKHeader from "@/components/UTK_Header/UTKHeader"


const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <UTKHeader />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
