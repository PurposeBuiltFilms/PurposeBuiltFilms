/** URL/id-safe slug, e.g. "How much does a film cost?" -> "how-much-does-a-film-cost" */
export const slugify = (text: string) =>
    text
        .toLowerCase()
        .normalize('NFKD')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
