// Portfolio projects data
// initialProjects: shown on page load
// additionalProjects: shown when "See more projects" is clicked

export const initialProjects = [
  {
    id: 2,
    title: "Billings App Re-Design Case Study",
    description:
      "UX/UI case study focused on redesigning the Billings Ovulation Tracking App to enhance usability, modernize the visual design, and improve the user journey for individuals tracking fertility.",
    image: "/project2_billingsapp.gif",
    link: "https://www.behance.net/gallery/200864449/Case-Study-Billings-Ovulation-App-Redesign#",
  },
  {
    id: 3,
    title: "AriaFit React Web Application",
    description:
      "AriaFit is a responsive fitness coaching web app built with React and Tailwind CSS, developed using Claude Code to accelerate setup and component structure. It features multi-page navigation, program listings, and a validated contact flow, deployed through an automated GitHub → Netlify pipeline.",
    image: "/project3_ariafit.png",
    link: "https://ariafit.netlify.app/",
  },
  {
    id: 5,
    title: "St Mary Magdalen Web Re-Design Case Study",
    description:
      "Redesign of the St. Mary Magdalen Catholic Church website focused on improving usability, clarity, and accessibility. The project streamlined navigation, reorganized content, and introduced a modern, welcoming visual system to better serve diverse parishioners across ages and devices while maintaining the church’s identity",
    image: "/project6_smm.gif",
    link: "https://www.behance.net/gallery/205967801/Web-Design-St-Mary-Mag-Case-Study",
  },
];

export const additionalProjects = [
  {
    id: 4,
    title: "SafeBites Restaurant App HI-FI Prototype",
    description:
      "A dietary-restriction restaurant finder app designed to help users with food allergies and dietary needs discover safe dining options. Served as UX/UI Lead, creating wireframes, prototypes, and user flows.",
    image: "/project4_safebites.png",
    link: "https://www.figma.com/proto/pNkh6vKDf2PltK75ZibOaD/Capstone-Restaurant-App?node-id=233-261&p=f&t=kbQkAC0QcysBpUKz-1&scaling=scale-down&content-scaling=fixed&page-id=233%3A260&starting-point-node-id=233%3A261",
  },
  {
    id: 1,
    title: "Movie Review Content Management System",
    description:
      `CMS project that allows users to explore and comment on movie reviews. Built with PHP, MySQL, and HTML/CSS, it features user authentication and alphabetical sorting, creating an interactive and organized experience for movie reviewers. If you want to try it out, click "See Project" and login with the user and password "review"`,
    image: "/project1_moviereview.png",
    link: "https://students.gaim.ucf.edu/~ca575679/dig3134c/assignment05/login.php",
  },
  {
    id: 6,
    title: "Orderly B2B Platform UX/UI Design Case Study",
    description:
      "A private B2B catalog and ordering platform designed to streamline the wholesale ordering process. Features include product browsing, order management, and client account dashboards.",
    image: "/project5_orderly.jpg",
    link: "https://drive.google.com/drive/folders/1XyoLDd7SvToXhrtlo0s3Nzhk_0vCFXff?usp=sharing",
  },
];

export const projectsData = [...initialProjects, ...additionalProjects];

