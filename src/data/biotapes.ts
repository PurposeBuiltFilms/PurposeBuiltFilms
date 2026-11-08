export interface BiotapesStep {
    title: string;
    image: string;
    /** Intrinsic pixel size, so the browser reserves space before the image loads */
    width: number;
    height: number;
    alt: string;
    intro: string;
    items?: string[];
}

export const steps: BiotapesStep[] = [
    {
        title: "Capture",
        image: "/assets/images/biotapes-step-1.webp",
        width: 350,
        height: 350,
        alt: "Biotapes capture step — standardised 3-angle ecological filming protocol for habitat baselines",
        intro: "A simple, universal 3-angle filming protocol captures ecological baselines:",
        items: ["establishing wide", "habitat mid-shot", "macro detail"],
    },
    {
        title: "Metadata",
        image: "/assets/images/biotapes-step-2.webp",
        width: 350,
        height: 350,
        alt: "Biotapes metadata embedding — GPS, timestamp and operator ID recorded for ecological baseline footage",
        intro: "Each clip automatically embeds:",
        items: ["GPS", "timestamp", "operator ID", "device ID"],
    },
    {
        title: "Ingest + Hashing",
        image: "/assets/images/biotapes-step-3.webp",
        width: 350,
        height: 350,
        alt: "Biotapes cryptographic hashing — tamper-proof verification ID generated for nature market compliance",
        intro: "Footage is passed through the Biotapes ingest layer, generating:",
        items: ["BiotapesHash_v1 (cryptographic proof)", "Biotapes Verification ID"],
    },
    {
        title: "Storage",
        image: "/assets/images/biotapes-step-4.webp",
        width: 350,
        height: 350,
        alt: "Biotapes secure storage — ecological baseline evidence stored with verification ID for BNG and TNFD reporting",
        intro: "Partners store the file and ID in their systems.",
    },
    {
        title: "Verification",
        image: "/assets/images/biotapes-step-5.webp",
        width: 350,
        height: 350,
        alt: "Biotapes verification — any platform can verify file integrity and tamper-proof status of ecological recordings",
        intro: "Any platform can verify:",
        items: ["file integrity", "metadata", "authenticity", "tamper-proof status"],
    },
    {
        title: "Evidence Package",
        image: "/assets/images/biotapes-step-6.webp",
        width: 350,
        height: 350,
        alt: "Biotapes evidence package — standardised ecological data export for regulators, investors and insurers",
        intro: "Data can be exported into a standardised package for:",
        items: ["regulators", "investors", "insurers", "ecological consultants"],
    },
];
