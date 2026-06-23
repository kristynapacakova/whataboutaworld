export default function PlaceholderImage({
  aspect = "aspect-[3/4]",
  className = "",
  rounded = "rounded-lg",
}: {
  aspect?: string;
  className?: string;
  rounded?: string;
}) {
  return (
    <div
      className={`${aspect} ${rounded} ${className} flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent-soft via-card to-accent-soft transition-transform duration-500 hover:scale-[1.02]`}
    >
      <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-foreground/30">
        photo
      </span>
    </div>
  );
}
