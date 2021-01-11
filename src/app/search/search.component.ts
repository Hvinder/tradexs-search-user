import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { User } from "../models/users.type";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  @Input() selectedUser: User;
  @Output() filterText = new EventEmitter<string>();
  inputName: string = "";

  constructor() {}

  ngOnInit() {}

  userInputChange(event): void {
    this.inputName = event;
    this.filterText.emit(this.inputName);
  }
}
