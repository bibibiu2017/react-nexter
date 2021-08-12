type Navigation = {
  linkText: string;
  linkUrl: string;
};

const navigations: Navigation[] = [
  {
    linkText: "Find your dream home",
    linkUrl: "#",
  },
  {
    linkText: "Request proposal",
    linkUrl: "#",
  },
  {
    linkText: "Download the home planner",
    linkUrl: "#",
  },
  {
    linkText: "Contact us",
    linkUrl: "#",
  },
  {
    linkText: "Submit your property",
    linkUrl: "#",
  },
  {
    linkText: "Come work with us",
    linkUrl: "#",
  },
];

const copyrightText = `Copyright ${new Date().getFullYear()} by Jonas Schmedtmann. Feel free to use this project for your own purpose. This does NOT apply if you plan to produce your own video course or tutorials based on this project`;

export { navigations, copyrightText };
