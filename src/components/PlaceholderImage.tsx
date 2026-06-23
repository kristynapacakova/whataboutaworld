export default function PlaceholderImage({
  aspect = "aspect-[3/4]",
  className = "",
  rotate = "",
  polaroid = true,
}: {
  aspect?: string;
  className?: string;
  rotate?: string;
  polaroid?: boolean;
}) {
  const frame = (
    <div
      className={`${aspect} flex items-center justify-center bg-gradient-to-br from-accent-soft/50 via-background to-accent-green/15`}
    >
      <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-foreground/30">
        photo
      </span>
    </div>
  );

  if (!polaroid) {
    return <div className={className}>{frame}</div>;
  }

  return <div className={`polaroid ${rotate} ${className}`}>{frame}</div>;
}
