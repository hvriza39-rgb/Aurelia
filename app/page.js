"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import { services, projects, capabilities } from "@/lib/data";

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  return (
    <article className="service-card">
      <div className="service-top">
        <span>{service.number}</span>
        <ArrowUpRight size={22} strokeWidth={1.5} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <span className="service-arrow" aria-hidden="true">
        <ArrowUpRight size={18} />
      </span>
    </article>
  );
}

function ProjectVisual({ index }: { index: number }) {
  return (
    <div className="browser-window">
      <div className="browser-top">
        <div className="browser-dots">
          <i />
          <i />
          <i />
        </div>
        <span>aurelia.build</span>
      </div>
      <div className="browser-content">
        {index === 0 && (
          <>
            <div className="mock-sidebar" />
            <div className="mock-dashboard">
              <div className="mock-title" />
              <div className="mock-stats">
                <span />
                <span />
                <span />
              </div>
              <div className="mock-chart" />
            </div>
          </>
        )}
        {index === 1 && (
          <div className="mock-platform">
            <div />
            <div />
            <div />
            <div />
          </div>
        )}
        {index === 2 && (
          <div className="mock-store">
            <div className="store-image" />
            <div className="store-lines">
              <span />
              <span />
              <span />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="site">
      <section className="hero">
        <div className="wrap">
          <div className="hero-intro animate-in">
            <div className="status">
              <span className="status-dot" />
              Digital product studio
            </div>
            <p className="hero-location">Websites · Apps · Software</p>
          </div>

          <h1 className="animate-in delay-1">
            We build digital
            <br />
            products people
            <br />
            <span>remember.</span>
          </h1>

          <div className="hero-bottom animate-in delay-2">
            <p>
              Aurelia helps ambitious businesses turn ideas into useful,
              beautifully designed technology — from websites and web apps to
              complete business platforms.
            </p>
            <Link href="/work" className="hero-link">
              Explore our work
              <span>
                <ArrowUpRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="visual-section">
        <div className="wrap">
          <div className="visual-card">
            <div className="visual-grid" />

            <div className="floating-card card-one">
              <span>01</span>
              <strong>Idea</strong>
            </div>

            <div className="floating-card card-two">
              <span>02</span>
              <strong>Design</strong>
            </div>

            <div className="floating-card card-three">
              <span>03</span>
              <strong>Build</strong>
           
