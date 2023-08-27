export interface InterfaceTasks {
  slug: string
  title: string
  problem: string
  example?: string
  startCode: string
  handleFunction: (fn: any) => boolean;
}
