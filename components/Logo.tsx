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
    <svg
      width={width}
      height={height}
      viewBox="0 0 150 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {showBackground && (
        <rect width="150" height="100" rx="8" fill="#10110f" />
      )}
      <text
        x={showBackground ? "75" : "0"}
        y={showBackground ? "62" : "62"}
        textAnchor={showBackground ? "middle" : "start"}
        fill={showBackground ? "#f5f3ee" : "#10110f"}
        fontFamily="Manrope, sans-serif"
        fontWeight="800"
        fontSize="42"
        letterSpacing="-0.04em"
      >
        Aurelia
      </text>
    </svg>
  );
}
