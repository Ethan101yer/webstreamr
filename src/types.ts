// src/types.ts

/**
 * A “flat” config map: keys are arbitrary strings
 * (e.g. "soaper", "vidsrc", or any other flag),
 * values can be boolean, string, or really anything.
 */
export type Config = {
  [key: string]: any;
};

/**
 * Describes one of your scraping handlers / sources.
 * - `id`: unique key, matches the manifest checkbox key.
 * - `label`: human‑readable title for the checkbox.
 * You can add *any* other props here too.
 */
export interface Source {
  id: string;
  label: string;
  [prop: string]: any;
}
