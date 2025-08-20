import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'

type MyDocumentProps = {
  locale?: string
}

export default class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps & MyDocumentProps> {
    const initialProps = await Document.getInitialProps(ctx)
    const locale = ctx.locale || 'ar'
    return { ...initialProps, locale }
  }

  render() {
    const locale = this.props.locale || 'ar'
    const dir = locale === 'ar' ? 'rtl' : 'ltr'

    return (
      <Html lang={locale} dir={dir}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link
            href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <meta name="theme-color" content="#3b82f6" />
          <meta name="description" content="علاء إبراهيم - محاسب ومحترف في إدارة الأعمال" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}