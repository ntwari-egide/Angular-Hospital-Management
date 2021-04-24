import { LawfirmsService } from './lawfirm/lawfirm.service';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './course.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LawfirmComponent } from './lawfirm/lawfirm.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    LawfirmComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService,
    LawfirmsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
