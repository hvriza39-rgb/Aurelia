import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import SectionLabel from "@/components/SectionLabel";
import { projects } from "@/lib/data";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Aurelia Case Study`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  return (
    <main className="case-study">
      <div className="wrap">
        <div className="case-hero">
          <span className="project-type">{project.type}</span>
          <h1>{project.title}</h1>
          <p>{project.longDescription}</p>
          <div className={`case-hero-visual ${project.className}`}>
            <div className="browser-window">
              <div className="browser-top">
                <div className="browser-dots"><i /><i /><i /></div>
                <span>aurelia.build</span>
              </div>
              <div className="browser-content">
                {currentIndex === 0 && (
                  <>
                    <div className="mock-sidebar" />
                    <div className="mock-dashboard">
                      <div className="mock-title" />
                      <div className="mock-stats"><span /><span /><span /></div>
                      <div className="mock-chart" />
                    </div>
                  </>
                )}
                {currentIndex === 1 && (
                  <div className="mock-platform"><div /><div /><div /><div /></div>
                )}
                {currentIndex === 2 && (
                  <div className="mock-store">
                    <div className="store-image" />
                    <div className="store-lines"><span /><span /><span /></div>
                  </div>
                )}
                {currentIndex === 3 && (
                  <div className="mock-booking">
                    <div className="booking-calendar">Calendar</div>
                    <div className="booking-form"><span /><span /><span /><span /></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="case-section">
          <div className="case-grid">
            <div>
              <h2>The challenge</h2>
            </div>
            <div>
              <p>{project.challenge}</p>
            </div>
          </div>
        </div>

        <div className="case-section">
          <h2>Our approach</h2>
          <div className="case-approach-list">
            {project.approach.map((step, i) => (
              <div className="case-approach-item" key={i}>
                <span>Step {i + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="case-section">
          <h2>Key features</h2>
          <div className="case-features">
            {project.features.map((feature, i) => (
              <div className="case-feature" key={i}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="case-section">
          <h2>Technology</h2>
          <div className="case-tech">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>

        <div className="case-section">
          <div className="case-outcome">
            <h2 style={{ marginBottom: "24px" }}>Outcome</h2>
            <p>{project.outcome}</p>
            {project.metrics && (
              <div className="case-metrics">
                {project.metrics.map((m, i) => (
                  <div className="case-metric" key={i}>
                    <strong>{m.value}</strong>
                    <span>{m.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="case-next">
          {prevProject ? (
            <Link href={`/work/${prevProject.slug}`}>
              <ArrowLeft size={16} />
              {prevProject.title}
            </Link>
          ) : (
            <span />
          )}
          {nextProject ? (
            <Link href={`/work/${nextProject.slug}`}>
              {nextProject.title}
              <ArrowRight size={16} />
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </main>
  );
}
