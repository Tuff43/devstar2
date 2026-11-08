import { ReactNode } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface QuickLink {
  href: string;
  label: ReactNode;
  icon: ReactNode;
}

interface Resource {
  image: string;
  alt: string;
  title: string;
  text: string;
  href: string;
  cta: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const quickLinks: QuickLink[] = [
  {
    href: "https://www.grants.gov/search-grants",
    label: "Search Grants",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 48 48" className="w-14 h-14 fill-current flex-none">
        <circle cx="20" cy="20" r="13" fill="none" stroke="currentColor" strokeWidth="5" />
        <path d="m30 30 12 12" fill="none" stroke="currentColor" strokeWidth="5" />
      </svg>
    ),
  },
  {
    href: "#resources",
    label: "Get Started",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 48 48" className="w-14 h-14 fill-current flex-none">
        <path d="M27 5h16v16h-5V14L19 33l-4-4 19-19h-7z" />
        <path d="M37 27h6v16H5V5h16v6H11v26h26z" />
      </svg>
    ),
  },
  {
    href: "#resources",
    label: "Grant Policies",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 48 48" className="w-14 h-14 fill-current flex-none">
        <path d="M5 8h5v5H5zm10 0h28v5H15zM5 21h5v5H5zm10 0h28v5H15zM5 34h5v5H5zm10 0h28v5H15z" />
      </svg>
    ),
  },
  {
    href: "#resources",
    label: (
      <>
        Grant-Making
        <br />
        Agencies
      </>
    ),
    icon: (
      <svg aria-hidden="true" viewBox="0 0 48 48" className="w-14 h-14 fill-current flex-none">
        <path d="M2 14 24 3l22 11v4H2zm4 7h7v17H6zm12 0h7v17h-7zm13 0h7v17h-7zM2 42h44v4H2z" />
      </svg>
    ),
  },
  {
    href: "#support",
    label: "Prevent Scams",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 48 48" className="w-14 h-14 fill-current flex-none">
        <path d="M24 2 44 10v13c0 12-8 20-20 24C12 43 4 35 4 23V10zm0 6v32c9-4 14-10 14-18V14z" />
      </svg>
    ),
  },
  {
    href: "#resources",
    label: "Community Blog",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 48 48" className="w-14 h-14 fill-current flex-none">
        <circle cx="17" cy="15" r="8" />
        <circle cx="34" cy="16" r="7" />
        <path d="M1 40c0-8 7-14 16-14s16 6 16 14v4H1zm30-13c9 0 16 5 16 13v4H37v-4c0-5-2-9-6-12z" />
      </svg>
    ),
  },
  {
    href: "https://twitter.com/grantsgov",
    label: "Twitter Feed",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 48 48" className="w-14 h-14 fill-current flex-none">
        <path
          d="M46 9c-2 1-4 2-6 2 2-2 3-4 4-7-2 2-5 3-8 4a12 12 0 0 0-21 8c0 1 0 2 .2 3C6 18 0 14-4 8c-1 2-2 4-2 6 0 4 2 8 6 10-2 0-4-1-5-2 0 6 4 10 9 11-2 1-4 1-6 0 2 5 7 8 12 8A24 24 0 0 1-4 46a34 34 0 0 0 18 5c22 0 34-19 34-35v-2c2-1 4-3 5-5z"
          transform="translate(5 -4)"
        />
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/user/GrantsGovUS",
    label: "YouTube Videos",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 48 48" className="w-14 h-14 fill-current flex-none">
        <path d="M46 12a6 6 0 0 0-4-4C38 7 24 7 24 7S10 7 6 8a6 6 0 0 0-4 4C1 16 1 24 1 24s0 8 1 12a6 6 0 0 0 4 4c4 1 18 1 18 1s14 0 18-1a6 6 0 0 0 4-4c1-4 1-12 1-12s0-8-1-12zM20 32V16l13 8z" />
      </svg>
    ),
  },
  {
    href: "#support",
    label: "User Guide",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 48 48" className="w-14 h-14 fill-current flex-none">
        <circle cx="24" cy="8" r="7" />
        <path d="M3 22c8 0 13 2 18 7l3 3 3-3c5-5 10-7 18-7v23c-8 0-13-2-18-7l-3-3-3 3c-5 5-10 7-18 7z" />
      </svg>
    ),
  },
  {
    href: "#support",
    label: "Support Center",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 48 48" className="w-14 h-14 fill-current flex-none">
        <path d="M24 3A18 18 0 0 0 6 21v9H2v10h10V22H9v-1a15 15 0 0 1 30 0v1h-3v18h5c3 0 5-2 5-5V21A18 18 0 0 0 24 3zM5 34h2v2H5zm38 2h-2v-2h2z" />
        <circle cx="17" cy="22" r="2" />
        <circle cx="31" cy="22" r="2" />
        <path d="M17 31c4 4 10 4 14 0" fill="none" stroke="currentColor" strokeWidth="3" />
      </svg>
    ),
  },
];

