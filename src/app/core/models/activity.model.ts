export interface ActivityModel {
  id: string,
  title: string,
  summarize: string,
  question: string,
  alternatives: Array<string>,
  points: number | null,
  resources: Array<string>,
  explanation: string
}

export interface ActivityStatisticModel
{
  isCompleted: boolean,
  viewed: boolean,
  points: number
}