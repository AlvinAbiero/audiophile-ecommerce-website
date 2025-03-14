import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "@/store";
import theme from "@/styles/theme";

import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import ModalContextProvider from "@/store/ModalContextProvider";
import CartModal from "@/components/organisms/CartModal";
import CheckoutModal from "@/components/organisms/CheckoutModal";
import Overlay from "@/components/atoms/Overlay";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={manrope.className}>
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
      </head>
      <body>
        <ChakraProvider theme={theme} resetCSS>
          <Provider store={store}>
            <ModalContextProvider>
              <Header />
              {children}
              <Footer />
              <CartModal />
              <CheckoutModal />
              <Overlay />
            </ModalContextProvider>
          </Provider>
        </ChakraProvider>
      </body>
    </html>
  );
}
