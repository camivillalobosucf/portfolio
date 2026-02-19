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
  },
  {
    id: "gd2",
    title: "Echanté Cosmetics Branding",
    images: ["/gd2.jpg", "/gd2_2.jpg", "/gd2_3.jpg"],
  },
  {
    id: "gd3",
    title: "Cakes & Love Branding",
    images: ["/gd3.jpg"],
  },
  {
    id: "gd4",
    title: "Arepas Café Menu Design",
    images: ["/gd4.jpg"],
  },
  {
    id: "gd5",
    title: "Uncle Mel's Backyard BBQ Logo Design",
    images: ["/gd5.jpg", "/gd5_2.jpg"],
  },
  {
    id: "gd6",
    title: "PTR Solutions Branding",
    images: ["/gd6.jpg", "/gd6_2.jpg", "/gd6_3.jpg"],
  },
];
