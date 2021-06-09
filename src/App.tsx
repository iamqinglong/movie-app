import React from "react";
import "./App.css";
import { Routing } from "./Routing";
import { BrowserRouter } from "react-router-dom";

interface AppProps {}

export const App: React.FC<AppProps> = () => {
  return (
    <>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </>
  );
};

export default App;
