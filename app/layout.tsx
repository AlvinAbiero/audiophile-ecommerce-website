import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./_store/index";
import theme from "./_styles/theme";

import Header from "./_components/organisms/Header";
import Footer from "./_components/organisms/Footer";
import ModalContextProvider from "./_store/ModalContextProvider";
import CartModal from "./_components/organisms/CartModel";
import CheckoutModal from "./_components/organisms/CheckoutModal";
import Overlay from "./_components/atoms/Overlay";

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
