import { LawfirmsService } from './lawfirm/lawfirm.service';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './course.component';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LawfirmComponent } from './lawfirm/lawfirm.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialDemoComponent } from './angular-material-demo/angular-material-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    LawfirmComponent,
    ContactFormComponent,
    AngularMaterialDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [
    CoursesService,
    LawfirmsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
