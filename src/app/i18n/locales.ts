export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export function normalizeLocale(input: unknown): Locale {
  return input === "en" ? "en" : "fr";
}

export function isLocale(input: unknown): input is Locale {
  return input === "fr" || input === "en";
}

