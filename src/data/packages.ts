export interface Package {
    name: string;
    tagline: string;
    suitedFor: string;
    deliverables: string;
    /** Starting price in GBP, excluding VAT */
    price: number;
    timeline: string;
    includes: string[];
    /** Used for the Service JSON-LD on the pricing page */
    schema: {
        name: string;
        description: string;
        timeline: string;
    };
}

export const formatPrice = (price: number) =>
    `£${price.toLocaleString('en-GB')}`;

export const packages: Package[] = [
    {
        name: 'Sprout',
        tagline: 'Entry-level films to get your message growing.',
        suitedFor: 'Ideal for organizations seeking a concise storytelling solution.',
        deliverables: 'A 3-minute cinematic documentary. Brand identity, CEO Branding - a simple story, well told.',
        price: 1500,
        timeline: '2-3 week delivery from concept to delivery',
        includes: [
            'Initial consultation and story development',
            // TODO: duplicate of the line above in the original copy; confirm the intended second item
            'Initial consultation and story development',
            'Basic editing and post-production',
            'Final film delivery in multiple formats',
        ],
        schema: {
            name: 'Sprout — Short Documentary Film',
            description: 'Entry-level cinematic documentary. A 3-minute story-driven film ideal for charities, conservation organisations, and brands.',
            timeline: '2-3 week delivery',
        },
    },
    {
        name: 'Wild Meadow',
        tagline: 'Richer, more colourful stories with more coverage and edit time.',
        suitedFor: 'Suited for projects requiring more detailed exploration.',
        deliverables: 'A 5-10 minute cinematic documentary. Emotion, connection, change.',
        price: 2000,
        timeline: '5-6 weeks from concept to delivery.',
        includes: [
            'Detailed story concept and script development',
            'Two days of filming',
            'Comprehensive editing and post-production with sound design',
            'Final film delivery with consultation on distribution strategy',
        ],
        schema: {
            name: 'Wild Meadow — Extended Documentary',
            description: '5-10 minute cinematic documentary with richer storytelling, multiple filming days, and comprehensive post-production.',
            timeline: '5-6 week delivery',
        },
    },
    {
        name: 'Ancient Forest',
        tagline: 'Cinematic, high-impact productions that hold up over time.',
        suitedFor: 'For extensive projects involving multiple narratives or locations.',
        deliverables: 'A series of 3 films, each 5-10 minutes in length.',
        price: 6000,
        timeline: '10-12 weeks for full series production.',
        includes: [
            'Full strategic consultation and multi-story planning',
            'Up to five days of filming',
            'Enhanced editing with custom graphics and effects',
            'Final delivery of films along with tailored engagement strategy',
        ],
        schema: {
            name: 'Ancient Forest — Documentary Series',
            description: 'A series of three 5-10 minute cinematic documentaries for extensive multi-narrative projects.',
            timeline: '10-12 week production',
        },
    },
];
