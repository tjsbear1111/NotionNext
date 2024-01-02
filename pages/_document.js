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

       <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5330018171034479"
     crossorigin="anonymous"></script>
<!-- 1 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-5330018171034479"
     data-ad-slot="1017300676"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

                </Head>

                <body className={`${BLOG.FONT_STYLE} font-light scroll-smooth`}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
    )
  }
}

export default MyDocument
