import SectionLabel from "@/components/SectionLabel";
import { services } from "@/lib/data";

export const metadata = {
  title: "Services — Aurelia | What We Build",
  description:
    "Websites, web applications, custom software, mobile experiences, e-commerce and MVP development. Built around your business.",
};

export default function ServicesPage() {
  return (
    <main className="services-page">
      <div className="wrap">
        <div className="services-hero">
          <SectionLabel>What we build</SectionLabel>
          <h1>
            Technology designed
            <br />
            <span>around your business.</span>
          </h1>
          <p>
            We design and build digital products that solve real business
            problems — not just attractive interfaces.
          </p>
        </div>

        <div className="services-list">
          {services.map((service) => (
            <article className="service-page-card" key={service.number}>
              <span className="service-page-number">{service.number}</span>
              <div className="service-page-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-page-features">
                  {service.features.map((f) => (
                    <span key={f}>{f}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
