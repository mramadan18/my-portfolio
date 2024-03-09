import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="text-sm lg:text-base">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
        />
      </Head>
      <body className="bg-gradient-to-r from-green to-blue-500 dark:from-dark-500 dark:to-dark-700 dark:text-white flex justify-center items-center lg:h-[100vh] py-10 md:py-32">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
