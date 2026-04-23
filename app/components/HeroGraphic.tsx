const GRID_COLS = 14;
const GRID_ROWS = 10;
const SPACING = 28;
const PADDING = 20;
const WIDTH = PADDING * 2 + (GRID_COLS - 1) * SPACING;
const HEIGHT = PADDING * 2 + (GRID_ROWS - 1) * SPACING;

const CIRCLE_CX = WIDTH * 0.55;
const CIRCLE_CY = HEIGHT * 0.5;
const CIRCLE_R = HEIGHT * 0.42;

export function HeroGraphic({ className = "" }: { className?: string }) {
  const dots: { x: number; y: number; inside: boolean }[] = [];
  for (let r = 0; r < GRID_ROWS; r++) {
    for (let c = 0; c < GRID_COLS; c++) {
      const x = PADDING + c * SPACING;
      const y = PADDING + r * SPACING;
      const dx = x - CIRCLE_CX;
      const dy = y - CIRCLE_CY;
      const inside = Math.sqrt(dx * dx + dy * dy) <= CIRCLE_R - 4;
      dots.push({ x, y, inside });
    }
  }

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      role="img"
      aria-label="Abstract composition: an organic circle, the human lens, overlaid on a grid of dots representing AI tooling. Dots inside the circle glow in accent orange."
      className={className}
    >
      <defs>
        <clipPath id="lens">
          <circle cx={CIRCLE_CX} cy={CIRCLE_CY} r={CIRCLE_R - 4} />
        </clipPath>
      </defs>

      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.x}
          cy={d.y}
          r={1.6}
          className={d.inside ? "fill-accent" : "fill-ink/20"}
        />
      ))}

      <circle
        cx={CIRCLE_CX}
        cy={CIRCLE_CY}
        r={CIRCLE_R}
        className="fill-none stroke-ink"
        strokeWidth={1.25}
      />
    </svg>
  );
}
