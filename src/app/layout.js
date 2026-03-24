import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import StoreProvider from "@/app/store/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Krit.io",
  description:
    "Krit.io is a learning platform for enthusiastic programmers.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <StoreProvider>
        <html lang="en">
          <body className={inter.className}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
              <Toaster />
            </ThemeProvider>
          </body>
        </html>
      </StoreProvider>
    </ClerkProvider>
  );
}
