export function SpikeMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M16 2 L26 30 L16 24 L6 30 Z"
        fill="currentColor"
      />
    </svg>
  );
}
