import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { StudentModel } from "../models/student.model";
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class StudentService
{
    private url = environment.api;

    constructor(private _httpClient: HttpClient) { }

    getStudentByID(id: string) {
        return this._httpClient.get<StudentModel>(this.url + `get-student?id=${id}`);
    }

    getStudentsByName(name: string) {
        return this._httpClient.get<Array<StudentModel>>(this.url + `get-students-by-name?name=${name}`);
    }

    createStudent(student: StudentModel) {
        return this._httpClient.post(this.url + 'create-student', student);
    }
}