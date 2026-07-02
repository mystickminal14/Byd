import { cn } from '@/lib/utils';

/** Official BYD wordmark (mirrored from byd.com). `invert` renders it dark. */
export default function BydLogo({
  className = '',
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <img
      src="/assets/global/byd-logo.svg"
      alt="BYD"
      draggable={false}
      className={cn('h-5 w-auto select-none', invert ? '' : 'brightness-0 invert', className)}
    />
  );
}
