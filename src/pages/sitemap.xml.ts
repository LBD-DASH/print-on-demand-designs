import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { absUrl } from '../lib/url';
export const GET: APIRoute = async ({ site }) => {
  const items = await getCollection('collections');
  const day = (d: Date) => d.toISOString().slice(0, 10);
  const urls = [
    { loc: absUrl('', site) },
    { loc: absUrl('collections/', site) },
    ...items.map((a) => ({ loc: absUrl(`collections/${a.id}/`, site), lastmod: day(a.data.lastUpdated) })),
    ...['how-print-on-demand-works', 'faq', 'about', 'request-a-quote', 'disclosure', 'privacy'].map((p) => ({ loc: absUrl(`${p}/`, site) })),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u: any) => `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`).join('\n') + `\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
