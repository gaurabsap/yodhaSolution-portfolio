// src/components/SEO.jsx
import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = ({ 
  title = 'YodhaSolution - Professional Digital Solutions',
  description = 'YodhaSolution provides cutting-edge digital solutions including web development, mobile apps, cloud solutions, and cybersecurity services.',
  keywords = 'web development, mobile apps, cloud solutions, cybersecurity, digital agency',
  canonical = '',
  ogImage = '/logo.png'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/logo.png" />
    </Helmet>
  )
}

export default SEO