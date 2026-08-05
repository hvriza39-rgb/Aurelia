"use client";

import {
  ArrowUpRight,
  Code2,
  Layers3,
  Smartphone,
  Globe2,
} from "lucide-react";

import Logo from "../components/Logo";

const services = [
  {
    number: "01",
    icon: Globe2,
    title: "Websites",
    text: "High-converting websites designed around your brand, your audience, and what you want people to do next.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Web Applications",
    text: "Custom platforms, dashboards, portals, marketplaces, and business systems built around the way your business actually works.",
  },
  {
    number: "03",
    icon: Smartphone,
    title: "Mobile Experiences",
    text: "Modern mobile products that make your services easier to access, easier to use, and easier to grow.",
  },
  {
    number: "04",
    icon: Code2,
    title: "Custom Software",
    text: "From internal tools to complete digital products, we turn complicated ideas into software people can actually use.",
  },
];

const projects = [
  {
    type: "Healthcare platform",
    title: "CareTrack",
    description:
      "A digital healthcare platform connecting patients, appointments, records, and everyday clinical workflows.",
    className: "project-one",
  },
  {
    type: "Business platform",
    title: "Built around your business",
    description:
      "Custom systems that replace spreadsheets, repetitive processes, and disconnected tools with one intelligent platform.",
    className: "project-two",
  },
  {
    type: "Commerce",
    title: "Digital storefronts",
    description:
      "Beautiful commerce experiences that help businesses showcase products and turn visitors into customers.",
    className: "project-three",
  },
];

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="service-card">
      <div className="service-top">
        <span>{service.number}</span>

        <Icon size={22} strokeWidth={1.5} />
      </div>

      <h3>{service.title}</h3>

      <p>{service.text}</p>

      <span className="service-arrow" aria-hidden="true">
        <ArrowUpRight size={18} />
      </span>
    </article>
  );
}

