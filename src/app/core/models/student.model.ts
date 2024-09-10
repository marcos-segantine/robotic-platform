import { school } from "../enum/school.enum";
import { Schooling } from "../enum/schooling.enum";
import { ScheduleClass } from "../enum/scheduleClass.enum";

export interface Student {
    id?: string,
    name: string,
    school: school,
    schooling: Schooling,
    scheduleClass: ScheduleClass,
    photoPath: string,
    points: number,
    certificates: {
        done: string[]
        inProgress: InProgressCertificatesType[]
        notStarted: string[]
    },
}

interface InProgressCertificatesType {
    [key: string]: number
}