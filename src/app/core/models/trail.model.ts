import { difficulty } from "../enum/difficulty.enum";
import { Schooling } from "../enum/schooling.enum";

export interface TrailModel {
    id: string,
    name: string,
    resume: string,
    difficulty: difficulty | null,
    activities: Array<string>,
    schooling: Schooling | null
}