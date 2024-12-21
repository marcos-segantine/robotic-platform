import { School } from "../enum/school.enum";
import { Schooling } from "../enum/schooling.enum";
import { ScheduleClass } from "../enum/scheduleClass.enum";

export interface StudentModel {
    id: string | null,
    name: string,
    school: School | null,
    schooling: Schooling | null,
    scheduleClass: ScheduleClass | null,
    photoPath: string | null,
    points: number,
    certificates: {
        done: string[]
        inProgress: InProgressCertificatesType[]
        notStarted: string[]
    },
    statistics: Array<Record<string, number>>
    userType: "student"
}

interface InProgressCertificatesType {
    [key: string]: number
}
