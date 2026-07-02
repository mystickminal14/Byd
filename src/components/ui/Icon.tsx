import type { Feature } from '@/types';

const PATHS: Record<Feature['icon'], string> = {
  battery:
    'M3 9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Zm18 2v2M7 10.5v3m3.5-3v3m3.5-3v3',
  tech: 'M4 6h16v10H4V6Zm4 14h8m-4-4v4M8 9.5h5m-5 3h8',
  safety:
    'M12 3l7 3v5c0 4.5-3 8.2-7 9.5-4-1.3-7-5-7-9.5V6l7-3Zm-3 9 2.2 2.2L15.5 9.8',
  design:
    'M4 15.5 9 5l3.5 6.5L15 8l5 7.5M3 19h18m-9.5-7.2.9 1.7',
  comfort:
    'M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4m-14 0a2 2 0 1 0 0 4h14a2 2 0 1 0 0-4m-14 0h14M7 19v-2m10 2v-2',
  charge: 'M13 2 5 13h6l-1 9 8-11h-6l1-9Z',
};

/** Minimal line icon set keyed to feature categories. */
export default function Icon({
  name,
  className = 'h-6 w-6',
}: {
  name: Feature['icon'];
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={PATHS[name]} />
    </svg>
  );
}
