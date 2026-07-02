export function ServiceIcon({ type }: { type: "bag" | "truck" | "gift" }) {
  const common = {
    width: 44,
    height: 44,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.2,
  };
  if (type === "bag") {
    return (
      <svg {...common}>
        <path d="M6 7h12l1 14H5L6 7z" />
        <path d="M9 7a3 3 0 0 1 6 0" />
        <path d="M15 10v1M9 10v1" />
      </svg>
    );
  }
  if (type === "truck") {
    return (
      <svg {...common}>
        <path d="M2 7h11v9H2z" />
        <path d="M13 10h5l3 3v3h-8z" />
        <circle cx="6" cy="18" r="1.6" />
        <circle cx="17" cy="18" r="1.6" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M4 9h16v11H4z" />
      <path d="M4 9l1-3h14l1 3M12 9v11" />
      <path d="M12 9c-1.5-3-5-3-4 0M12 9c1.5-3 5-3 4 0" />
    </svg>
  );
}
