import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"> {/* Обязательный тег <html> */}
      <body> {/* Обязательный тег <body> */}
        {children}
      </body>
    </html>
  );
}