export default function Page() {
  return (
    <main className="site">
      {/* =========================================================
          NAVIGATION
      ========================================================== */}

      <header className="nav wrap">
        <a
          href="#"
          className="brand"
          aria-label="Aurelia home"
        >
          <Logo
            width={150}
            height={100}
            showBackground={false}
          />
        </a>

        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
        </nav>

        <a href="#contact" className="nav-cta">
          Start a project
          <ArrowUpRight size={16} />
        </a>
      </header>

      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="hero">
        <div className="wrap">
          <div className="hero-intro">
            <div className="status">
              <span className="status-dot" />
              Digital product studio
            </div>

            <p className="hero-location">
              Websites · Apps · Software
            </p>
          </div>

          <h1>
            We build digital
            <br />
            products people
            <br />
            <span>remember.</span>
          </h1>

          <div className="hero-bottom">
            <p>
              Aurelia is a digital product studio helping ambitious
              businesses turn ideas into beautiful, useful technology —
              from websites and web apps to complete business platforms.
            </p>

            <a href="#work" className="hero-link">
              Explore our work

              <span>
                <ArrowUpRight size={18} />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          VISUAL STATEMENT
      ========================================================== */}

      <section className="visual-section">
        <div className="wrap">
          <div className="visual-card">
            <div className="visual-grid" />

            <div className="floating-card card-one">
              <span>01</span>
              <strong>Idea</strong>
            </div>

            <div className="floating-card card-two">
              <span>02</span>
              <strong>Design</strong>
            </div>

            <div className="floating-card card-three">
              <span>03</span>
              <strong>Build</strong>
            </div>

            <div className="visual-center">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />

              <div className="visual-core">
                A
              </div>
            </div>

            <div className="visual-copy">
              <span>FROM IDEA</span>
              <strong>TO PRODUCT.</strong>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================== */}

      <section className="intro">
        <div className="wrap intro-grid">
          <div>
            <p className="section-label">
              What we do
            </p>
          </div>

          <div>
            <h2>
              Technology should make your business feel
              <span>
                {" "}
                bigger, smarter, and easier to run.
              </span>
            </h2>

            <p className="intro-text">
              You bring the idea. We bring the strategy, design,
              engineering, and attention to detail needed to turn
              it into something real.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================== */}

      <section
        className="services"
        id="services"
      >
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="section-label">
                Capabilities
              </p>

              <h2>
                What we build.
              </h2>
            </div>

            <p>
              Not templates. Not recycled solutions. We create
              digital experiences around the problem you're
              trying to solve.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard
                key={service.number}
                service={service}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WORK
      ========================================================== */}

      <section
        className="work"
        id="work"
      >
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="section-label">
                Selected work
              </p>

              <h2>
                Things we've built.
              </h2>
            </div>

            <p>
              Every project starts with a different problem.
              That's why every product we build gets its own
              approach.
            </p>
          </div>

          <div className="projects">
            {projects.map((project, index) => (
              <article
                className={`project ${project.className}`}
                key={project.title}
              >
                <div className="project-visual">
                  <div className="browser-window">
                    <div className="browser-top">
                      <div className="browser-dots">
                        <i />
                        <i />
                        <i />
                      </div>

                      <span>
                        aurelia.build
                      </span>
                    </div>

                    <div className="browser-content">
                      {index === 0 && (
                        <>
                          <div className="mock-sidebar" />

                          <div className="mock-dashboard">
                            <div className="mock-title" />

                            <div className="mock-stats">
                              <span />
                              <span />
                              <span />
                            </div>

                            <div className="mock-chart" />
                          </div>
                        </>
                      )}

                      {index === 1 && (
                        <div className="mock-platform">
                          <div />
                          <div />
                          <div />
                          <div />
                        </div>
                      )}

                      {index === 2 && (
                        <div className="mock-store">
                          <div className="store-image" />

                          <div className="store-lines">
                            <span />
                            <span />
                            <span />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="project-info">
                  <div>
                    <span className="project-type">
                      {project.type}
                    </span>

                    <h3>
                      {project.title}
                    </h3>
                  </div>

                  <p>
                    {project.description}
                  </p>

                  <button type="button">
                    View project
                    <ArrowUpRight size={17} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================== */}

      <section
        className="process"
        id="process"
      >
        <div className="wrap">
          <div className="process-intro">
            <p className="section-label">
              How we work
            </p>

            <h2>
              Clear thinking.
              <br />
              <span>Good design.</span>
              <br />
              Serious execution.
            </h2>
          </div>

          <div className="process-list">
            <div className="process-item">
              <span>01</span>

              <div>
                <h3>Discover</h3>

                <p>
                  We understand your business, your users,
                  and the problem before touching the code.
                </p>
              </div>
            </div>

            <div className="process-item">
              <span>02</span>

              <div>
                <h3>Design</h3>

                <p>
                  We shape the experience, interface, and
                  product architecture so everything has a
                  reason to exist.
                </p>
              </div>
            </div>

            <div className="process-item">
              <span>03</span>

              <div>
                <h3>Build</h3>

                <p>
                  Our engineers turn the approved direction
                  into fast, reliable, production-ready
                  software.
                </p>
              </div>
            </div>

            <div className="process-item">
              <span>04</span>

              <div>
                <h3>Launch &amp; grow</h3>

                <p>
                  We don't disappear after launch. We help
                  you improve, maintain, and evolve the
                  product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY
      ========================================================== */}

      <section className="technology">
        <div className="wrap technology-inner">
          <div>
            <p className="section-label">
              Built properly
            </p>

            <h2>
              Modern technology.
              <br />
              <span>
                Thoughtful engineering.
              </span>
            </h2>
          </div>

          <div className="tech-copy">
            <p>
              We use modern tools and frameworks to build
              products that are fast today and maintainable
              tomorrow.
            </p>

            <div className="tech-stack">
              <span>Next.js</span>
              <span>React</span>
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>PostgreSQL</span>
              <span>MongoDB</span>
              <span>Firebase</span>
              <span>Vercel</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT / CTA
      ========================================================== */}

      <section
        className="contact"
        id="contact"
      >
        <div className="wrap contact-inner">
          <p className="section-label">
            Have an idea?
          </p>

          <h2>
            Let's turn it into
            <br />
            <span>something real.</span>
          </h2>

          <p>
            Tell us what you're thinking. Whether it's a new
            website, an app, an internal system, or an idea
            you haven't fully figured out yet — let's talk.
          </p>

          <a
            href="mailto:hello@aurelia.dev"
            className="contact-button"
          >
            Start a conversation
            <ArrowUpRight size={20} />
          </a>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================== */}

      <footer className="footer wrap">
        <a
          href="#"
          className="brand footer-brand"
          aria-label="Aurelia home"
        >
          <Logo
            width={120}
            height={80}
            showBackground={false}
          />
        </a>

        <div className="footer-center">
          Websites · Apps · Software
        </div>

        <div className="footer-right">
          © {new Date().getFullYear()} Aurelia
        </div>
      </footer>
    </main>
  );
}
