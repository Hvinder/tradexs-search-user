import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SearchComponent } from "./search/search.component";
import { ResultsComponent } from "./results/results.component";
import { UsersService } from "./services/users.service";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, SearchComponent, ResultsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
