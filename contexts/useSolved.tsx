'use client';
import { useEffect, useState } from 'react';
import { getSolved, saveSolved } from '@/utils/storageSolved';

export interface SolvedProblems {
  [problemSlug: string]: boolean;
}

export function useSolved(): [
  SolvedProblems,
  (newSolved: SolvedProblems) => void,
] {
  const [userProblems, setUserProblems] = useState<SolvedProblems>({});

  useEffect(() => {
    const getLocalSolved = getSolved();
    if (getLocalSolved) setUserProblems(getLocalSolved);
  }, []);

  useEffect(() => {
    saveSolved(userProblems);
  }, [userProblems]);

  const updateUserProblems = (newSolved: SolvedProblems): void => {
    setUserProblems(newSolved);
  };

  return [userProblems, updateUserProblems];
}
