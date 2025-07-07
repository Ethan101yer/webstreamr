// src/types.ts

/**
 * A “flat” config map: keys are arbitrary strings (your source IDs 
 * such as "soaper", "vidsrc", or the global flags), values are 
 * either boolean (for checkboxes) or string (for text/password fields).
 */
export type Config = Partial<Record<string, boolean | string>>;

/**
 * Describe one of your scraping handlers / sources.
 * - `id` is the unique key (matches the checkbox key in the manifest).
 * - `label` is the human-readable title for that checkbox.
 * - `countryCodes` is now optional—add it only if your source needs it.
 * - Extend this interface with any other properties your handlers use.
 */
export interface Source {
  id: string;
  label: string;
  countryCodes?: string[];
  // …and any other fields your source modules rely on
}
