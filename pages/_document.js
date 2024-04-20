// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document'
import BLOG from '@/blog.config'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
            <Html lang={BLOG.LANG}>
                <Head>
      <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-WWYHS8KJC4"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-WWYHS8KJC4');
</script>
                <link rel='icon' href= {`${BLOG.BLOG_FAVICON}`} />
                  {/* 预加载字体 */}
                  {BLOG.FONT_AWESOME && <>
                      <link rel='preload' href={BLOG.FONT_AWESOME} as="style" crossOrigin="anonymous" />
                      <link rel="stylesheet" href={BLOG.FONT_AWESOME} crossOrigin="anonymous" referrerPolicy="no-referrer" />
                  </>}

                  {BLOG.FONT_URL?.map((fontUrl, index) => {
                    if (fontUrl.endsWith('.css')) {
                      return <link key={index} rel="stylesheet" href={fontUrl} />
                    } else {
                      return <link key={index} rel="preload" href={fontUrl} as="font" type="font/woff2" />
                    }
                  })}

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5330018171034479"
     crossorigin="anonymous"></script>
       <script async custom-element="amp-auto-ads"
        src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js">
</script>
                </Head>
                <body className={`${BLOG.FONT_STYLE} font-light scroll-smooth`}>
                    <Main />
                    <NextScript />
          <amp-auto-ads type="adsense"
        data-ad-client="ca-pub-5330018171034479">
</amp-auto-ads>
                </body>
            </Html>
    )
  }
}

export default MyDocument
