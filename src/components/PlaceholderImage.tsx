export default function PlaceholderImage({
  aspect = "aspect-[3/4]",
  className = "",
}: {
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`${aspect} ${className} flex items-center justify-center rounded-3xl bg-gradient-to-br from-accent-soft/40 via-background to-accent-green/15 transition-transform duration-500 hover:scale-[1.02]`}
    >
      <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-foreground/30">
        photo
      </span>
    </div>
  );
}
