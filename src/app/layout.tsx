import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: [
    {
      path: "../../public/InterVariable.ttf",
      style: "normal",
    },
    {
      path: "../../public/InterVariable-Italic.ttf",
      style: "italic",
    },
  ],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
