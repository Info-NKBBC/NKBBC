import Head from 'next/head';

export default function SeoHead() {
  const siteTitle = '南科福氣教會';
  const siteDescription = '歡迎來到南科福氣教會，與我們一起經歷信仰、盼望與愛的同在';
  const siteUrl = 'https://nanke-blessing.vercel.app'; // 請替換為您的實際網址
  const siteImage = '/images/logo-horizontal.png'; // 請替換為您的預覽圖片路徑

  return (
    <Head>
      {/* 基本 meta 標籤 */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteUrl + siteImage} />
      <meta property="og:image" content={`${siteUrl}${siteImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={`${siteUrl}${siteImage}`} />
    </Head>
  );
}
