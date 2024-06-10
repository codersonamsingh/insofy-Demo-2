import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <link rel="shortcut icon" href="/assets/images/favicon.ico" />
            <title>Insofy - Insurance & Consulting Business NextJS Template</title>
            <link rel="preconnect" href="https://fonts.bunny.net" />
            <link href="https://fonts.bunny.net/css?family=dm-sans:400,400i,500,500i,700,700i" rel="stylesheet" />
            <body className='theme-insofy scrollbarcolor'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
