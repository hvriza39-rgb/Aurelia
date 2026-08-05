"use client";

import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import Logo from "./Logo";
import { navLinks } from "@/lib/data";

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="mobile-menu">
      <div className="mobile-menu-header">
        <Link href="/" className="brand" aria-label="Aurelia home" onClick={onClose}>
          <Logo width={120} height={36} />
        </Link>
        <button
          className="mobile-menu-close"
          onClick={onClose}
          aria-label="Close menu"
        >
          <X size={20} />
        </button>
      </div>

      <div className="mobile-menu-links">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} onClick={onClose}>
            {link.label}
          </Link>
        ))}
      </div>

      <Link
        href="/start-project"
        className="mobile-menu-cta"
        onClick={onClose}
      >
        Start a project
        <ArrowUpRight size={18} />
      </Link>
    </div>
  );
}
  
