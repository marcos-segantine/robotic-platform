export interface ActivityModel {
  id: string,
  title: string,
  resume: string,
  question: string,
  alternatives: Array<string>,
  points: number | null
}