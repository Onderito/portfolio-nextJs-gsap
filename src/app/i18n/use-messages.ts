"use client";

import { useParams } from "next/navigation";
import { getMessages, type Messages } from "./messages";
import { normalizeLocale, type Locale } from "./locales";

export function useMessages(): Messages {
  const params = useParams();
  const raw = (params as { locale?: string | string[] } | null)?.locale;
  const locale = Array.isArray(raw) ? raw[0] : raw;
  return getMessages(locale);
}

export function useLocale(): Locale {
  const params = useParams();
  const raw = (params as { locale?: string | string[] } | null)?.locale;
  const locale = Array.isArray(raw) ? raw[0] : raw;
  return normalizeLocale(locale);
}
