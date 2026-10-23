const quickLinks = [
  {
    href: "https://www.grants.gov/search-grants",
    label: "Search Grants",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 48 48">
        <circle cx="20" cy="20" r="13" fill="none" stroke="currentColor" strokeWidth="5" />
        <path d="m30 30 12 12" fill="none" stroke="currentColor" strokeWidth="5" />
      </svg>
    ),
  },
  {
    href: "#resources",
    className: "get-started-link",
    label: "Get Started",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 48 48">
        <path d="M27 5h16v16h-5V14L19 33l-4-4 19-19h-7z" />
        <path d="M37 27h6v16H5V5h16v6H11v26h26z" />
      </svg>
    ),
  },
  {
    href: "#resources",
    label: "Grant Policies",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 48 48">
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
      <svg aria-hidden="true" viewBox="0 0 48 48">
        <path d="M2 14 24 3l22 11v4H2zm4 7h7v17H6zm12 0h7v17h-7zm13 0h7v17h-7zM2 42h44v4H2z" />
      </svg>
    ),
  },
  {
    href: "#support",
    label: "Prevent Scams",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 48 48">
        <path d="M24 2 44 10v13c0 12-8 20-20 24C12 43 4 35 4 23V10zm0 6v32c9-4 14-10 14-18V14z" />
      </svg>
    ),
  },
  {
    href: "#resources",
    label: "Community Blog",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 48 48">
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
      <svg aria-hidden="true" viewBox="0 0 48 48">
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
      <svg aria-hidden="true" viewBox="0 0 48 48">
        <path d="M46 12a6 6 0 0 0-4-4C38 7 24 7 24 7S10 7 6 8a6 6 0 0 0-4 4C1 16 1 24 1 24s0 8 1 12a6 6 0 0 0 4 4c4 1 18 1 18 1s14 0 18-1a6 6 0 0 0 4-4c1-4 1-12 1-12s0-8-1-12zM20 32V16l13 8z" />
      </svg>
    ),
  },
  {
    href: "#support",
    label: "User Guide",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 48 48">
        <circle cx="24" cy="8" r="7" />
        <path d="M3 22c8 0 13 2 18 7l3 3 3-3c5-5 10-7 18-7v23c-8 0-13-2-18-7l-3-3-3 3c-5 5-10 7-18 7z" />
      </svg>
    ),
  },
  {
    href: "#support",
    label: "Support Center",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 48 48">
        <path d="M24 3A18 18 0 0 0 6 21v9H2v10h10V22H9v-1a15 15 0 0 1 30 0v1h-3v18h5c3 0 5-2 5-5V21A18 18 0 0 0 24 3zM5 34h2v2H5zm38 2h-2v-2h2z" />
        <circle cx="17" cy="22" r="2" />
        <circle cx="31" cy="22" r="2" />
        <path d="M17 31c4 4 10 4 14 0" fill="none" stroke="currentColor" strokeWidth="3" />
      </svg>
    ),
  },
];

const resources = [
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
    title: "\"How To...\" Blog Series",
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

const footerLinks = [
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

function OfficialBanner() {
  return (
    <div className="official-banner">
      <span className="flag" aria-hidden="true">US</span>
      <span>An official website of the United States government</span>
      <a href="#about-government">Here's how you know</a>
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Grants.gov home">
        <img className="brand-logo" src="/img/grants-gov-logo.png" alt="Grants.gov" />
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#search">Search Grants</a>
        <a href="#resources">Applicants</a>
        <a href="#resources">Learn Grants</a>
        <a href="#support">Support</a>
      </nav>
      <a className="menu-button" href="#site-links">Menu</a>
    </header>
  );
}

function WarningStatus() {
  return (
    <section className="status" aria-labelledby="warning-title">
      <div className="status-inner">
        <h1 id="warning-title">
          <span className="warning-icon" aria-hidden="true">!</span>
          Warning status
        </h1>
        <p>
          In observance of Columbus Day, the Grants.gov Contact Center will be closed October 12. For support during this
          closure, applicants may browse the <a href="#support">Self-Service Knowledge Base</a> or consult the{" "}
          <a href="#support">Grants.gov Online User Guide</a>.
        </p>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="hero" id="search" aria-labelledby="hero-title">
      <div className="search-panel">
        <h2 id="hero-title">Discover Your Next Grant</h2>
        <p>Explore federal grant opportunities with our enhanced, user-friendly search.</p>
        <a className="button" href="https://www.grants.gov/search-grants">Search Now</a>
      </div>
    </section>
  );
}

function InfoStatus() {
  return (
    <section className="status info-status" aria-labelledby="notice-title">
      <div className="status-inner">
        <h2 id="notice-title">Informative status</h2>
        <p>
          Reminder: Federal agencies do not publish personal financial assistance opportunities on Grants.gov. Federal
          funding opportunities published on Grants.gov are for organizations and entities supporting the development and
          management of government-funded programs and projects. For more information about personal financial assistance
          benefits, please visit <a href="https://www.usa.gov/">USA.gov</a>.
        </p>
      </div>
    </section>
  );
}

function QuickLinks() {
  return (
    <section className="quick-links" id="site-links">
      <nav className="link-grid" aria-label="Popular links">
        {quickLinks.map(({ href, className, icon, label }, i) => (
          <a key={i} href={href} className={className}>
            {icon}
            <span>{label}</span>
          </a>
        ))}
      </nav>
    </section>
  );
}

function ResourceCard({ image, alt, title, text, href, cta }) {
  return (
    <article className="resource-card">
      <img className="resource-image" src={image} alt={alt} />
      <div className="card-copy">
        <h3>{title}</h3>
        <p>{text}</p>
        <a href={href}>{cta}</a>
      </div>
    </article>
  );
}

function Resources() {
  return (
    <section className="resources" id="resources">
      <div className="content-width">
        <div className="section-heading">
          <h2>Discover Your Next Grant</h2>
          <p>Guidance and tools for every step of the process.</p>
        </div>
        <div className="resource-grid">
          {resources.map((r) => (
            <ResourceCard key={r.title} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningBand() {
  return (
    <section className="learning-band">
      <div className="content-width learning-inner">
        <div>
          <h2>Applying for a federal grant?</h2>
          <p>Get familiar with the process, requirements, and available support.</p>
        </div>
        <a className="button" href="#resources">Get Started</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="support">
      <div className="content-width">
        <div className="footer-top">
          <div className="footer-brand">
            Grants.gov
            <p>Find and apply for federal grants. Your source for federal grant opportunities.</p>
          </div>
          <nav className="footer-links" aria-label="Footer links">
            {footerLinks.map((label) => (
              <a key={label} href="#resources">{label}</a>
            ))}
          </nav>
        </div>
        <div className="footer-bottom" id="about-government">
          An official website of the United States government · Grants.gov
        </div>
      </div>
    </footer>
  );
}

export default function App() {
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
