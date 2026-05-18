const PROD_HOST = "https://beanstalkevents.com";

/**
 * Returns the canonical site URL for use in metadata.
 * Reads NEXT_PUBLIC_SITE_URL from env; falls back to production.
 * Strips trailing slash.
 */
export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL || PROD_HOST;
  return url.replace(/\/$/, "");
}

/**
 * Returns true when this build is the live production site.
 * Used to decide whether to allow indexing.
 */
export function isProduction(): boolean {
  return getSiteUrl() === PROD_HOST;
}

/**
 * Build a canonical URL for a given path.
 * canonical('/tickets') -> 'https://beanstalkevents.com/tickets'
 */
export function canonical(path: string = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${clean === "/" ? "" : clean}`;
}
