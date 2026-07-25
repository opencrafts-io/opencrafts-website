/** The team, rendered on /about. */

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  github?: string;
  linkedin?: string;
  instagram?: string;
}

export const team: TeamMember[] = [
  {
    name: "Erick Muuo",
    role: "Chief Executive Officer & Software Developer",
    bio: "When we first met Erick, he couldn't stop yapping about C's iron-clad supremacy over other programming languages. When he's not busy roasting everyone else's code, he's probably having a BBQ with his own, just to keep things fair.",
    github: "https://github.com/IamMuuo",
    linkedin: "https://www.linkedin.com/in/erickmuuo",
  },
  {
    name: "Sam Ngigi Nyongo",
    role: "Vice CEO & Software Developer",
    bio: "Focused and determined.",
    github: "https://github.com/ngigin",
    linkedin: "https://www.linkedin.com/in/ngigi-nyongo-47b213243",
    instagram: "https://www.instagram.com/ngigi.nyongo/",
  },
  {
    name: "Baraka Mnjala Mbugua",
    role: "CFO & DevOps Strategist",
    bio: "From infrastructure to F1, Baraka engineers systems that move fast, scale smart, and never pit unless it's planned.",
    github: "https://github.com/eiidoubleyuwes",
    linkedin: "https://www.linkedin.com/in/baraka-mbugua/",
  },
  {
    name: "Eugene Wachira Mwangi",
    role: "Chief Technology Officer & Software Developer",
    bio: "A man of few words who cracks jokes during the day and cracks code during the night.",
    github: "https://github.com/Eugene600",
    linkedin: "https://www.linkedin.com/in/eugene-wachira/",
  },
  {
    name: "Jessica Nzembi Gatura",
    role: "Software Developer",
    bio: "Problem solver and occasional overthinker. Also just a girl.",
    github: "https://github.com/jessNzembi",
    linkedin: "https://www.linkedin.com/in/jessica-gatura-7ab182263/",
  },
  {
    name: "Prince Benedict",
    role: "Software Developer & HR Manager",
    bio: "I do my best work in incognito mode. Part-time human, full-time overthinker. Still waiting for my Hogwarts letter.",
    github: "https://github.com/ordo-chao",
    linkedin: "https://www.linkedin.com/in/prince-benedict-491776299/",
    instagram: "https://www.instagram.com/bx2_red/",
  },
];
