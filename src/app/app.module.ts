import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
