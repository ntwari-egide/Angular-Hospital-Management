import { LawfirmsService } from './lawfirm/lawfirm.service';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './course.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LawfirmComponent } from './lawfirm/lawfirm.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    LawfirmComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    LawfirmsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
