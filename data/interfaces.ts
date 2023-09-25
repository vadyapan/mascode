export interface InterfaceListProblems {
  part: string;
  partTitle: string;
  partSlug: string;
  partId: number;
  tasks: InterfaceProblem[];
}

export interface InterfaceProblem {
  slug: string;
  title: string;
}

export interface InterfaceDataProblems {
  slug: string;
  title: string;
  problem: string;
  example?: string;
  problemSecond?: string;
  exampleSecond?: string;
  startCode: string;
  handleFunction: (fn: any) => boolean;
}
