interface SocialIconProps {
  className?: string;
}

export function InstagramIcon({ className = "h-4 w-4" }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className = "h-4 w-4" }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M14 8h-1.5a1.5 1.5 0 0 0-1.5 1.5V11H10v2h1v5h2v-5h1.5l.5-2H13v-.5c0-.3.2-.5.5-.5H14V8z" />
    </svg>
  );
}
