const LS_COLOR_SCHEME_KEY = 'jsoon:theme';

export function applyScheme(scheme: 'dark' | 'light'): void {
  document.documentElement.setAttribute('scheme', scheme);
  return window.localStorage.setItem(
    LS_COLOR_SCHEME_KEY,
    JSON.stringify(scheme),
  );
}

export function getSavedScheme(): 'dark' | 'light' {
  return window.localStorage.getItem(LS_COLOR_SCHEME_KEY) as 'dark' | 'light';
}
