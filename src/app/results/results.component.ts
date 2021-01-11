import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { User } from "../models/users.type";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.scss"],
})
export class ResultsComponent implements OnInit {
  @Input() set userData(userData: User[]) {
    this.resultData = userData;
    this.initialData = userData;
  }
  @Input() set filterText(filterText: string) {
    if (!!this.initialData && this.initialData.length > 0) {
      this.resultData = this.initialData.filter((user) =>
        user.name.toLowerCase().includes(filterText.toLowerCase())
      );
    }
  }
  @Output() selectedUser = new EventEmitter<User>();
  resultData: User[] = [];
  initialData: User[] = [];

  constructor() {}

  ngOnInit() {}

  selectUser(user: User): void {
    this.selectedUser.emit(user);
  }
}
