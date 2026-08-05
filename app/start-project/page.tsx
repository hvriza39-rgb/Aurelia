"use client";

import { useState } from "react";
import { ArrowUpRight, Loader2 } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const projectTypes = [
  "Website",
  "Web application",
  "Mobile application",
  "E-commerce",
  "Business software",
  "MVP",
  "Something else",
];

const stages = [
  "Just an idea",
  "Planning",
  "Design already exists",
  "Existing product",
  "Needs improvement",
];

const budgets = [
  "Under ₦500k",
  "₦500k – ₦1.5m",
  "₦1.5m – ₦5m",
  "₦5m – ₦10m",
  "₦10m+",
  "Not sure yet",
];

const timelines = [
  "Immediately",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Not sure",
];

export default function StartProjectPage() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [stage, setStage] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (selectedTypes.length === 0) {
      setError("Please select at least one project type.");
      return;
    }
    if (!description.trim()) {
      setError("Please tell us about your project.");
      return;
    }
    if (!name.trim() || !email.trim()) {
      setError("Please provide your name and email.");
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectTypes: selectedTypes,
          description,
          stage,
          budget,
          timeline,
          name,
          company,
          email,
          phone,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <main className="start-project">
        <div className="wrap">
          <div className="form-success">
            <h3>Thanks — we&apos;ve got it.</h3>
            <p>
              We&apos;ll review your project and get back to you within 24
              hours.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="start-project">
      <div className="wrap">
        <SectionLabel>Have something in mind?</SectionLabel>
        <h1>
          Tell us what you&apos;re
          <br />
          <span>building.</span>
        </h1>
        <p>
          You don&apos;t need a perfect specification. Tell us what you&apos;re
          trying to accomplish and we&apos;ll help figure out the rest.
        </p>

        <form className="project-form" onSubmit={handleSubmit}>
          <div className="form-step">
            <label className="form-step-label">
              What are you building? <em style={{ color: "var(--text-light)", fontWeight: 400 }}>(Select all that apply)</em>
            </label>
            <div className="form-options">
              {projectTypes.map((type) => (
                <button
                  type="button"
                  key={type}
                  className={`form-option ${selectedTypes.includes(type) ? "selected" : ""}`}
                  onClick={() => toggleType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="form-step">
            <label className="form-step-label">Tell us about the project</label>
            <textarea
              className="form-textarea"
              placeholder="What are you trying to build? What problem should it solve?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="form-step">
            <label className="form-step-label">What stage are you at?</label>
            <div className="form-options">
              {stages.map((s) => (
                <button
                  type="button"
                  key={s}
                  className={`form-option ${stage === s ? "selected" : ""}`}
                  onClick={() => setStage(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="form-step">
            <label className="form-step-label">Estimated budget</label>
            <div className="form-options">
              {budgets.map((b) => (
                <button
                  type="button"
                  key={b}
                  className={`form-option ${budget === b ? "selected" : ""}`}
                  onClick={() => setBudget(b)}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          <div className="form-step">
            <label className="form-step-label">When would you like to start?</label>
            <div className="form-options">
              {timelines.map((t) => (
                <button
                  type="button"
                  key={t}
                  className={`form-option ${timeline === t ? "selected" : ""}`}
                  onClick={() => setTimeline(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="form-step">
            <label className="form-step-label">Your contact details</label>
            <div className="form-grid">
              <input
                className="form-input"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="form-input"
                placeholder="Company (optional)"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
              <input
                className="form-input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="form-input"
                placeholder="Phone / WhatsApp"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          {error && <p className="form-error">{error}</p>}

          <button type="submit" className="form-submit" disabled={submitting}>
            {submitting ? (
              <>
                <Loader2 size={16} className="spin" />
                Sending...
              </>
            ) : (
              <>
                Send project enquiry
                <ArrowUpRight size={16} />
              </>
            )}
          </button>
        </form>
      </div>
    </main>
  );
}
