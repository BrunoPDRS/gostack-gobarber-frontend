import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";

import GlobalStyle from "./styles/global";

import AuthContext from "./context/AuthContext";

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: "Bruno" }}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);

export default App;
