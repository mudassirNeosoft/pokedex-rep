import React, { PropsWithChildren } from "react";
import { TopAppBar } from "@pokedex/components";
const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <TopAppBar />
      {children}
    </>
  );
};
export default Layout;