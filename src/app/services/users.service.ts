import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/users.type";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  endpoint = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) {}

  fetchUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.endpoint);
  }
}
