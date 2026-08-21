import { Link } from "@tanstack/react-router";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type AppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

/**
 * Link wrapper: internal paths use the router, hash anchors and external
 * URLs fall back to a plain anchor so in-page scrolling keeps working.
 */
export function AppLink({ href, children, ...rest }: AppLinkProps) {
  const isRouted = href.startsWith("/") && !href.startsWith("//");

  if (isRouted) {
    const linkProps = rest as Record<string, unknown>;
    return (
      <Link to={href} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}
