import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../styles/themes";
import { AuthProvider } from "./authContext";
import { CartProvider } from "./cartContext";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <AuthProvider>
      <CartProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>;
      </CartProvider>
    </AuthProvider>
  );
};
