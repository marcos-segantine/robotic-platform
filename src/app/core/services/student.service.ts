import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Student } from "../models/student.model";
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class StudentService
{
    private url = environment.api;

    constructor(private _httpClient: HttpClient) { }

    getStudent(id: string) {
        const idTest = "3fa85f64-5717-4562-b3fc-2c963f66afa1";
        return this._httpClient.get<Student>(this.url + `get-student?id=${idTest}`);
    }

    createStudent(student: Student) {
        return this._httpClient.post(this.url + 'create-student', student);
    }
}   