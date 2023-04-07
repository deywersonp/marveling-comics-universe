import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt">
      <Head>
        <meta name="description" content="Adquira suas comics favoritas do universo Marvel" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
