const config = {
  title: "Hoagduc27 | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Hoagduc27, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Hoagduc27, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Hoagduc27",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",

    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Hoagduc27",
  email: "Hoagduc27@gmail.com",
  site: "https://fb.com/hoagduc27",

  // for github stars button
  githubUsername: "Hoagduc27",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/nothotchaddi",
    linkedin: "https://www.linkedin.com/in/Hoagduc27/",
    instagram: "https://www.instagram.com/hotchaddi",
    facebook: "https://www.facebook.com/HotChaddi/",
    github: "https://github.com/Hoagduc27",
  },
};
export { config };
