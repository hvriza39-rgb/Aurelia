export default function Logo({
  width = 240,
  height = 160,
  className = "",
  showBackground = true,
}) {
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
      <defs>
        <clipPath id="logoLeftHalf">
          <rect x="0" y="0" width="432" height="1024" />
        </clipPath>

        <clipPath id="logoRightHalf">
          <rect x="432" y="0" width="700" height="1024" />
        </clipPath>
      </defs>

      {showBackground && (
        <rect
          x="0"
          y="0"
          width="1536"
          height="1024"
          fill="#f5f3ee"
        />
      )}

      {/* A mark */}
      <g>
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
      </g>

      {/* Sparkle */}
      <path
        fill="#d6a85f"
        d="M414 505 C417 528 420 531 443 534 C420 537 417 540 414 563 C411 540 408 537 385 534 C408 531 411 528 414 505 Z"
      />

      {/* Wordmark */}
      <text
        x="655"
        y="600"
        fontFamily="'Manrope', 'Helvetica Neue', Arial, sans-serif"
        fontWeight={800}
        letterSpacing="-0.04em"
        fontSize={300}
        fill="#10110f"
      >
        Aurelia
      </text>

      {/* Gold dot over the i */}
      <circle
        cx={1170}
        cy={430}
        r={17}
        fill="#f5f3ee"
      />

      <circle
        cx={1170}
        cy={430}
        r={15}
        fill="#d6a85f"
      />
    </svg>
  );
}
