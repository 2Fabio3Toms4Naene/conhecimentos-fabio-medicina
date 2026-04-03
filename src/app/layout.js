import "./globals.css";

export const metadata = {
  title: "Conhecimentos do Fábio - Medicina",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
