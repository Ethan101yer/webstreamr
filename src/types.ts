import { Manifest, ManifestConfig } from 'stremio-addon-sdk';

export interface Context {
  hostUrl: URL;
  id: string;
  ip?: string;
  config: Config;
}

export type ManifestWithConfig = Manifest & { config: ManifestConfig[] };

export type Config = Partial<Record<string, boolean | string>>;

export enum CountryCode {
  de = 'de',
  en = 'en',
  es = 'es',
  fr = 'fr',
  it = 'it',
  mx = 'mx',
}

export enum BlockedReason {
  cloudflare_challenge = 'cloudflare_challenge',
  flaresolverr_failed = 'flaresolverr_failed',
  unknown = 'unknown',
}

export interface Meta {
  bytes?: number;
  countryCode: CountryCode;
  height?: number;
  title?: string;
}

export enum Format {
  hls = 'hls',
  mp4 = 'mp4',
  unknown = 'unknown',
}

export interface UrlResult {
  url: URL;
  format: Format;
  isExternal?: boolean;
  error?: unknown;
  label: string;
  sourceId: string;
  ttl?: number;
  meta: Meta;
  notWebReady?: boolean;
  requestHeaders?: Record<string, string>;
}
