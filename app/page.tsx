"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import { services, projects, capabilities } from "@/lib/data";

/* =========================================================
   IMAGES
   Replace these Unsplash URLs with your own assets.
   Recommended: warm tones, desaturated, editorial style.
   ========================================================= */
const IMAGES = {
  about:
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80",
  trust:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  visualTexture:
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80",
  processTexture:
    "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=1600&q=80",
  techTexture:
    "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=1600&q=80",
};

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  return (
    <article className="service-card">
      <div className="service-top">
        <span>{service.number}</span>
        <ArrowUpRight size={22} strokeWidth={1.5} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <span className="service-arrow" aria-hidden="true">
        <ArrowUpRight size={18} />
      </span>
    </article>
  );
}

function ProjectVisual({ index }: { index: number }) {
  return (
    <div className="browser-window">
      <div className="browser-top">
        <div className="browser-dots">
          <i />
          <i />
          <i />
        </div>
        <span>aurelia.build</span>
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
  );
}

export default function HomePage() {
  return (
    <main className="site">
      {/* =========================================================
          HERO
          ========================================================= */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-intro animate-in">
            <div className="status">
              <span className="status-dot" />
              Digital product studio
            </div>
            <p className="hero-location">Websites · Apps · Software</p>
          </div>

          <h1 className="animate-in delay-1">
            We build digital
            <br />
            products people
            <br />
            <span>remember.</span>
          </h1>

          <div className="hero-bottom animate-in delay-2">
            <p>
              Aurelia helps ambitious businesses turn ideas into useful,
              beautifully designed technology — from websites and web apps to
              complete business platforms.
            </p>
            <Link href="/work" className="hero-link">
              Explore our work
              <span>
                <ArrowUpRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          VISUAL STATEMENT — with subtle gold texture
          ========================================================= */}
      <section className="visual-section">
        <div className="wrap">
          <div
            className="visual-card"
            style={
              {
                "--visual-bg": `url(${IMAGES.visualTexture})`,
              } as React.CSSProperties
            }
          >
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
              <div className="visual-core">A</div>
            </div>

            <div className="visual-copy">
              <span>FROM IDEA</span>
              <strong>TO PRODUCT.</strong>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TRUST — with editorial image
          ========================================================= */}
      <section className="trust">
        <div className="wrap trust-grid">
          <div className="trust-left">
            <div className="trust-image">
              <img
                src={IMAGES.trust}
                alt="Aurelia team collaborating in a warm, minimal studio space"
                loading="lazy"
              />
            </div>
            <div className="trust-text">
              <SectionLabel>What we do</SectionLabel>
              <h2>
                Built for businesses
                <br />
                that are ready to move.
              </h2>
            </div>
          </div>
          <div>
            <p>
              From founders launching their first product to established
              businesses replacing outdated systems, Aurelia builds software
              around the way the business actually works.
            </p>
            <div className="capabilities">
              {capabilities.map((cap) => (
                <span key={cap}>{cap}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO / ABOUT — with editorial image
          ========================================================= */}
      <section className="intro">
        <div className="wrap intro-grid">
          <div className="intro-left">
            <SectionLabel>About us</SectionLabel>
            <div className="intro-image">
              <img
                src={IMAGES.about}
                alt="Warm minimal interior reflecting Aurelia's design philosophy"
                loading="lazy"
              />
            </div>
          </div>
          <div>
            <h2>
              Technology should make your business feel
              <span> bigger, smarter, and easier to run.</span>
            </h2>
            <p className="intro-text">
              You bring the idea. We bring the strategy, design, engineering,
              and attention to detail needed to turn it into something real.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
          ========================================================= */}
      <section className="services" id="services">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <SectionLabel>Capabilities</SectionLabel>
              <h2>What we build.</h2>
            </div>
            <p>
              Not templates. Not recycled solutions. We create digital
              experiences around the problem you&apos;re trying to solve.
            </p>
          </div>

          <div className="services-grid">
            {services.slice(0, 4).map((service) => (
              <ServiceCard key={service.number} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WORK
          ========================================================= */}
      <section className="work" id="work">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <SectionLabel>Selected work</SectionLabel>
              <h2>Things we&apos;ve built.</h2>
            </div>
            <p>
              Every project starts with a different problem. That&apos;s why
              every product we build gets its own approach.
            </p>
          </div>

          <div className="projects">
            {projects.slice(0, 3).map((project, index) => (
              <article
                className={`project ${project.className}`}
                key={project.slug}
              >
                <div className="project-visual">
                  <ProjectVisual index={index} />
                </div>
                <div className="project-info">
                  <div>
                    <span className="project-type">{project.type}</span>
                    <h3>{project.title}</h3>
                  </div>
                  <p>{project.description}</p>
                  <Link href={`/work/${project.slug}`}>
                    View case study
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS — with subtle dark texture
          ========================================================= */}
      <section
        className="process"
        id="process"
        style={
          {
            "--process-bg": `url(${IMAGES.processTexture})`,
          } as React.CSSProperties
        }
      >
        <div className="wrap">
          <div className="process-intro">
            <SectionLabel>How we work</SectionLabel>
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
                  We understand your business, your users, and the problem
                  before touching the code.
                </p>
              </div>
            </div>
            <div className="process-item">
              <span>02</span>
              <div>
                <h3>Design</h3>
                <p>
                  We shape the experience, interface, and product architecture
                  so everything has a reason to exist.
                </p>
              </div>
            </div>
            <div className="process-item">
              <span>03</span>
              <div>
                <h3>Build</h3>
                <p>
                  Our engineers turn the approved direction into fast, reliable,
                  production-ready software.
                </p>
              </div>
            </div>
            <div className="process-item">
              <span>04</span>
              <div>
                <h3>Launch &amp; grow</h3>
                <p>
                  We don&apos;t disappear after launch. We help you improve,
                  maintain, and evolve the product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY — with subtle texture
          ========================================================= */}
      <section
        className="technology"
        style={
          {
            "--tech-bg": `url(${IMAGES.techTexture})`,
          } as React.CSSProperties
        }
      >
        <div className="wrap technology-inner">
          <div>
            <SectionLabel>Built properly</SectionLabel>
            <h2>
              Modern technology.
              <br />
              <span>Thoughtful engineering.</span>
            </h2>
          </div>
          <div className="tech-copy">
            <p>
              We use modern tools and frameworks to build products that are
              fast today and maintainable tomorrow.
            </p>
            <div className="tech-stack">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Node.js",
                "PostgreSQL",
                "MongoDB",
                "Firebase",
                "Vercel",
              ].map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT
          ========================================================= */}
      <section className="contact" id="contact">
        <div className="wrap contact-inner">
          <SectionLabel>Have an idea?</SectionLabel>
          <h2>
            Let&apos;s turn it into
            <br />
            <span>something real.</span>
          </h2>
          <p>
            Tell us what you&apos;re thinking. Whether it&apos;s a new website,
            an app, an internal system, or an idea you haven&apos;t fully
            figured out yet — let&apos;s talk.
          </p>
          <Link href="/start-project" className="contact-button">
            Start a project
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
