export default function PlaceholderImage({
  aspect = "aspect-[3/4]",
  className = "",
}: {
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`${aspect} ${className} flex items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900`}
    >
      <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-zinc-400">
        photo
      </span>
    </div>
  );
}
