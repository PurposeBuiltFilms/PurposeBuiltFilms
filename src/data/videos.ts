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
    youtubeId: "kV-DpfCgDyM",
    title: "Stronger Together - a drama about racism, written by and for primary school children",
    caption: "The story follows a year 6 student who experiences racism on the football pitch, in class, and online, but eventually gets the support he needs to deal with the situation.",
  },
  {
    youtubeId: "FSFV_muVTVM",
    title: "Bristol Cycling Centre - the inclusive cycle skills training facility",
    caption: "This film was created for Bristol Cycling Centre as part of a marketing campaign for a bid to get more funding. They are doing a great thing over there, with the facilities to provide a safe environment for people of all abilities and disabilities to learn to cycle.",
  },
  {
    youtubeId: "eSbYI3fn7fg",
    title: "Wild Garlic cook out with George Linklater - On The Wild's Side teaser",
    caption: "Come with George as he takes you into the British countryside on a beautiful spring day, foraging the ingredients for his meal that he cooks within a stunning woodland filled with wild garlic.",
  },
];
