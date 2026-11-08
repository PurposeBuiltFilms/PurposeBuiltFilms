import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://purposebuiltfilms.com',
    // Pages build to /about/index.html, served as clean /about/ URLs
    build: { format: 'directory' },
    trailingSlash: 'ignore',
    // Keep the hand-written markup and whitespace as-is
    compressHTML: false,
});
