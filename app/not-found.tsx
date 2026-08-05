import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Page Not Found — Aurelia",
};

export default function NotFound() {
  return (
    <main style={{ paddingTop: "160px", paddingBottom: "160px", textAlign: "center" }}>
      <div className="wrap">
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 8vw, 96px)",
            letterSpacing: "-0.06em",
            lineHeight: 1,
            marginBottom: "20px",
          }}
        >
          404
        </h1>
        <p style={{ color: "var(--text-soft)", fontSize: "17px", lineHeight: 1.7, marginBottom: "40px" }}>
          This page doesn&apos;t exist. It may have been moved or deleted.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "14px 22px",
            background: "var(--dark)",
            color: "var(--white)",
            fontSize: "14px",
            fontWeight: 600,
          }}
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>
      </div>
    </main>
  );
}
