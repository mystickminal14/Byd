import type { ReactNode } from 'react';
import { Link as RouterLink } from '@tanstack/react-router';

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  'aria-label'?: string;
};

/**
 * Internal route paths use the client router; hash links, external URLs and
 * tel/mailto fall back to <a>.
 */
export default function Link({ href, children, className, onClick, ...rest }: Props) {
  const isPlainAnchor =
    href.includes('#') ||
    href.startsWith('http') ||
    href.startsWith('tel:') ||
    href.startsWith('mailto:');

  if (isPlainAnchor) {
    const external = href.startsWith('http');
    return (
      <a
        href={href}
        className={className}
        onClick={onClick}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <RouterLink to={href as any} className={className} onClick={onClick} {...rest}>
      {children}
    </RouterLink>
  );
}
