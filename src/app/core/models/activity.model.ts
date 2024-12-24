export interface ActivityModel {
  id: string,
  title: string,
  summarize: string,
  question: string,
  alternatives: Array<string>,
  points: number,
  resources: Array<string>,
  explanation: string,
  rightResponse: string
}

export interface ActivityStatisticModel
{
  isCompleted: boolean,
  viewed: boolean,
  points: number
}