// Graphic design gallery items
// Each project has up to 3 images — name them gd1.jpg, gd1_2.jpg, gd1_3.jpg etc.
// Clicking a card opens a lightbox that lets the user slide through all images.
export const graphicDesignProjects = [
  {
    id: "gd1",
    title: "Dapper Tots Branding",
    images: ["/gd1.jpg", "/gd1_2.jpg", "/gd1_3.jpg"],
    designThinking: `The name "Dapper Tots" gave me a nice tension to work with. Sophisticated on one side, small and playful on the other. I wanted parents to feel proud carrying this brand, not just charmed by it.\n\nThe palette came from thinking about a nursery shelf: soft sky blue, sage green, blush, and cream. Each color needed to work on its own and mix well together so collections would not clash. I leaned into rounded, bubbly letterforms that have personality without feeling chaotic, the kind of type a child would draw if they could also kern.\n\nThe cloud mascot was an early idea I kept coming back to. It is innocent, scalable, and ties the "Cloud Comfort" sub-line directly into the visual language. On the shipping boxes, the brand pattern wraps the entire surface, because unboxing is part of the experience, and I wanted that first moment to feel like something.`,
  },
  {
    id: "gd2",
    title: "Echanté Cosmetics Branding",
    images: ["/gd2.jpg", "/gd2_2.jpg", "/gd2_3.jpg"],
    designThinking: `Echanté means "enchanted" in French, and the client wanted that feeling: elevated, a little romantic, but still approachable. Not a brand that intimidates you at the counter.\n\nThe gradient from soft pink to deep magenta was an early lock. It reads feminine and modern without sliding into cliché, and it photographs beautifully against the neutral backdrops beauty brands love. I kept the "EÉ" monogram prominent but clean. The accent mark does a lot of work, signaling European refinement without over-explaining it.\n\nLuxury brands need to breathe, so I kept the typography spaced and restrained. The topographic line texture in the product box adds depth and tactility, something to catch the eye on a shelf without pulling focus from the product itself. The business card flips to a darker purple to gold gradient, which is what you hand someone when you want them to remember you.`,
  },
  {
    id: "gd3",
    title: "Cakes & Love Branding",
    images: ["/gd3.jpg"],
    designThinking: `The client's ask was simple: make the packaging feel like a gift before anyone opens it. A lot of bakery brands default to pink or kraft paper, so I pushed toward a bold red. It is warm, it is celebratory, and it photographs beautifully against chocolate.\n\nThe white hand drawn doodle pattern (hearts, wedding cakes, ribbons) gives the boxes that artisan, handcrafted quality. It tells a story about what is inside without saying a word. I wanted someone walking past to immediately understand this is for celebrations.\n\nThe logo typography uses a melted drip treatment on "Cakes", a small detail that makes the brand feel coherent rather than assembled. The system lives on both a clean white card and a dark branded version, giving the client flexibility depending on whether they are packaging a wedding order or handing out a business card at a market.`,
  },
  {
    id: "gd4",
    title: "Arepas Café Menu Design",
    images: ["/gd4.jpg"],
    designThinking: `Menu design is really information architecture with branding on top. The challenge here was a genuinely large menu: arepas, cachapas, patacones, sandwiches, a kids section, beverages. Making it all feel organized without feeling clinical.\n\nI chose a dark espresso background because it performs well under restaurant lighting and gives the warm golden typography real presence. I set up a clear color hierarchy: white for headlines, golden yellow for category labels, softer warm tones for body text. That way customers have a natural reading path even when they are hungry and distracted.\n\nThe food photography strip across the top was a deliberate choice. Before a customer reads a single word, they should understand what kind of food this is. These are wall mounted boards, so I kept the type larger than I might on a print menu. Legibility at a distance was a hard requirement, not an afterthought.`,
  },
  {
    id: "gd5",
    title: "Uncle Mel's Backyard BBQ Logo Design",
    images: ["/gd5.jpg", "/gd5_2.jpg"],
    designThinking: `The brief basically wrote itself: summer, smoke, and legendary ribs. The client wanted something that felt like it had been on that corner for forty years, the kind of sign locals give directions by.\n\nI went full retro Americana. The stacked serif typography with stars, the fire and grill icon, the "Chicago Style Ribs & Sandwiches" tagline. Every element is doing double duty as branding and as storytelling. The gradient from deep red to bright orange almost radiates heat, like the sign itself is glowing from the inside.\n\nBefore finalizing, I tested the logo on an illuminated cabinet sign and on a dark wood surface. Both had to work without losing legibility or energy. The bold outlines and high contrast make sure the logo reads clearly whether it is backlit at night or printed on a napkin.`,
  },
  {
    id: "gd6",
    title: "PTR Solutions Branding",
    images: ["/gd6.jpg", "/gd6_2.jpg", "/gd6_3.jpg"],
    designThinking: `Most software companies land in the same safe blue and white zone. The goal here was to build something that felt technical and credible without being forgettable.\n\nThe circuit board motif embedded inside the P, T, and R letterforms was the central idea. It communicates "software" without spelling it out, and it turns the initials into a mark that rewards a second look. I kept the execution precise: thin lines, small nodes. Sloppiness in a tech brand erodes trust immediately.\n\nThe palette is tight: greys, silvers, white. That restraint signals precision. This is a B2B company walking into enterprise conversations, and the brand needed to feel like it belonged in that room. The full stationery system (letterhead, business cards, envelope, sticker) was designed with consistent margins and placement so the brand feels intentional at every touchpoint, not just on a screen.`,
  },
];
