interface AccordionItem {
  title: string;
  content: string;
}

const accordionData: AccordionItem[] = [
  {
    title: "What technologies do you work with?",
    content:
      "I primarily work with the MERN stack — MongoDB, Express.js, React.js, and Node.js. I also use tools like Git, GitHub, Firebase, Tailwind CSS, and REST APIs to build full-stack web applications.",
  },
  {
    title: "Are you open to freelance or remote work?",
    content:
      "Yes! I’m open to freelance projects, internships, and remote opportunities where I can contribute and also improve my skills as a developer.",
  },
  {
    title: "What technologies do you specialize in?",
    content:
      "I specialize in HTML5, CSS3, JavaScript (ES6+), React.js, and Tailwind CSS. I also have experience with TypeScript, Next.js, and frontend tooling like Webpack, Vite, and ESLint.",
  },
  {
    title: "How do you stay updated with frontend trends?",
    content:
      "I follow blogs, attend webinars, read documentation, and experiment with new tools and frameworks. I’m active on platforms like Dev.to, Twitter, and GitHub.",
  },
  {
    title: "Do you have experience working with backend technologies?",
    content:
      "Yes, while my main focus is frontend, I have experience integrating with RESTful APIs and working with backend tools like Node.js, Express.js, and Firebase for full-stack applications.",
  },
  {
    title: "Do you follow responsive design and accessibility standards?",
    content:
      "Absolutely. I ensure all my projects are fully responsive, mobile-first, and follow WCAG accessibility guidelines to provide an inclusive experience for all users.",
  },
];

export default accordionData;
