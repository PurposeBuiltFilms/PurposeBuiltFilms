import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
    site: 'https://purposebuiltfilms.com',
    // Pages build to /about/index.html, served as clean /about/ URLs
    build: {
        format: 'directory',
        // Inline the (purged, ~8 KB gzipped) CSS so no stylesheet request blocks first paint
        inlineStylesheets: 'always',
    },
    trailingSlash: 'ignore',
    // Keep the hand-written markup and whitespace as-is
    compressHTML: false,
    // Inlines SVG icons at build time (replaces the Font Awesome CDN)
    integrations: [icon()],
});
