import { Component, OnInit } from "@angular/core";
import { User } from "./models/users.type";
import { UsersService } from "./services/users.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  userData: User[];
  selectedUser: User;
  filterText: string;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.fetchUsers().subscribe((data) => (this.userData = data));
  }

  selectedUserHandler(user: User): void {
    this.selectedUser = user;
  }

  filterTextHandler(text: string): void {
    this.filterText = text;
  }
}
