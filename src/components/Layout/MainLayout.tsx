import React from "react";

interface MainLayoutProps {}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <header>
        <nav></nav>
      </header>

      <main>{children}</main>

      <footer>
        <p>© footer</p>
      </footer>
    </>
  );
};
