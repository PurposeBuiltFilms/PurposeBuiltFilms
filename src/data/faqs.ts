export interface Faq {
    question: string;
    /** Answer markup shown on the page */
    answerHtml: string;
    /** Plain-text summary used in the FAQPage JSON-LD. Omit to leave the question out of the schema. */
    schemaAnswer?: string;
}

export const faqs: Faq[] = [
    {
        question: "How do we get started?",
        answerHtml: `
<p>Just drop us a message at <a href="mailto:info@purposebuiltfilms.com">info@purposebuiltfilms.com</a> or fill out <a href="#contact-form">our contact form</a>.</p>
<p>We’ll set up a call to learn about your goals and map out your project from there!</p>`,
        schemaAnswer: "Just drop us a message at info@purposebuiltfilms.com or fill out our contact form. We'll set up a call to learn about your goals and map out your project from there.",
    },
    {
        question: "Can you really film a documentary in one day?",
        answerHtml: `
<p>Yes.</p>
<p>We have over 25 years of experience working in high-end broadcast TV and on-demand documentaries. We know exactly what we need to get a story across effectively.</p>
<p>We leave room for authentic moments - they are the crux of your film - but we work efficiently.</p>
<p>We know our kit, we know our craft, and we'll deliver the end results to you fast - at a fraction of the cost of high-end TV work.</p>`,
        schemaAnswer: "Yes. We have over 25 years of experience working in high-end broadcast TV and on-demand documentaries. We work efficiently while leaving room for authentic moments.",
    },
    {
        question: "What services do you offer?",
        answerHtml: `
<p>We specialize in video production. <br />everything from micro-content and brand stories, to event coverage and social media campaigns.</p>`,
    },
    {
        question: "I want a unique cinematic 'look' - can you do that?",
        answerHtml: `
<p>We can, absolutely. </p>
<p>We work with you in our initial discussion to create a custom look that really embodies your brand. From filming to grade, we know what we're doing  and how to get you what you want.</p>
<p>Just talk to us about our vintage lens collection (but be prepared to have your ear talked off) - we can make your film stand out from the crowd with a bespoke, cinematic style.</p>`,
    },
    {
        question: "What makes Purpose Built Films different from other video companies?",
        answerHtml: `
<p>We focus on real stories and authentic emotion - using real people, not actors, and honest moments over scripts. Your audience will feel the difference.</p>`,
        schemaAnswer: "We focus on real stories and authentic emotion — using real people, not actors, and honest moments over scripts. Our team has backgrounds in high-end broadcast documentary production for BBC, Netflix, and National Geographic.",
    },
    {
        question: "How long does the video production process take?",
        answerHtml: `
<p>Depending on the project, most videos are turned around in 2-6 weeks. Micro-content is usually even quicker! We’ll always keep you in the loop.</p>`,
        schemaAnswer: "Depending on the project, most videos are turned around in 2-6 weeks. Micro-content is usually even quicker.",
    },
    {
        question: "How much does a film cost?",
        answerHtml: `
<p>Pricing depends on your needs, scale, and the complexity of the shoot—but we’re always upfront and clear. Contact us for a quick quote.</p>
<p>We work with budgets and companies of all sizes - from single person startups to major organisations - and if you have a story, we'll find a way to get it told. We are particularly interested in helping companies focussed on <i class="accent-hover">positive change,</i> so don't be shy about getting in touch.</p>
<p>Generally, a film can start at around £1,500 + VAT. This gets you a full day filming with a TV professional who has worked with the best in the business, as well as a fast-turnaround edit and revisions.</p>
<p>Because of our TV background and connections, we are infinitely scalable and no film or idea is off limits.</p>`,
        schemaAnswer: "Pricing depends on your needs, scale, and the complexity of the shoot. Generally, a film can start at around £1,500 + VAT. Contact us for a quick quote.",
    },
    {
        question: "Do you work with small businesses or only big brands?",
        answerHtml: `
<p class="fs-5">Both!</p>
<p>We love working with passionate startups as much as established brands. If you have a story to tell, we want to help share it.
</p>`,
        schemaAnswer: "Both. We love working with passionate startups as much as established brands. If you have a story to tell, we want to help share it.",
    },
    {
        question: "Can you help with ideas if we’re not sure what we want?",
        answerHtml: `
<p>Our founder, Adam, has worked in development with some of the biggest names in TV</p>
<p>His super power is turning ideas (however vague) into emotional, visually stunning stories. Book a free ideas call to discuss.</p>`,
    },
    {
        question: "Can you handle everything, including editing and delivery?",
        answerHtml: `
<p>Yes, we offer full-service production: planning, shooting, editing, and final delivery in the format you need.</p>`,
    },
];
