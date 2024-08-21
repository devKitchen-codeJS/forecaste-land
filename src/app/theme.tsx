import { PaletteColorOptions, ThemeOptions, createTheme } from "@mui/material";

export const baseOptions: ThemeOptions = {
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
  },
};

const __color_primary = "#D2982D";
const __color_neutral = "#F5B747";
const __color_secondary = "#DEA02E";
const __color_btn = "#2B261D";
const __color_text = "#FFFFFF";
const __color_card = "#403B45";

const __dark__color_primary = "#";
const __dark__color_neutral = "#";
const __dark__color_secondary = "#";
const __dark__color_btn = "#";
const __dark__color_text = "#";
const __dark__color_card = "#";

const __check_color = "#dddddd";

// export const themeOptions: R

export const theme = createTheme({
  palette: {
    primary: {
      main: "#D2982D",
      dark: "#ba000d",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
    info: {
      main: __color_neutral,
    },
    success: {
      main: "#403B45",
    },
  },
  breakpoints: {
    values: {
      xs: 600,
      sm: 900,
      md: 900,
      lg: 1536,
      xl: 1920,
    },
  },
});
