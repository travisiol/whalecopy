/**
 * The mark: a whale's back breaking a line, where the line is the price and
 * the whale is what moves it. Drawn as one filled body plus a fluke so it
 * stays readable at 16px in a browser tab.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden
      role="presentation"
    >
      <path
        d="M2 20.5c3.6 0 5.1-2.6 7.4-5.4C12 11.7 15.4 9 19.6 9c4.6 0 7.7 2.9 8.9 6.3.5 1.4-.6 2.4-1.7 1.7-1.4-.9-2.9-1.2-4.3-.8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M22 16.6c-1.1 3.9-4.9 7-9.8 7-4.4 0-8.2-2.2-10.2-5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M30 9.5c0 3.2-1.6 5.3-3.6 6.1-.6.3-1.2-.3-1-.9.5-1.6.4-3.4-.4-5.2-.3-.6.2-1.2.8-1.1 1.5.2 2.9.5 4.2 1.1z"
        fill="currentColor"
      />
      <circle cx="9.5" cy="18" r="1.3" fill="currentColor" />
    </svg>
  );
}
