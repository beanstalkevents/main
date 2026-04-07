export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  coverImage: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "evelynwebster",
    title: "Evelyn Webster, CEO of SoulCycle",
    author: "Ben Cogan",
    date: "August 18, 2025",
    excerpt: "Evelyn Webster is CEO of SoulCycle and brings both business focus and rider perspective to Beanstalk.",
    coverImage: "https://images.squarespace-cdn.com/content/v1/66c4e557a4ad6b7723de12da/1755526167751-3BM7JI3GBWC674KNMP51/Internal+Copy+-+Newsletter+Portraits.png",
    content: `Evelyn Webster is CEO of SoulCycle and brings both business focus and rider perspective to Beanstalk 2026.

She joins a lineup of operators who've built and scaled some of the most recognizable consumer brands in America.

SoulCycle pioneered the boutique fitness category and has maintained its place as a cultural touchstone for over a decade. Evelyn's lens spans both the operational complexity of a premium experience brand and the consumer psychology that keeps riders coming back.

At Beanstalk, she'll be part of the boardroom discussions and intimate sessions that make the conference unique—not a keynote stage, but real conversation with founders and executives who are dealing with the same challenges.`,
  },
  {
    slug: "jeffraider",
    title: "Jeff Raider, Co-Founder & Co-CEO of Mammoth Brands",
    author: "Ben Cogan",
    date: "August 15, 2025",
    excerpt: "Jeff Raider helped scale Warby Parker, Harry's, and now Mammoth Brands. He's bringing that experience to the Beanstalk room.",
    coverImage: "https://images.squarespace-cdn.com/content/v1/66c4e557a4ad6b7723de12da/1755262091460-UZLB90FWV1PC7TI3FPLY/Jeff+Raider+%285%29.png",
    content: `Jeff Raider is one of the most accomplished builders in the DTC space. He co-founded Warby Parker, then co-founded Harry's, and now leads Mammoth Brands—a platform for building the next generation of consumer companies.

His track record is rare: multiple exits, multiple categories, and a consistent ability to identify white space in markets that others thought were settled.

At Beanstalk, Jeff brings the perspective of someone who has done this more than once—and who understands the mechanics of scaling a brand from zero to something the whole industry pays attention to.`,
  },
  {
    slug: "benmckean",
    title: "Ben McKean, Founder & CEO of Hungryroot",
    author: "Ben Cogan",
    date: "July 23, 2025",
    excerpt: "Ben McKean is the founder of Hungryroot, the AI-powered grocery assistant built to make food decisions easier.",
    coverImage: "https://images.squarespace-cdn.com/content/v1/66c4e557a4ad6b7723de12da/1753253474240-5A0OGI3UDE3KFPK4SK42/44.png",
    content: `Ben McKean founded Hungryroot with a clear thesis: most people don't want to think about food, they want food to work for them. The result is an AI-powered grocery platform that learns your preferences and handles the decisions most people find exhausting.

Hungryroot has become one of the most interesting case studies at the intersection of AI and consumer behavior—a brand that is genuinely using technology to change the relationship between people and what they eat.

Ben joins Beanstalk to talk about that intersection, and what he's learned building a brand that sits somewhere between grocery, meal kits, and personalization software.`,
  },
  {
    slug: "nourasakkijha",
    title: "Noura Sakkijha, Co-Founder & CEO of Mejuri",
    author: "Ben Cogan",
    date: "July 18, 2025",
    excerpt: "Noura Sakkijha built Mejuri into a brand led by women, for women. She's bringing that clarity to the room at Beanstalk.",
    coverImage: "https://images.squarespace-cdn.com/content/v1/66c4e557a4ad6b7723de12da/1753190441152-CTI5V3VAJENUKYPVL7VB/46.png",
    content: `Noura Sakkijha co-founded Mejuri on a simple but powerful premise: women shouldn't have to wait for someone else to buy them fine jewelry. They can buy it for themselves.

That insight—and the brand identity it produced—turned Mejuri into one of the most significant DTC success stories of the past decade. The brand has expanded into retail, built a loyal community, and maintained a distinct point of view throughout.

Noura brings operational depth and brand clarity to Beanstalk—the kind of founder who has navigated the full journey from early-stage scrappiness to scaled brand management.`,
  },
  {
    slug: "gabrielwhaley",
    title: "Gabriel Whaley, Founder of MSCHF",
    author: "Ben Cogan",
    date: "July 16, 2025",
    excerpt: "Gabriel Whaley is the founder of MSCHF, the studio behind some of the boldest drops in culture.",
    coverImage: "https://images.squarespace-cdn.com/content/v1/66c4e557a4ad6b7723de12da/1753190598042-SJPRMIH8175CL95QUILP/42.png",
    content: `Gabriel Whaley founded MSCHF with a different model than most consumer brands: don't build a product line, build a drop cadence. Each release is designed to generate conversation, controversy, or both.

The result has been a string of cultural moments that most brands couldn't engineer if they tried—from the Satan Shoes to Big Red Boots to collaborations that blur the line between art project and retail product.

Gabriel joins Beanstalk to talk about what it means to build a brand when the brand itself is the provocation—and what founders can learn from a model that treats marketing as product.`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
