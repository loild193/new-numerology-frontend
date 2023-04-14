import React from 'react'
import Document, { Html, Main, NextScript, Head } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head></Head>
        <body className="body">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
