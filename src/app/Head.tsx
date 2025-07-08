import Head from "next/head";

interface SeoHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  image?: string;
  url?: string;
  logo?: string;
}

export default function SeoHead({
  title = "Papernest",
  description = "Technical challenge React/NextJS Front End Developer",
  keywords = "React, NextJS, Front End Developer",
  author = "Achraf hafedh",
  image = "",
  url = "",
  logo = "",
}: SeoHeadProps) {
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    url: url,
    logo: logo,
  });

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      <script type="application/ld+json">{jsonLd}</script>

      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={url} />
    </Head>
  );
}
