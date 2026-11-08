export interface TeamMember {
    name: string;
    role: string;
    image: string;
    alt: string;
    bio: string;
    /** Optional extra markup under the bio, e.g. a link */
    extraHtml?: string;
}

export const team: TeamMember[] = [
    {
        name: "Adam Laister",
        role: "Founder and Director of Photography",
        image: "/assets/images/team-adam-laister-art-director-camera-operator-bristol.webp",
        alt: "Adam Laister — rewilding and wildlife documentary filmmaker, founder of Purpose Built Films, Bristol",
        bio: "Adam has a background in adventure and wildlife filmmaking, capturing footage for major broadcasters, working on flagship productions such as Blue Planet 3. His expertise spans across various camera systems, ranging from gimbals to underwater cinematography, aerial, long-lens, time-lapse, and the raw authenticity of handheld filming. He has a strong sense for composition and is always seeking new ways to tell a story with advancements of modern technology. Having filmed all over the globe, he thrives working in remote and challenging environments, but is just as happy filming in some woods or a wetland in the UK!",
    },
    {
        name: "Nick Jones",
        role: "Art Director and Camera Operator",
        image: "/assets/images/team-nick-jone-art-director-camera-operator-bristol.webp",
        alt: "Nick Jones — Art Director and Camera Operator, nature and conservation film production, Bristol",
        bio: "Nick is a passionate and commercially driven creative with unwavering commitment to precision, consistency, and execution. With a Specialism in TV pitch deck design over the past 7 years and over 20 years of combined professional experience in design, film, animation, identity, print, digital and social for global brands. Nick thrives working on multiple projects, collaborating with colleagues and adjacent teams to present a full range of solutions. Personal ethos to push boundaries, crafting ideas into strategic and purposeful content. Award winning filmmaker, commercial diver and drone pilot, he has worked on development and productions for BBC, Sky, Netflix, Prime, Nat Geo and more.",
    },
    {
        name: "Joey Haines",
        role: "Development Producer and Self shooting PD",
        image: "/assets/images/team-joey-haines-development-producer-bristol.webp",
        alt: "Joey Haines — Development Producer and wildlife documentary filmmaker, Purpose Built Films, Bristol",
        bio: "Joey is an award winning filmmaker with strong editorial instincts and technical expertise. He is highly skilled in developing stories that meet client and channel needs, Joey has delivered content for major broadcasters and brands across linear and digital. He's known for clear communication and strong relationships with contributors and talent, Joey brings creativity, insight, and reliability to every production.",
    },
    {
        name: "Georgie Maw Warner",
        role: "Rewilding Partner & On-Screen Collaborator",
        image: "/assets/images/team-georgie-maw-warner-rewilding-partner-bristol.webp",
        alt: "Georgie Maw Warner — Rewilding Partner and conservation filmmaker, Somerset and South West England",
        bio: "Georgie has a background in conservation biology and is currently rewilding her farm, just outside Bath, Somerset. She is passionate about nature restoration and this has connected her to many others on a similar journey. Her ambition is to visit other sites across the UK and further afield, to tell their story, learn more about the great work they are doing and the schemes they are using which can aid landowners to increase the biodiversity of their land, while maintaining a functioning farm.",
        extraHtml: "<p>See more about her work at<br /> <a href=\"https://wonderfulwildwest.org/\">Wonderful Wild West</a></p>",
    },
];
