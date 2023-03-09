import Head from "next/head";
import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="p-[10px] scrollbar-hide font-inter overflow-x-hidden h-screen bg-light dark:text-white dark:bg-dark">
      <Head>
        <title>Devraj Jhala</title>
      </Head>
      <header className="max-w-[850px] bg-light dark:bg-dark text-lg mx-auto w-[100%]">
        <Navbar />
      </header>

      <main className="max-w-[800px] mx-auto w-[100%]">{children}</main>

      <footer className="max-w-[850px] mx-auto w-[100%]">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
