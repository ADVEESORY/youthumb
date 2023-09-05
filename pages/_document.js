import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <meta charSet="UTF-8" />
          <title>Your Page Title</title>

          {/* Google AdSense */}
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <script>
            {`
              (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "YOUR_AD_CLIENT_ID",
                enable_page_level_ads: true
              });
            `}
          </script>
        </Head>
        <body>
          {/* Add the provided text here */}
          <p>
            Get free thumbnail image of any YouTube videos in Full HD(1080), HD
            (720), SD, and also in small size...
            {/* Insert the rest of your provided text here */}
          </p>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
