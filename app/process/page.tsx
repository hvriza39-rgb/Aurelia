import SectionLabel from "@/components/SectionLabel";
import { processSteps } from "@/lib/data";

export const metadata = {
  title: "Process — Aurelia | How We Work",
  description:
    "Discover, Design, Build, Test, Launch, Grow. Our clear, proven process for turning ideas into working digital products.",
};

export default function ProcessPage() {
  return (
    <main className="process-page">
      <div className="wrap">
        <div className="process-page-hero">
          <SectionLabel>How we work</SectionLabel>
          <h1>
            Clear thinking.
            <br />
            <span>Good design.</span>
            <br />
            Serious execution.
          </h1>
        </div>

        <div className="process-list" style={{ marginTop: "100px" }}>
          {processSteps.map((step) => (
            <div className="process-item" key={step.number}>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="process-deliverables">
                  {step.deliverables.map((d) => (
                    <span key={d}>{d}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
