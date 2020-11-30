import { theme } from "@chakra-ui/core"
 
const customTheme = {
  ...theme,
  mode: {
    light: {
      logo: "#102a43",
      background: "#fff",
      cardBG: "#EFF2FB",
      text: "#334E68",
      heading: "#102a43",
      icon: "#9FB3C8",
      link: "#9F00FF",
    },
    dark: {
      logo: "#ffffff",
      background: "#102a43",
      cardBG: "#243B53",
      text: "#EFF2FB",
      heading: "#fff",
      icon: "#486581",
      link: "#F8CCFF",
    },
  },
  colors: {
    ...theme.colors,
    primary: {
      100: "#CFD1FD",
      200: "#A7ABFB",
      300: "#8388F9",
      400: "#6268F8",
      500: "#444BF7",
      600: "#262EF6",
      700: "#0B14F5",
      800: "#0911DD",
      900: "#080FC7",
    },
  },
  // breakpoints: ["0em", "30em", "48em", "62em", "80em"]
}
 
export default customTheme