import "./globals.css";
import { StateProvider} from "./statas";
import ComponentHeader from "./component-header/ComponentHeader";

export const metadata = {
  title: "Conhecimentos do Fábio - Medicina",
};

export default function RootLayout({ children }) {
  return (
    <StateProvider>
    <html lang="pt">
      <body>
        <ComponentHeader />
        {children}
      </body>
    </html>
    </StateProvider>
  );
}
