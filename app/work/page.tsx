import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Work — Aurelia | Selected Projects",
  description:
    "See what Aurelia has built. Healthcare platforms, business systems, e-commerce stores, and custom software for ambitious businesses.",
};

function WorkItemVisual({ index }: { index: number }) {
  const visuals = [
    <div className="browser-window" key={0}>
      <div className="browser-top">
        <div className="browser-dots"><i /><i /><i /></div>
        <span>aurelia.build</span>
      </div>
      <div className="browser-content">
        <div className="mock-sidebar" />
        <div className="mock-dashboard">
          <div className="mock-title" />
          <div className="mock-stats"><span /><span /><span /></div>
          <div className="mock-chart" />
        </div>
      </div>
    </div>,
    <div className="browser-window" key={1}>
      <div className="browser-top">
        <div className="browser-dots"><i /><i /><i /></div>
        <span>aurelia.build</span>
      </div>
      <div className="browser-content">
        <div className="mock-platform"><div /><div /><div /><div /></div>
      </div>
    </div>,
    <div className="browser-window" key={2}>
      <div className="browser-top">
        <div className="browser-dots"><i /><i /><i /></div>
        <span>aurelia.build</span>
      </div>
      <div className="browser-content">
        <div className="mock-store">
          <div className="store-image" />
          <div className="store-lines"><span /><span /><span /></div>
        </div>
      </div>
    </div>,
    <div className="browser-window" key={3}>
      <div className="browser-top">
        <div className="browser-dots"><i /><i /><i /></div>
        <span>aurelia.build</span>
      </div>
      <div className="browser-content">
        <div className="mock-booking">
          <div className="booking-calendar">Calendar</div>
          <div className="booking-form">
            <span /><span /><span /><span />
          </div>
        </div>
      </div>
    </div>,
  ];
  return visuals[index] || null;
}

export default function WorkPage() {
  return (
    <main className="work-page">
      <div className="wrap">
        <div className="work-hero">
          <SectionLabel>Selected work</SectionLabel>
          <h1>
            Products built around
            <br />
            <span>real problems.</span>
          </h1>
          <p>
            Every project starts with a different problem. That&apos;s why every
            product we build gets its own approach.
          </p>
        </div>

        <div className="work-list">
          {projects.map((project, index) => (
            <article className="work-item" key={project.slug}>
              <div className={`work-item-visual ${project.className}`}>
                <WorkItemVisual index={index} />
              </div>
              <div className="work-item-info">
                <span className="project-type">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="work-item-meta">
                  <span>{project.year}</span>
                  <span>{project.technologies.slice(0, 3).join(" · ")}</span>
                </div>
                <Link href={`/work/${project.slug}`} className="work-item-link">
                  View case study
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