const resources: Resource[] = [
  {
    image: "https://a.storyblok.grants.gov/f/21/400x200/3b2712aebe/banner-home-howtoapply.png",
    alt: "How to Apply for Federal Funding Opportunities",
    title: "How to Apply for Federal Funding Opportunities",
    text: "Key steps that will help you in the application process.",
    href: "#support",
    cta: "Learn more",
  },
  {
    image: "https://a.storyblok.grants.gov/f/21/400x200/5574abecee/banner-home-exploringeligibilityblog.png",
    alt: "Are You Eligible for Federal Funding Opportunities?",
    title: "Are You Eligible for Federal Funding Opportunities?",
    text: "Determining your eligibility is an important first step.",
    href: "#support",
    cta: "Learn more",
  },
  {
    image: "https://a.storyblok.grants.gov/f/21/400x200/d3965868ed/banner-home-systemhelp.png",
    alt: "Ways to Get Help When Using Grants.gov",
    title: "Ways to Get Help When Using Grants.gov",
    text: "Find help-focused resources for using the Grants.gov system.",
    href: "#support",
    cta: "Learn more",
  },
  {
    image: "https://a.storyblok.grants.gov/f/21/400x199/11bbe95548/banner-home-grantwritingbasics.png",
    alt: "Grant Writing Tips",
    title: "Grant Writing Tips",
    text: "Explore principles and examples of effective grant writing.",
    href: "#support",
    cta: "Learn more",
  },
  {
    image: "https://i.ytimg.com/vi/XCRQTa-IpjQ/hqdefault.jpg",
    alt: "Learning Workspace application workflow video",
    title: "Learning Workspace - Application Workflow for Organizations",
    text: "Learn how organizations can use the Grants.gov application workflow.",
    href: "https://www.youtube.com/watch?v=XCRQTa-IpjQ",
    cta: "Watch video",
  },
  {
    image: "https://a.storyblok.grants.gov/f/21/400x200/8d3f3331a3/banner-home-howtoblog.png",
    alt: "How To blog series",
    title: '"How To..." Blog Series',
    text: "Learn to manage passwords, find contacts, and more.",
    href: "#support",
    cta: "Learn more",
  },
  {
    image: "https://i.ytimg.com/vi/fIZZH74021I/hqdefault.jpg",
    alt: "Intro to Grants.gov video",
    title: "Intro to Grants.gov - Applying for a Federal Grant on Grants.gov",
    text: "An introduction to applying for a federal grant through Grants.gov.",
    href: "https://www.youtube.com/watch?v=fIZZH74021I",
    cta: "Watch video",
  },
  {
    image: "https://a.storyblok.grants.gov/f/21/400x200/c8a8cf3dac/banner-home-learn-grants-fill.png",
    alt: "Grants Learning Center",
    title: "Grants Learning Center",
    text: "Your gateway to the federal grants world.",
    href: "#support",
    cta: "Visit learning center",
  },
  {
    image: "https://a.storyblok.grants.gov/f/21/400x200/dec918a323/banner-home-calendar-fill.png",
    alt: "Next system maintenance calendar",
    title: "Next System Maintenance",
    text: "Software releases bring users new features and fixes.",
    href: "#support",
    cta: "View maintenance calendar",
  },
];

const footerLinks: string[] = [
  "Support Center",
  "User Guide",
  "Accessibility",
  "Grant Policies",
  "Privacy",
  "Site Map",
  "RSS Feeds",
  "USA.gov",
  "Report Fraud",
];

// ─── Components ───────────────────────────────────────────────────────────────

function OfficialBanner(): JSX.Element {
  return (
    <div className="min-h-[42px] px-6 flex items-center gap-2.5 bg-[#f1f1f1] text-[#30363b] text-[13px]">
      <span aria-hidden="true" className="text-[#173b59] text-[13px] font-bold leading-none">US</span>
      <span>An official website of the United States government</span>
      <a href="#about-government" className="ml-1 font-bold text-[#075f9b] hover:text-[#064b7a]">
        Here's how you know
      </a>
    </div>
  );
}

