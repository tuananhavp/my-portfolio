import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import React from "react";

const HomePageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      <main className="flex flex-col mx-auto px-4 py-10 min-h-screen container font-[family-name:var(--font-preahvihear)] snap-y snap-mandatory scroll-smooth">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default HomePageLayout;
