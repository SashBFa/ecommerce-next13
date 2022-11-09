import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
const theme = createTheme({
  typography: {
    fontFamily: ["inherit"].join(","),
  },
  palette: {
    primary: {
      light: "#facc15",
      main: "#fbbf24",
      dark: "#f59e0b",
    },
  },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main id="root" className={inter.className}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="bg-dark min-h-screen text-white flex flex-col">
          <div className="grow">{children}</div>
        </div>
      </ThemeProvider>
    </main>
  );
}