function SiteHeader(): JSX.Element {
  return (
    <header className="max-w-[1180px] min-h-[94px] mx-auto px-6 py-3.5 flex items-center justify-between gap-6">
      <a href="#top" aria-label="Grants.gov home" className="inline-flex items-center gap-3 text-[#111820] no-underline">
        <img
          src="/img/grants-gov-logo.png"
          alt="Grants.gov"
          className="w-[200px] h-[73px] block object-cover object-top"
        />
      </a>
      <nav aria-label="Main navigation" className="hidden md:flex items-center gap-2">
        {["Search Grants", "Applicants", "Learn Grants", "Support"].map((label, i) => (
          <a
            key={i}
            href={i === 0 ? "#search" : i === 3 ? "#support" : "#resources"}
            className="px-3 py-2.5 text-[#173b59] text-sm font-bold no-underline hover:underline"
          >
            {label}
          </a>
        ))}
      </nav>
      <a
        href="#site-links"
        className="min-w-[100px] px-[18px] py-3 bg-[#075f9b] hover:bg-[#064b7a] text-white text-sm font-bold text-center uppercase no-underline"
      >
        Menu
      </a>
    </header>
  );
}

function WarningStatus(): JSX.Element {
  return (
    <section
      className="py-6 pl-1.5 border-l-[6px] border-[#e2b33a] bg-[#fff6cf]"
      aria-labelledby="warning-title"
    >
      <div className="max-w-[1180px] mx-auto px-6">
        <h1 id="warning-title" className="flex items-center gap-2.5 mb-1 text-xl font-bold leading-tight text-[#202a33]">
          <span
            aria-hidden="true"
            className="relative inline-grid w-9 h-8 flex-none place-items-center bg-[#202a33]"
            style={{ clipPath: "polygon(50% 0, 0 100%, 100% 100%)" }}
          >
            <span className="absolute top-[9px] text-white text-[13px]">!</span>
          </span>
          Warning status
        </h1>
        <p className="m-0 max-w-[1000px] text-[#202a33]">
          In observance of Columbus Day, the Grants.gov Contact Center will be closed October 12. For support during
          this closure, applicants may browse the{" "}
          <a href="#support" className="text-[#075f9b] hover:text-[#064b7a]">Self-Service Knowledge Base</a> or consult
          the{" "}
          <a href="#support" className="text-[#075f9b] hover:text-[#064b7a]">Grants.gov Online User Guide</a>.
        </p>
      </div>
    </section>
  );
}

