import { Helmet } from 'react-helmet-async';
import { BRAND } from '../../data/content';

type Props = { title: string; description: string; path?: string; image?: string };

export default function SEO({ title, description, path = '', image }: Props) {
  const url = `https://shelbyaura.com${path}`;
  const fullTitle = `${title} | ${BRAND.name}`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Brand',
          name: BRAND.name,
          description,
          url: 'https://shelbyaura.com',
          address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' },
          telephone: BRAND.phone,
          email: BRAND.email,
        })}
      </script>
    </Helmet>
  );
}
