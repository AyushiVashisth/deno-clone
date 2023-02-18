import React from "react";
import { store } from "@/redux/store";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";

import "../styles/globals.css"
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function App ({ Component, pageProps }: AppProps){
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </Provider>
    </ChakraProvider>
  )
}