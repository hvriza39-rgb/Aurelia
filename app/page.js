"use client";

import { useState } from "react";

const STACKS = {
  postgres: {
    label: "Postgres",
    dbLabel: "PostgreSQL",
    dbSub: "relational",
    showOrm: true,
    caption: (
      <>
        <strong>When it fits:</strong> structured data, real relationships
        between records, and transactions that can't be allowed to fail.
        Billing, inventory, anything with joins.
      </>
    ),
  },
  mongodb: {
    label: "MongoDB",
    dbLabel: "MongoDB",
    dbSub: "document",
    showOrm: true,
    caption: (
      <>
        <strong>When it fits:</strong> flexible or evolving schemas, content
        that shapeshifts between records, and fast iteration early in a
        product's life.
      </>
    ),
  },
  firebase: {
    label: "Firebase",
    dbLabel: "Firebase",
    dbSub: "realtime + auth",
    showOrm: false,
    caption: (
      <>
        <strong>When it fits:</strong> real-time sync, auth out of the box,
        and MVPs that need to ship this week, not this quarter. No ORM layer
        needed.
      </>
    ),
  },
};

function StackDiagram() {
  const [active, setActive] = useState("postgres");
  const stack = STACKS[active];

  return (
    <div className="diagram-panel">
      <div className="diagram-toolbar">
        <span className="diagram-label">architecture.select(database)</span>
        <div className="db-toggle">
          {Object.entries(STACKS).map(([key, s]) => (
            <button
              key={key}
              className="db-btn"
              data-active={active === key}
              onClick={() => setActive(key)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="diagram-body">
        <div className="node">
          <span className="node-label">Next.js</span>
          <span className="node-sub">app</span>
        </div>

        <div className="connector" />

        {stack.showOrm && (
          <>
            <div className="node">
              <span className="node-label">Prisma</span>
              <span className="node-sub">type-safe ORM</span>
            </div>
            <div className="connector" />
          </>
        )}

        <div className="node" data-role="db">
          <span className="node-label">{stack.dbLabel}</span>
          <span className="node-sub">{stack.dbSub}</span>
        </div>
      </div>

      <div className="diagram-caption">{stack.caption}</div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <header className="wrap nav">
        <div className="logo">
          <span className="logo-dot" />
          STACKFORGE
        </div>
        <a className="nav-link" href="#contact">
          Get in touch
        </a>
      </header>

      <main>
        <section className="hero" style={{ borderTop: "none" }}>
          <div className="wrap">
            <p className="eyebrow">full-stack development</p>
            <h1>
              Ship the right stack.
              <br />
              Not just <span className="accent">a</span> stack.
            </h1>
            <p className="hero-sub">
              Stackforge builds full-stack Next.js apps — wired to whichever
              database actually fits the job, not whichever one's trending.
            </p>

            <StackDiagram />
          </div>
        </section>

        <section className="positioning">
          <div className="wrap">
            <p className="section-label">positioning</p>
            <p>
              For founders and small teams who need a working product fast,
              Stackforge is a development partner that builds{" "}
              <span className="hl">full-stack Next.js applications</span>{" "}
              tailored to what they're actually for — Postgres for
              structured, relational data, MongoDB for flexible schemas,
              Prisma for type-safe database access, or Firebase for
              real-time features and quick MVPs. Unlike agencies that push
              one stack regardless of fit, the tools get chosen based on
              what the product needs.
            </p>
          </div>
        </section>

        <section className="services">
          <div className="wrap">
            <p className="section-label">services</p>
            <div className="services-grid">
              <div className="service-card">
                <h3>Full-stack Next.js builds</h3>
                <p>
                  Frontend and backend in one codebase, deployed to Vercel.
                  Fast to ship, easy to maintain.
                </p>
              </div>
              <div className="service-card">
                <h3>Database architecture</h3>
                <p>
                  Postgres or MongoDB, chosen for the shape of your data —
                  not the shape of a trend.
                </p>
              </div>
              <div className="service-card">
                <h3>Type-safe backends</h3>
                <p>
                  Prisma-backed queries and migrations that don't break at
                  2am, with types that catch mistakes before your users do.
                </p>
              </div>
              <div className="service-card">
                <h3>Real-time &amp; rapid MVPs</h3>
                <p>
                  Firebase when speed matters more than scale — auth,
                  sync, and storage without weeks of setup.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="who">
          <div className="wrap who-for">
            <p className="section-label" style={{ marginBottom: 0 }}>
              who this is for
            </p>
            <p>
              Founders and small teams who need someone to make the right
              technical call, not just write code — especially at the stage
              where "which database should I use" actually matters.
            </p>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="wrap">
            <p className="section-label">start a project</p>
            <h2>Tell me what you're building. I'll tell you what it needs.</h2>
            <a className="cta-btn" href="mailto:hello@stackforge.dev">
              hello@stackforge.dev
            </a>
          </div>
        </section>
      </main>

      <footer className="wrap">
        <span>© {new Date().getFullYear()} Stackforge</span>
        <span>Next.js · Vercel</span>
      </footer>
    </>
  );
}
