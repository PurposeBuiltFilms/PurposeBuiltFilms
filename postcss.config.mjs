import purgecss from '@fullhuman/postcss-purgecss';

// Production builds drop every CSS rule (mostly unused Bootstrap) whose classes don't
// appear in the components, pages, data or browser scripts.
export default {
    plugins:
        process.env.NODE_ENV === 'production'
            ? [
                  purgecss({
                      content: [
                          './src/**/*.{astro,ts,js}',
                          './public/assets/js/**/*.js',
                      ],
                      // Classes only ever added at runtime, or built from template strings
                      safelist: {
                          standard: ['hidden', 'scrolled', 'nav-hidden', 'alert', /^alert-/],
                      },
                  }),
              ]
            : [],
};
