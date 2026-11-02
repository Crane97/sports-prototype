/**
 * <head>: SEO local, Open Graph y datos estructurados schema.org (ExerciseGym).
 */
import { esc } from './helpers.js';

export function renderHead(site) {
  const { seo, brand, contact } = site;
  const ogImage = seo.url + seo.ogImage;

  const schema = {
    '@context': 'https://schema.org',
    '@type': ['ExerciseGym', 'SportsActivityLocation'],
    name: brand.name,
    description: seo.description,
    url: seo.url,
    image: ogImage,
    logo: `${seo.url}/favicon.svg`,
    telephone: contact.phoneHref,
    email: contact.email,
    foundingDate: brand.founded,
    sport: 'Boxeo',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: contact.address.street,
      postalCode: contact.address.postalCode,
      addressLocality: contact.address.city,
      addressRegion: contact.address.region,
      addressCountry: contact.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: contact.geo.lat, longitude: contact.geo.lng },
    openingHoursSpecification: site.openingHours.schema.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: [contact.instagram],
  };

  return `
    <title>${esc(seo.title)}</title>
    <meta name="description" content="${esc(seo.description)}">
    <link rel="canonical" href="${esc(seo.url)}/">
    <meta name="theme-color" content="${esc(seo.themeColor)}">
    <meta name="color-scheme" content="dark">

    <!-- Open Graph / redes sociales -->
    <meta property="og:type" content="website">
    <meta property="og:locale" content="${esc(seo.locale)}">
    <meta property="og:site_name" content="${esc(brand.name)}">
    <meta property="og:title" content="${esc(seo.title)}">
    <meta property="og:description" content="${esc(seo.description)}">
    <meta property="og:url" content="${esc(seo.url)}/">
    <meta property="og:image" content="${esc(ogImage)}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta name="twitter:card" content="summary_large_image">

    <!-- SEO local -->
    <meta name="geo.region" content="ES-V">
    <meta name="geo.placename" content="${esc(contact.address.city)}">
    <meta name="geo.position" content="${contact.geo.lat};${contact.geo.lng}">

    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">

    <script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}
