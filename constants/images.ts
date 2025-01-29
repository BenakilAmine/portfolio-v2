interface ImageConfig {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export const projectImages: Record<string, ImageConfig> = {
  nextWebsite: {
    src: "/NextWebsite.png",
    width: 2880,
    height: 1620,
    alt: "Modern Next.js Portfolio Preview",
  },
  cardImage: {
    src: "/CardImage.png",
    width: 2880,
    height: 1620,
    alt: "Interactive Website Cards Preview",
  },
  spaceWebsite: {
    src: "/SpaceWebsite.png",
    width: 2880,
    height: 1620,
    alt: "Space Themed Website Preview",
  },
  streamfizz: {
    src: "/Bibliotheque-media-streamfizz.jpg",
    width: 2880,
    height: 1620,
    alt: "Streamfizz Website Preview",
  },
  lesentier: {
    src: "/lesentier.png",
    width: 2880,
    height: 1620,
    alt: "Le Sentier Website Preview",
  },
};

export const skillImages: Record<string, ImageConfig> = {
  html: {
    src: "/html.png",
    width: 64,
    height: 64,
    alt: "HTML Logo",
  },
  css: {
    src: "/css.png",
    width: 64,
    height: 64,
    alt: "CSS Logo",
  },
  javascript: {
    src: "/js.png",
    width: 64,
    height: 64,
    alt: "JavaScript Logo",
  },
  // Ajoutez d'autres images de compétences ici
};

export const socialImages: Record<string, ImageConfig> = {
  instagram: {
    src: "/instagram.svg",
    width: 24,
    height: 24,
    alt: "Instagram Logo",
  },
  facebook: {
    src: "/facebook.svg",
    width: 24,
    height: 24,
    alt: "Facebook Logo",
  },
  discord: {
    src: "/discord.svg",
    width: 24,
    height: 24,
    alt: "Discord Logo",
  },
}; 