import { CoursesService } from './courses.service';
import {Component} from "@angular/core"

//decorative function
@Component({
    selector : 'courses', //<courses>
    template : `
        <h2>{{ title }}</h2> 
        <ul>
            <li *ngFor="let course of courses"> {{ course }}</li>
        </ul>
    ` //html markups file or codes    
})
export class CoursesComponent { 
    title = "My codes are running here now."
    courses;

    // in dependency injection 
    constructor(){
        let service = new CoursesService()
        this.courses = service.getCourses()
    }
}

// importing to the module
// working with templates , logic and component template