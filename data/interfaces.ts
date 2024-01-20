export interface Problem {
  slug: string;
  title: string;
}

export interface ListProblems {
  part: string;
  partTitle: string;
  partSlug: string;
  partId: number;
  tasks: Problem[];
}

export interface DataProblems {
  id?: number;
  slug: string;
  title: string;
  problem: string;
  example?: string;
  problemSecond?: string;
  exampleSecond?: string;
  startCode: string;
  handleFunction: (fn: any) => boolean;
}

export interface ListSolutions {
  slug: string;
  handleFunction: (fn: any) => boolean;
}
