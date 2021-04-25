import { LawfirmsService } from './lawfirm/lawfirm.service';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './course.component';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LawfirmComponent } from './lawfirm/lawfirm.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialDemoComponent } from './angular-material-demo/angular-material-demo.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { TailwindExampleComponent } from './tailwind-example/tailwind-example.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    LawfirmComponent,
    ContactFormComponent,
    AngularMaterialDemoComponent,
    TailwindExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  providers: [
    CoursesService,
    LawfirmsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
