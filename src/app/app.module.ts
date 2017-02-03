import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Lab14Routes } from './app.route';
import { HomepageComponent } from './homepage/homepage.component';
import { StudentpageComponent } from './studentpage/studentpage.component';

import { StudentServiceService } from './studentpage/student-service.service';
import { StudentCanActivate } from './studentpage/studentGuard.guard';
import { StudentResolver } from './studentpage/student-resolver.resolver';
import { StudentIndividualComponent } from './student-individual/student-individual.component';
import { StudentIndividualCanActivate } from './student-individual/StudentIndividualCanActivate.guard';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StudentpageComponent,
    StudentIndividualComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Lab14Routes
  ],
  providers: [StudentServiceService, StudentResolver, StudentCanActivate, StudentIndividualCanActivate],
  bootstrap: [AppComponent]
})
export class AppModule { }
