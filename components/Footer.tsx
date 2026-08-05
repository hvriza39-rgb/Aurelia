import Link from "next/link";
import Logo from "./Logo";
import { footerLinks } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer wrap">
      <div>
        <Link href="/" className="brand footer-brand" aria-label="Aurelia home">
          <Logo width={110} height={34} />
        </Link>
        <div className="footer-nav">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="footer-center">
        <div>Websites · Apps · Software</div>
      </div>

      <div className="footer-right">
        <div className="footer-contact">
          <a href="mailto:hello@aurelia.dev">hello@aurelia.dev</a>
          <a href="https://wa.me/2340000000000" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
        <div style={{ marginTop: "12px" }}>
          © {year} Aurelia
        </div>
      </div>
    </footer>
  );
}
