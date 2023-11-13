import { createTheme } from "@mui/material";
import "./index.css";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
          textTransform: "none",
          width: "fit-content",
        },
      },
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            border: `2px solid `,
            "&:hover": {
              border: "2.5px solid",
            },
          },
        },
      ],
    },
  },
  palette: {
    primary: {
      main: "#ef233c",
      dark: "#C8102E",
      light: "#ff3d54",
      contrastText: "#edf2f4",
    },
    secondary: {
      main: "#2b2d42",
      dark: "#22232e",
      light: "#8d99ae",
      contrastText: "#edf2f4",
    },
  },
  typography: {
    fontFamily: "Lato, Helvetica Neue, sans-serif",
  },
});

export default theme;
