import "./globals.css";

export const metadata = {
  title: "Brighter - Simple and Better",
  description: "Simple Mortgage online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
