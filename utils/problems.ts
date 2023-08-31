const LS_PROBLEMS_KEY = 'mascode:problems';

export function applyProblem(scheme: 'dark' | 'light'): void {
  return window.localStorage.setItem(LS_PROBLEMS_KEY, JSON.stringify(scheme));
}

export function getProblem(): 'dark' | 'light' {
  return window.localStorage.getItem(LS_PROBLEMS_KEY) as 'dark' | 'light';
}
