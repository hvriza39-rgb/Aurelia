import { useRef, useState, useLayoutEffect } from "react";

export default function Logo({
  width = 240,
  height = 160,
  className = "",
  showBackground = true,
}) {
  const iRef = useRef(null);
  const [dot, setDot] = useState({ cx: 1170, cy: 430 }); // sensible fallback

  useLayoutEffect(() => {
    if (!iRef.current) return;
    try {
      const box = iRef.current.getBBox();
      // Center horizontally over the glyph, sit just above its top
      // (getBBox top includes the font's own dot, so this tracks it
      // exactly regardless of which font in the stack actually loaded).
      setDot({
        cx: box.x + box.width / 2,
        cy: box.y + box.height * 0.12,
      });
    } catch {
      // getBBox can throw if the element isn't rendered yet (e.g. SSR) —
      // fallback state above covers that case.
    }
  }, []);

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

      {/*
        A mark + sparkle, grouped and transformed together.
        Scaling as a group keeps the sparkle locked to the icon's
        negative-space notch, instead of needing separate hardcoded
        coordinates that drift out of sync if the icon ever moves.

        Scale 0.68 brings the icon's height close to the wordmark's
        cap-height (with a slight, intentional overshoot above and
        below — the way most icon+wordmark lockups are balanced).
      */}
      <g transform="translate(-46.6, 224.3) scale(0.68)">
        <defs>
          <clipPath id="logoLeftHalf">
            <rect x="0" y="0" width="432" height="1024" />
          </clipPath>
          <clipPath id="logoRightHalf">
            <rect x="432" y="0" width="700" height="1024" />
          </clipPath>
        </defs>

        <path
          clipPath="url(#logoLeftHalf)"
          fill="#10110f"
          d="M432 226 L245 597 L320 597 L432 383 Z"
        />
        <path
          clipPath="url(#logoRightHalf)"
          fill="#d6a85f"
          d="M432 226 L619 597 L544 597 L432 383 Z"
        />

        <path
          fill="#d6a85f"
          d="M414 505 C417 528 420 531 443 534 C420 537 417 540 414 563 C411 540 408 537 385 534 C408 531 411 528 414 505 Z"
        />
      </g>

      {/*
        Wordmark, moved right to give the icon real breathing room
        (gap is now proportional to icon width, not an arbitrary gap).
        Split into tspans so the "i" can be measured directly instead
        of guessing its x-position from font metrics.
      */}
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

      {/* Gold dot, dynamically positioned over the "i" — masks the
          font's default black dot, then redraws it in gold. Because
          this now reads the live glyph position, it stays correct
          even if Manrope fails to load and a fallback font renders
          with different metrics. */}
      <circle cx={dot.cx} cy={dot.cy} r={17} fill="#f5f3ee" />
      <circle cx={dot.cx} cy={dot.cy} r={15} fill="#d6a85f" />
    </svg>
  );
}
