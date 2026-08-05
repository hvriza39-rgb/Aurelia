"use client";

interface LogoProps {
  width?: number;
  height?: number;
  showBackground?: boolean;
  className?: string;
}

export default function Logo({
  width = 150,
  height = 100,
  showBackground = false,
  className = "",
}: LogoProps) {
  return (
    <div
      className={`brand ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "11px",
        fontFamily: "var(--font-display)",
        fontSize: "18px",
        fontWeight: 800,
        letterSpacing: "-0.04em",
        color: showBackground ? "#f5f3ee" : "#10110f",
      }}
    >
      <span
        className="brand-mark"
        style={{
          width: "29px",
          height: "29px",
          position: "relative",
          display: "inline-block",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            position: "absolute",
            display: "block",
            width: "16px",
            height: "16px",
            border: "2px solid currentColor",
            transform: "rotate(45deg)",
            top: "1px",
            left: "1px",
          }}
        />
        <span
          style={{
            position: "absolute",
            display: "block",
            width: "16px",
            height: "16px",
            border: "2px solid #d6a85f",
            background: "#d6a85f",
            transform: "rotate(45deg)",
            right: "1px",
            bottom: "1px",
          }}
        />
      </span>
      Aurelia
    </div>
  );
}
