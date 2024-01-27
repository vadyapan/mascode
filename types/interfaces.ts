export interface ListProblems {
  id: number;
  slug: string;
  part: string;
  title: string;
  tasks: ListTasks[];
}

export interface ListTasks {
  id: number;
  slug: string;
  title: string;
  handleFunction: (fn: any) => boolean;
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

export interface ListFAQ {
  id: number;
  question: string;
  answer: string;
}

export interface GetDataWithOneQueryParam {
  path: string;
  query: string;
  param: string;
}
