"use client";

import { createTheme, darken } from "@mui/material/styles";
import shadows from "@mui/material/styles/shadows";
import { Inter } from "next/font/google";
import colors from "./colors";
import { green, grey } from "@mui/material/colors";

const { neutral, primary, secondary, error, success, warning } = colors;

const inter = Inter({ subsets: ["latin"] });

const theme = createTheme({
  palette: {
    common: {
      white: neutral[100],
      black: neutral[800],
    },
    primary: {
      main: primary[800],
    },
    secondary: {
      main: secondary[800],
    },
    text: {
      primary: neutral[800],
    },
    background: {
      paper: "#fff",
      default: neutral[200],
    },
    warning: {
      main: warning[800],
    },
    error: {
      main: error[700],
    },
    success: {
      main: green[800],
    },
  },
  typography: {
    htmlFontSize: 18,
    fontFamily: inter.style.fontFamily,
    // allVariants: {
    //   fontFamily: ["Inter", "sans-serif"].join(","),
    // },
    // h2: {
    //   fontFamily: ["Roboto", "sans-serif"].join(","),
    // },
  },
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          // backgroundColor: "red",
          padding: 0,
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0,0,0,.4)",
        },
      },
    },
    // MuiListItemButton: {
    //   styleOverrides: {
    //     root: {
    //       ":hover": {
    //         color: error[800],
    //       },
    //     },
    //   },
    // },
    MuiDrawer: {
      styleOverrides: {
        root: ({ theme }) => ({
          // boxShadow: "none",
        }),
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          ":hover": {
            boxShadow: shadows[2],
          },
          ":active": {
            boxShadow: shadows[2],
          },
          ":focus": {
            boxShadow: shadows[2],
          },
          boxShadow: shadows[1],
        },
      },
    },
    MuiSvgIcon: {
      defaultProps: {
        fontSize: "large",
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => {
          const psuedoStyles = {
            color: darken(theme.palette.primary.light, 0.3),
            backgroundColor: primary[100],
            borderRadius: 4,
          };
          return {
            transition: "none",
            ":hover": psuedoStyles,
            ":focus": psuedoStyles,
          };
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableFocusRipple: true,
        disableElevation: true,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableTouchRipple: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
  },
});

export default theme;
