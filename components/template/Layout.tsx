import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Inter } from "@next/font/google";
import Navigation from "./Navigation";

const inter = Inter({ subsets: ["latin"] });
const theme = createTheme({
  typography: {
    fontFamily: ["inherit"].join(","),
  },
  palette: {
    primary: {
      light: "#ca8a04",
      main: "#a16207",
      dark: "#854d0e",
    },
    secondary: {
      light: "#fff",
      main: "#fff",
    },
  },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main id="root" className={inter.className}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="bg-dark min-h-screen text-white flex flex-col">
          <Navigation />
          <div className="grow">{children}</div>
        </div>
      </ThemeProvider>
    </main>
  );
}
