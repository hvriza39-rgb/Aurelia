import SectionLabel from "@/components/SectionLabel";

export const metadata = {
  title: "About — Aurelia | Digital Product Studio",
  description:
    "Aurelia is a digital product studio helping ambitious businesses turn ideas into beautiful, useful technology.",
};

const principles = [
  {
    label: "01",
    title: "Build for the problem",
    text: "Technology should serve the business, not the other way around. We start with understanding the problem deeply before proposing any solution.",
  },
  {
    label: "02",
    title: "Keep it useful",
    text: "Every feature should have a reason to exist. We avoid adding complexity that doesn't directly serve the user or the business.",
  },
  {
    label: "03",
    title: "Make it beautiful",
    text: "Good software should be easy and enjoyable to use. Design is not decoration — it is how the product works.",
  },
  {
    label: "04",
    title: "Engineer for tomorrow",
    text: "Build quickly, but don't create tomorrow's technical debt unnecessarily. We choose tools and patterns that scale with the business.",
  },
  {
    label: "05",
    title: "Stay human",
    text: "Clients should work with people, not a ticketing system. We communicate clearly, respond quickly, and treat every project with care.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <div className="wrap">
        <div className="about-hero">
          <SectionLabel>About Aurelia</SectionLabel>
          <h1>
            We&apos;re building the kind
            <br />
            of technology businesses
            <br />
            <span>actually need.</span>
          </h1>
          <p>
            Aurelia is a digital product studio. We help ambitious businesses
            turn ideas into beautiful, useful technology — from websites and web
            apps to complete business platforms. We believe software should
            feel effortless, look intentional, and solve real problems.
          </p>
        </div>
      </div>

      <section className="about-story">
        <div className="wrap about-story-grid">
          <div>
            <h2>Why we exist</h2>
          </div>
          <div>
            <p>
              Most businesses don't need another generic website or off-the-shelf
              tool. They need technology that fits the way they work — software
              that connects their processes, serves their customers, and grows
              with their ambitions.
            </p>
            <p>
              Aurelia was created to fill that gap. We work closely with
              founders, business owners, and teams to understand what they
              actually need, then build it with care, precision, and attention
              to detail.
            </p>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="wrap about-story-grid">
          <div>
            <h2>How we work with clients</h2>
          </div>
          <div>
            <p>
              We don't take briefs and disappear for three months. We collaborate
              closely throughout the entire process — from the first
              conversation through launch and beyond.
            </p>
            <p>
              Every project begins with discovery. We ask questions, observe
              workflows, and map the problem space before writing a single line
              of code. Then we design, build, test, and launch — keeping you
              involved at every stage.
            </p>
          </div>
        </div>
      </section>

      <section className="principles">
        <div className="wrap">
          <h2>Our principles</h2>
          <div className="principles-grid">
            {principles.map((p) => (
              <div className="principle" key={p.label}>
                <span>{p.label}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
