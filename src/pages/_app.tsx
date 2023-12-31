import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";
// import Toast from "@/components/Toast";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>My App</title>
            </Head>

            <>
                <GlobalStyle />
                <Layout>
                    <Component {...pageProps} />
                    {/* <Toast /> */}
                </Layout>
            </>
        </>
    );
}
