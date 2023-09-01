export interface InterfaceListProblems {
  part: string;
  partTitle: string;
  partSlug: string;
  partId: number;
  tasks: InterfaceTask[];
}

export interface InterfaceTask {
  slug: string;
  title: string;
  problem: string;
  example?: string;
  startCode: string;
  handleFunction: (fn: any) => boolean;
}
