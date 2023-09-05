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

          {/* Provided Text */}
          <script>
            {`
              Get free thumbnail image of any YouTube videos in Full HD(1080), HD (720), SD, and also in small size. it's currently supported formats: YouTube (HD, HQ, 1080p, 4K) videos

              What is the use of this YouTube Thumbnail Grabber website?
              People use this YouTube thumbnail downloader website for getting thumbnail from any YouTube videos. That can be used in presentation, animation work or many other activities.

              How to use this YouTube thumbnail downloader website?
              I have shared some of screenshot in which i have guided you how you can use this YouTube downloader website. It's quite easy first step is you just copy any YouTube link whom thumbnail you want. youtube cover download Easily you can download YouTube cover.

              Now paste that URL in input box, the moment you paste that link it's automatically going to generate different size of thumbnails for you. Now click on thumbnail download button and it's going to automatically downloaded in your system. If you are using Android phone then you have to save those images and if you are using iPhone then I don't know how you can do it?

              Is it legal to download YouTube thumbnails?
              Of course, it's 100% legal to download any YouTube video's thumbnails, but as you know thumbnails and videos are copyrighted products, you should take author permissions first in order to reuse them.

              Compatibility of this YT thumbnail grabber website
              This YouTube thumbnail downloader website is going to work well in all devices except iPhone because iPhone doesn't allow images to be saved. But if you're using a jailbroken iPhone, then there is no problem. On the other hand, it's going to work fine in almost all kinds of Android devices and laptop or desktop systems.

              Is there any Copyright risk on YouTube Thumbnails?
              Whatever YouTube screenshot you are downloading is copyrighted by the respective owner of that video. If you want to use it in your work, then you should ask for permission.

              Especially if you are reusing on YouTube, it can create problems, but if your plan is outside of YouTube, like using it on a website for creating logos or any Photoshop types of stuff, then there is no problem. You hardly receive any DMCA complaints related to that particular YouTube thumbnail.

              Is reusing YouTube thumbnails SEO friendly?
              Nope, it's not SEO friendly because almost all thumbnails on YouTube are indexed by Google. So which one is unique and which one is duplicate, Google knows it. So it's not SEO friendly, as you know. But you can do some stuff on that thumbnail, like getting some unique effects using Photoshop or any other software that can make your thumbnail unique again and thus, make it SEO friendly again.
            `}
          </script>

          {/* Other head elements go here */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
