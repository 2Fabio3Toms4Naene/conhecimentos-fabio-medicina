import "./globals.css";
import styles from './page.module.css'
import { ThemeProvider, useTheme } from "./themeContext";
import ComponentHeader from "./component-header/ComponentHeader";

export const metadata = {
  title: "Conhecimentos do Fábio - Medicina",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
    <html lang="pt">
      <body>
        <ComponentHeader />
        {children}
      </body>
    </html>
    </ThemeProvider>
  );
}
