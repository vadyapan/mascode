const LS_SOLVED_KEY = 'mascode:solved';

export function saveSolved(solved: Record<string, boolean>): void {
  return window.localStorage.setItem(LS_SOLVED_KEY, JSON.stringify(solved));
}

export function getSolved(): Record<string, boolean> | null {
  const storedData = window.localStorage.getItem(LS_SOLVED_KEY);
  if (storedData) {
    try {
      const parsedData = JSON.parse(storedData);
      if (typeof parsedData === 'object') {
        return parsedData;
      }
    } catch (error) {
      return null;
    }
  }

  return null;
}
