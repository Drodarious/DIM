import React from 'react';

export default function ExternalLink({
  href,
  children,
  ...props
}: {
  href: string;
  children: React.ReactNode;
} & Partial<
  React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
>) {
  return (
    <a target="_blank" rel="noopener noreferrer" href={href} {...props}>
      {children}
    </a>
  );
}
