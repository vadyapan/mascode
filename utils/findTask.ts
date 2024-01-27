import { listProblems } from '@/data/listProblems';
import { ListTasks } from '@/types/interfaces';

type FindTask = {
  part: string;
  task: string;
};

export function findTask({ part, task }: FindTask): ListTasks | undefined {
  const isFoundPart = listProblems.find((item) => item.slug === part);

  if (isFoundPart) {
    const isFoundTask = isFoundPart.tasks.find((item) => item.slug === task);

    if (isFoundTask) return isFoundTask;

    return;
  }

  return;
}
