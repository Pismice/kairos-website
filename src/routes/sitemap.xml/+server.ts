export const GET = async () => {
	// Exemple de routes statiques
	const staticPages = [
		'home',
		'cscz',
		'cscz/state',
		'cscz/ranking',
	];

	const urls = [
		...staticPages.map((path) => ({
			loc: `https://kairos-project.com/${path}`,
			lastmod: new Date().toISOString().split('T')[0]
		})),
	];

	const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>
${urls
	.map(
		(url) => `<url>
  <loc>${url.loc}</loc>
  <lastmod>${url.lastmod}</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(xmlContent, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};