function Hero(): JSX.Element {
  return (
    <section
      id="search"
      aria-labelledby="hero-title"
      className="min-h-[500px] px-6 py-10 grid place-items-start relative overflow-hidden"
      style={{
        backgroundColor: "#d9e2e1",
        backgroundImage:
          'url("https://a.storyblok.grants.gov/f/21/8780x3887/f33aa6e037/home-banner.jpg/m/1920x0")',
        backgroundPosition: "center 2%",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full max-w-[720px] px-7 pt-6 pb-7 relative border border-[#e0e4e6] rounded bg-white/97 shadow-lg">
        <h2
          id="hero-title"
          className="mt-0 mb-2 text-[#334353] text-3xl leading-tight"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          Discover Your Next Grant
        </h2>
        <p className="mt-0 mb-5 text-[17px] text-[#202a33]">
          Explore federal grant opportunities with our enhanced, user-friendly search.
        </p>
        <a
          href="https://www.grants.gov/search-grants"
          className="inline-flex items-center justify-center min-h-12 px-5 py-2.5 rounded-sm bg-[#075f9b] hover:bg-[#064b7a] text-white font-bold no-underline"
        >
          Search Now
        </a>
      </div>
    </section>
  );
}

function InfoStatus(): JSX.Element {
  return (
    <section
      className="py-6 pl-1.5 border-l-[6px] border-[#4c91ad] bg-[#eaf4f8] border-t border-t-[#ebd98c]"
      aria-labelledby="notice-title"
    >
      <div className="max-w-[1180px] mx-auto px-6">
        <h2 id="notice-title" className="mt-0 mb-1 text-xl font-bold leading-tight text-[#202a33]">
          Informative status
        </h2>
        <p className="m-0 max-w-[1000px] text-[#202a33]">
          Reminder: Federal agencies do not publish personal financial assistance opportunities on Grants.gov. Federal
          funding opportunities published on Grants.gov are for organizations and entities supporting the development
          and management of government-funded programs and projects. For more information about personal financial
          assistance benefits, please visit{" "}
          <a href="https://www.usa.gov/" className="text-[#075f9b] hover:text-[#064b7a]">USA.gov</a>.
        </p>
      </div>
    </section>
  );
}

function QuickLinks(): JSX.Element {
  return (
    <section id="site-links" className="px-6 py-4 bg-[#e2e4e5]">
      <nav
        aria-label="Popular links"
        className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10"
      >
        {quickLinks.map(({ href, icon, label }: QuickLink, i: number) => (
          <a
            key={i}
            href={href}
            className="min-w-0 min-h-[126px] px-2 py-1 flex flex-col items-center justify-start gap-1.5 text-[#17191a] hover:text-[#075f9b] text-base leading-snug text-center no-underline"
          >
            {icon}
            <span>{label}</span>
          </a>
        ))}
      </nav>
    </section>
  );
}

function ResourceCard({ image, alt, title, text, href, cta }: Resource): JSX.Element {
  return (
    <article className="min-w-0 border border-[#d6dddf] bg-white flex flex-col">
      <img
        src={image}
        alt={alt}
        className="w-full aspect-[2/1] block border-b border-[#d6dddf] object-cover"
      />
      <div className="p-[18px] flex flex-1 flex-col items-start">
        <h3 className="mt-0 mb-2 text-[#173b59] text-lg leading-snug">{title}</h3>
        <p className="mt-0 mb-4 text-[#414d56] text-sm">{text}</p>
        <a href={href} className="mt-auto text-sm font-bold text-[#075f9b] hover:text-[#064b7a]">
          {cta}
        </a>
      </div>
    </article>
  );
}

function Resources(): JSX.Element {
  return (
    <section id="resources" className="py-10 bg-[#f5f7f7]">
      <div className="w-[min(1180px,calc(100%-48px))] mx-auto">
        <div className="flex items-end justify-between gap-5 mb-5">
          <h2
            className="mt-0 mb-0 text-[#173b59] text-2xl"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            Discover Your Next Grant
          </h2>
          <p className="m-0 text-[#52606b]">Guidance and tools for every step of the process.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {resources.map((r: Resource) => (
            <ResourceCard key={r.title} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningBand(): JSX.Element {
  return (
    <section className="py-9 bg-[#e8f0f3] border-t border-[#d3e0e5]">
      <div className="w-[min(1180px,calc(100%-48px))] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h2
            className="mt-0 mb-1 text-[#173b59] text-2xl"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            Applying for a federal grant?
          </h2>
          <p className="m-0 text-[#465761]">Get familiar with the process, requirements, and available support.</p>
        </div>
        <a
          href="#resources"
          className="inline-flex items-center justify-center min-h-12 px-5 py-2.5 rounded-sm bg-[#075f9b] hover:bg-[#064b7a] text-white font-bold no-underline whitespace-nowrap"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}

function Footer(): JSX.Element {
  return (
    <footer id="support" className="pt-10 pb-6 bg-[#203e55] text-white">
      <div className="w-[min(1180px,calc(100%-48px))] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr] gap-12 pb-8">
          <div
            className="text-[25px] font-bold"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            Grants.gov
            <p className="max-w-[320px] mt-2 mb-0 text-[#d2dce2] text-sm leading-relaxed font-normal"
               style={{ fontFamily: '"Trebuchet MS", Arial, sans-serif' }}>
              Find and apply for federal grants. Your source for federal grant opportunities.
            </p>
          </div>
          <nav aria-label="Footer links" className="grid grid-cols-3 gap-y-2.5 gap-x-5">
            {footerLinks.map((label: string) => (
              <a key={label} href="#resources" className="text-white text-[13px] hover:underline">
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div id="about-government" className="pt-4 border-t border-[#547084] text-[#d2dce2] text-xs">
          An official website of the United States government · Grants.gov
        </div>
      </div>
    </footer>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function App(): JSX.Element {
  return (
    <>
      <OfficialBanner />
      <SiteHeader />
      <main id="top">
        <WarningStatus />
        <Hero />
        <InfoStatus />
        <QuickLinks />
        <Resources />
        <LearningBand />
      </main>
      <Footer />
    </>
  );
}
