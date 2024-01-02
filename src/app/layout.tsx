import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"; // or `v14-appRouter` if you are using Next.js v14
import { ThemeProvider } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Forecaste App",
  description: "MVP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/* <body className={inter.className}><ThemeProvider theme={}>{children}</ThemeProvider></body> */}
      <body className={inter.className}>{children}</body>

    </html>
  );
}
