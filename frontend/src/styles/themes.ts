import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    green: {
      100: "rgba(39,174,96,0.1)",
      600: "#27AE60",
      800: "#168821",
    },
    gray: {
      0: "#F5F5F5",
      100: "#E0E0E0",
      300: "#828282",
      600: "#333333",
    },
    red: {
      400: "#EB5757",
      700: "#E60000",
    },
    yellow: {
      500: "#FFCD07",
    },
    blue: {
      400: "#155BCB",
    },
  },
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  fontSizes: {
    h1: "26px",
    h2: "22px",
    h3: "18px",
    headline: "16px",
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "gray.600",
      },
    },
  },
});
