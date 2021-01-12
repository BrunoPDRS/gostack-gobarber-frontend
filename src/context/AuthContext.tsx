import React, { createContext, useCallback } from "react";
import api from "../services/api";

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("sessions", {
      email,
      password,
    });

    console.log(response.data);
  }, []);

  const signOut = useCallback(() => {
    console.log("signOut");
  }, []);

  return (
    <AuthContext.Provider value={{ name: "Bruno", signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
