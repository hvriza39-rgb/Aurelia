"use client";

import { useRef, useState, useEffect, useId } from "react";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  showBackground?: boolean;
}

export default function Logo({
  width = 240,
  height = 160,
  className = "",
  showBackground = false,
}: LogoProps) {
  const iRef = useRef<SVGTSpanElement>(null);
  const [dot, setDot] = useState({ cx: 1170, cy: 430 });
  const id = useId();
  const leftClipId = `logoLeft-${id}`;
  const rightClipId = `logoRight-${id}`;

  useEffect(() => {
    function measure() {
      if (!iRef.current) return;
      try {
        const box = iRef.current.getBBox();
        setDot({
          cx: box.x + box.width / 2,
          cy: box.y + box.height * 0.12,
        });
      } catch {
        // Keep fallback if measurement fails (SSR, hidden, etc.)
      }
    }

    measure();

    // Remeasure when fonts load — Manrope may arrive after initial paint
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(measure);
    }

    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [id]);

  return (
    <svg
      viewBox="0 0 1536 1024"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Aurelia"
    >
      {showBackground && (
        <rect x="0" y="0" width="1536" height="1024" fill="#f5f3ee" />
      )}

      <g transform="translate(-46.6, 224.3) scale(0.68)">
        <defs>
          <clipPath id={leftClipId}>
            <rect x="0" y="0" width="432" height="1024" />
          </clipPath>
          <clipPath id={rightClipId}>
            <rect x="432" y="0" width="700" height="1024" />
          </clipPath>
        </defs>

        <path
          clipPath={`url(#${leftClipId})`}
          fill="#10110f"
          d="M432 226 L245 597 L320 597 L432 383 Z"
        />
        <path
          clipPath={`url(#${rightClipId})`}
          fill="#d6a85f"
          d="M432 226 L619 597 L544 597 L432 383 Z"
        />

        <path
          fill="#d6a85f"
          d="M414 505 C417 528 420 531 443 534 C420 537 417 540 414 563 C411 540 408 537 385 534 C408 531 411 528 414 505 Z"
        />
      </g>

      <text
        x="470"
        y="600"
        fontFamily="'Manrope', 'Helvetica Neue', Arial, sans-serif"
        fontWeight={800}
        letterSpacing="-0.04em"
        fontSize={220}
        fill="#10110f"
      >
        <tspan>Aurel</tspan>
        <tspan ref={iRef}>i</tspan>
        <tspan>a</tspan>
      </text>

      {/* Gold dot over the "i" — positioned dynamically so it tracks
          the actual rendered glyph even if Manrope fails to load. */}
      <circle cx={dot.cx} cy={dot.cy} r={17} fill="#f5f3ee" />
      <circle cx={dot.cx} cy={dot.cy} r={15} fill="#d6a85f" />
    </svg>
  );
}
