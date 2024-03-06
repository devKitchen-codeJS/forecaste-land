"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
// import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { Box, ThemeProvider } from "@mui/material";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Forecaste App",
//   description: "MVP",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <ThemeProvider theme={theme}>
        <body className={inter.className} suppressHydrationWarning={true}>
          <Header />
          <Box className='main'>{children}</Box>

          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
