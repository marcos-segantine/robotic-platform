export interface ActivityModel {
  id: string,
  name: string,
  question: string,
  alternatives: Array<string>,
  points: number | null
}