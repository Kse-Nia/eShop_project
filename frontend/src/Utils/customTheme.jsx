import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    brand: {
      50: "#ffe2ec",
      100: "#ffb3c5",
      200: "#fc839f",
      300: "#f95278",
      400: "#f62252",
      500: "#dd0939",
      600: "#ad032c",
      700: "#7c001e",
      800: "#4d0012",
      900: "#200005",
    },
  },
});

export default customTheme;
