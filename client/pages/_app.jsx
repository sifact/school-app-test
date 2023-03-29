import "@/styles/globals.scss";
import { theme } from "@/Theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import Head from "next/head";

export default function App({ Component, pageProps }) {
    const siteName = "School App";
    return (
        <>
            <Head>
                <title>{siteName}</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="description" content="School App" />
                <meta name="keywords" content="school, app" />
                <meta name="author" content="DiGiLABS" />
                <meta name="theme-color" content="#3377FF" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
                <CssBaseline />
            </ThemeProvider>
        </>
    );
}
