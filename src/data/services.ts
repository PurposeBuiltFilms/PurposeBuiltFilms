export interface Service {
    title: string;
    image: string;
    alt: string;
    intro: string;
    /** Paragraphs revealed by "more info..." */
    details: string[];
}

export const services: Service[] = [
    {
        title: "Short Films",
        image: "/assets/images/service-short-film.webp",
        alt: "Rewilding and nature short film production for conservation charities in Bristol and the South West",
        intro: "At Purpose Built Films, our short films are designed to do one thing beautifully: tell a powerful story in a small, intentional space. Whether you are restoring a wetland, reintroducing species, or building a circular product, a short film lets people see the impact, not just read about it. We capture real people, real places, and real change, with an emphasis on working lightly on the land and showcasing sustainable practice on screen.",
        details: [
            "We plan each film around your purpose. That might be a 60–120 second hero piece for your website, a two-minute story for a funding report, or social-first cuts to help your work reach new audiences. Our shoots are lean and considered, using crews and equipment appropriate to rewilding and conservation environments, so we do not damage the very places we are celebrating.",
            "Because we work in this sector, we know the visuals matter. We prioritise natural light, texture, and sound so viewers feel like they are standing on site with you. Where it helps the story, we weave in interviews, voiceover, or motion graphics to explain the why behind the work. The result is a short, cinematic film that feels alive, rooted in place, and completely aligned with your organisation’s values.",
            "If you are looking for something that can be shared with stakeholders, funders, volunteers, or the wider public, a short film is the most agile format we offer. Pair it with our Pollinators add-ons for social cutdowns, captions, and extra versions, and you have a whole mini campaign from one purposeful shoot.",
        ],
    },
    {
        title: "CEO Branding",
        image: "/assets/images/service-ceo-branding.webp",
        alt: "CEO and founder branding films for rewilding organisations and conservation charities, Bristol",
        intro: "Purpose-led organisations are powered by people, and often the clearest story sits with the person at the top. Our CEO Branding films give your leadership a confident, human voice on camera. We create short, high-quality pieces that introduce who you are, what you believe, and why this work matters now. It is not corporate gloss; it is clear, grounded storytelling that helps partners, funders, and audiences trust you.",
        details: [
            "Because Purpose Built Films works in rewilding and sustainability, we understand you may not want to sit in front of a white backdrop talking about growth targets. We can film you in context – on site, in nature, or in the places your decisions make a difference – and show that your leadership is aligned with your environmental and social values. We keep crews small, work lightly, and make sure the locations we use reflect the integrity of your organisation.",
            "A CEO Branding film can do a lot of work for you: sit on your website’s About page, support a funding round, introduce you at events, or become the core asset for LinkedIn and other social channels. We can build it around a single strong interview, then layer in b-roll of your projects, team, or sites so it feels cinematic rather than staged.",
            "Pair this service with our Pollinators add-ons for social cutdowns, captions, and alternate edits (for internal vs external audiences), and you have a flexible set of assets that consistently tell your story, wherever people discover you.",
        ],
    },
    {
        title: "Monthly Content",
        image: "/assets/images/service-monthly-content.webp",
        alt: "Monthly nature and rewilding video content packages for charities and land managers, South West England",
        intro: "Some stories do not happen in one day on set. Restoration projects, community programmes, new product cycles – they all evolve over time. Our Monthly Content Packages are designed to keep telling that story as it unfolds. Instead of commissioning a single big film once a year, you get a steady stream of short, on-brand content you can share with stakeholders, funders, and your online audience every month.",
        details: [
            "We plan the content with you around your actual calendar – planting, habitat surveys, launches, volunteer days, reports – so we are capturing real activity, not inventing it. Crews stay lean and environmentally sensitive, and we reuse locations and b-roll wherever possible so the footprint stays low and the costs stay predictable. The result is a bank of films, social edits, and micro-stories that all look like they belong to the same organisation.",
            "Each month you receive ready-to-use assets, formatted for web and social, with options for captions and accessibility. Pair the package with our Pollinators add-ons (extra cutdowns, stills from footage, alternative VO) to get even more from each shoot. Over time, you build a living visual archive of your impact – not just a one-off film.",
        ],
    },
];
