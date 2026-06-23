export default function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      <a
        href="https://instagram.com/whataboutaworld"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="text-foreground/50 transition-colors hover:text-accent-green"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          className="h-4 w-4"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      </a>
      <a
        href="https://pinterest.com/whataboutaworld"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pinterest"
        className="text-foreground/50 transition-colors hover:text-accent-green"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          className="h-4 w-4"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M9.5 19c.6-2.3 1.2-4.8 1.8-7.2M11.3 11.8c-.5 2-1 4-1.5 6M9.7 13.4c-.4-1-.2-3.1 2-3.6 2.4-.6 3.6 1 3.4 2.7-.2 1.8-1.4 3.1-2.8 2.9-1-.1-1.3-.7-1.3-.7" />
        </svg>
      </a>
    </div>
  );
}
