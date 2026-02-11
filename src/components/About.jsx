// About section with bio, experience, and education timelines

import Reveal from "./Reveal";

// Social media links
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/camivillalobosucf",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/camila-villalobos-ucf023",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: "Behance",
    url: "https://www.behance.net/camilavillalobos",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
      </svg>
    ),
  },
];

// Work experience data
const experience = [
  {
    title: "Art Director | Graphic Design Manager - FASTSIGNS",
    meta: "January 2025 – Present",
    details: [
      "Developed a custom Adobe Illustrator script using JavaScript integrated with the job management system to auto-populate templates and save files, reducing a repetitive 5-minute task to ~1 second and contributing to ~$50K in additional annual revenue; key driver for promotion.",
      "Built a small internal React application to track time logs for designers, improving workload visibility, reducing turnaround time by 20%, and helping identify bottlenecks.",
      "Applied user flow optimization to branded digital catalogs, improving ordering experience and increasing repeat client engagement by 50%.",
    ],
  },
  {
    title: "Graphic Designer – FASTSIGNS",
    meta: "May 2024 – January 2025",
    details: [
      "Joined as an experienced designer, clearing the design board daily, significantly improving workflow consistency.",
      "Leveraged prior experience in the industry to be fully operational within one week, requiring no additional training.",
      "Assisted in converting quick estimates into sales, emphasizing the importance of speed in client interactions and increasing sales by 15%.",
    ],
  },
  {
    title: "Graphic Designer – Platinum Signs & Design",
    meta: "July 2021 – May 2024",
    details: [
      "Built a simple web based order intake form using HTML, CSS, and JavaScript to standardize client submissions, reducing errors and revision requests by 40%.",
      'Created "production specification sheets" to ensure consistency in production outputs for repeat orders, reducing customer complaints about discrepancies by 40%.',
      "Developed production files for the CNC router, increasing production rate by 30% for a major vendor.",
    ],
  },
  {
    title: "Graphic Designer – Infinity Signs & Graphix",
    meta: "December 2019 – July 2021",
    details: [
      "Created detailed signage drawings and implemented 3D renderings, resulting in 8 out of 10 customers purchasing the presented designs due to increased engagement.",
      "Learned and operated CNC router and flatbed printer, increasing production efficiency by 25%.",
      "Streamlined workflow from design to production, reducing revisions by 30% and ensuring smooth transitions.",
    ],
  },
];

// Education data
const education = [
  {
    title: "B.A. in Digital Media – University of Central Florida",
    details: [
      "Relevant Coursework: Client-Side Scripting, Front-End Web Design, Server-Side Scripting, Mobile Development, User-Centered Design, Low-Code Development, and Capstone I & II. Hands-on projects include a full-stack restaurant dietary-restriction app, movie review CMS with authentication, B2B private catalog prototype, AI-assisted fitness mobile app, and ovulation tracking UX/UI prototype",
      "GPA: 3.98, President's List.",
      "Skills: Front-End Development, HTML, CSS, JavaScript, Responsive Web Design, UI/UX Design, WordPress, PHP, MySQL, React Native, Figma, Wireframing, Prototyping, Accessibility (WCAG), API integration, GitHub, Claude Code, Adobe Illustrator, Adobe Photoshop.",
    ],
  },
  {
    title: "Associate in Arts – Valencia College",
    details: [
      "Focus: Design processes and creating experiential design.",
      "Skills: Ideation, design development, presentation, and feedback.",
    ],
  },
];

// Single timeline entry with dot marker and card
function TimelineItem({ item, index }) {
  return (
    <Reveal delay={100 + index * 80}>
      <div className="relative">
        {/* Timeline dot */}
        <span className="absolute -left-[18px] sm:-left-[25px] top-[6px] h-2.5 sm:h-3 w-2.5 sm:w-3 rounded-full bg-white/80 ring-2 ring-white/40" />

        {/* Card content */}
        <div className="mirror-glass rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4">
          <div className="font-medium text-neutral-800 text-sm sm:text-base">
            {item.title}
          </div>

          {item.meta && (
            <div className="mt-1 text-xs sm:text-sm text-neutral-600">
              {item.meta}
            </div>
          )}

          {/* Bullet points with proper alignment */}
          {item.details && item.details.length > 0 && (
            <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-neutral-700">
              {item.details.map((detail, idx) => (
                <li key={idx} className="leading-relaxed flex items-start">
                  <span className="shrink-0 mr-2 mt-0.5">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Reveal>
  );
}

// Vertical timeline with connecting line
function Timeline({ items }) {
  return (
    <div className="relative pl-4 sm:pl-6">
      <div className="absolute left-2 top-0 bottom-0 w-px bg-white/40" />
      <div className="space-y-4 sm:space-y-6">
        {items.map((item, i) => (
          <TimelineItem key={item.title} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 py-6 sm:py-12 px-4 sm:px-6"
      aria-labelledby="about-heading"
    >
      <div className="flex flex-col gap-6 sm:gap-8 max-w-6xl mx-auto">
        {/* Heading */}
        <Reveal>
          <h2
            id="about-heading"
            className="text-2xl sm:text-3xl font-semibold text-neutral-700 text-center"
          >
            Get to know me
          </h2>
        </Reveal>

        {/* Bio section - centered container with picture on left */}
        <Reveal delay={80}>
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center max-w-4xl mx-auto">
            {/* Profile picture */}
            <div className="w-32 sm:w-40 md:w-44 lg:w-48 shrink-0">
              <div className="aspect-square rounded-full overflow-hidden ring-2 ring-white/40">
                <img
                  src="/profilepic.jpeg"
                  alt="Portrait of Camila Villalobos"
                  loading="lazy"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.classList.add("bg-neutral-300");
                  }}
                />
              </div>
            </div>

            {/* Bio text and social links */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-neutral-800 font-medium leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl">
                I'm a graphic designer and digital media student specializing in
                UX/UI and web design. I combine visual clarity, accessibility, and
                strategy to create thoughtful digital experiences, working
                efficiently across branding, interfaces, and front-end
                implementation with strong collaboration and problem-solving
                skills.
              </p>

              {/* Social icons */}
              <div className="flex gap-4 mt-4 justify-center md:justify-start">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 hover:text-neutral-900 transition-colors duration-200 p-2 rounded-full hover:bg-white/40"
                    aria-label={`Visit ${social.name} profile`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Experience section */}
        <div className="mt-4 sm:mt-6">
          <Reveal>
            <h3 className="text-lg sm:text-xl font-semibold text-neutral-700 mb-4 sm:mb-6">
              Experience
            </h3>
          </Reveal>
          <Timeline items={experience} />
        </div>

        {/* Education section */}
        <div className="mt-8 sm:mt-10">
          <Reveal>
            <h3 className="text-lg sm:text-xl font-semibold text-neutral-700 mb-4 sm:mb-6">
              Education
            </h3>
          </Reveal>
          <Timeline items={education} />
        </div>
      </div>
    </section>
  );
}
