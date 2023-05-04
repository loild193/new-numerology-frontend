import React from 'react'
import NextHead from 'next/head'

export interface Props {
  description?: string
  ogImage?: string
  favicon?: string
  title?: string
  url?: string
}

export const HtmlHead: React.FC<Props> = ({ title, description, url, ogImage, favicon }) => {
  const defaultDescription = 'virtuality, socializing, and reality.'
  const defaultOGImage = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:6709'}/images/og-image.png`
  const defaultFavicon = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:6709'}/favicon.ico`
  const defaultTitle = 'Numerology Website'

  return (
    <>
      <NextHead>
        <meta charSet="UTF-8" />
        <title>{title || defaultTitle}</title>
        <meta name="description" content={description || defaultDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon || defaultFavicon} />
        <link rel="shortcut icon" href={favicon || defaultFavicon} />
        <meta property="og:url" content={url ?? 'https://new-numerology.sr-itsmyfault.cf/'} />
        <meta property="og:title" content={title || defaultTitle} />
        <meta property="og:description" content={description || defaultDescription} />
        <meta name="twitter:site" content={url ?? 'https://new-numerology.sr-itsmyfault.cf/'} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={defaultTitle} />
        <meta name="twitter:image" content={ogImage || defaultOGImage} />
        <meta name="twitter:description" content={defaultDescription} />
        <meta property="og:image" content={ogImage || defaultOGImage} />
      </NextHead>
    </>
  )
}
