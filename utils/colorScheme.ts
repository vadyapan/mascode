import { LS_COLOR_SCHEME_KEY } from '@/constants/localStorage/localStorage';
import { ColorScheme } from '@/types/interfaces';

export function applyScheme(scheme: ColorScheme ): void {
  document.documentElement.setAttribute('scheme', scheme);
  return window.localStorage.setItem(
    LS_COLOR_SCHEME_KEY,
    JSON.stringify(scheme),
  );
}

export function getSavedScheme(): ColorScheme {
  return window.localStorage.getItem(LS_COLOR_SCHEME_KEY) as ColorScheme;
}
