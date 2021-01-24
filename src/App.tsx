import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";

import GlobalStyle from "./styles/global";

import ToastContainer from "./components/ToastContainer";
import { AuthProvider } from "./hooks/AuthContext";

const App: React.FC = () => (
  <>
    <AuthProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthProvider>

    <ToastContainer />

    <GlobalStyle />
  </>
);

export default App;
