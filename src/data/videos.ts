export interface Video {
    /** YouTube video ID */
    youtubeId: string;
    title: string;
    caption: string;
}

export const videos: Video[] = [
    {
        youtubeId: "89uXvNpw5_0",
        title: "Seawood",
        caption: "Filmed over two days with Kirsty Elwood, an artist making beautiful, joyful pieces of art from driftwood collected near her home in Cornwall. We talked to Kirsty about art, the ocean - and slowing down.",
    },
    {
        youtubeId: "5oU1-DNBJmg",
        title: "Farm Animal Referral Service at Langford Vets",
        caption: "We've been working with Langford Veterinary Services (Small animal Hospital) and the University of Bristol on a monthly basis to showcase the incredible work they do in caring for animals and teaching the next generation of veterinarians. Part of a series of films.",
    },
    {
        youtubeId: "5bwTMO0vo-w",
        title: "Cotswold Fayre B-Corp Conference 2025",
        caption: "Cotswold Fayre are a B-Corp distributing food and drink made with passion and care for the planet. We stopped by their suppliers conference earlier this year to find out more.",
    },
    {
        youtubeId: "cSVn86caQOk",
        title: "Coca-Cola: Increase Reusable Packaging!",
        caption: "We accompanied NGO Ocean charity OCEANA for their groundbreaking campaign in London back in 2024",
    },
];
