import { DataProblems } from '@/types/interfaces';

export interface TaskProps {
  task: DataProblems;
  userCode?: string;
  setUserCode: (userCode: string) => void;
  handleCheckCode: (e: React.MouseEvent<Element, MouseEvent>) => Promise<void>;
}
