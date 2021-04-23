import {Component} from "@angular/core"

//decorative function
@Component({
    selector : 'courses', //<courses>
    template : '<h2>{{ title }}</h2>' //html markups file or codes    
})
export class CoursesComponent { 
    title = "My codes are running here now."
}

// importing to the module
// working with templates , logic and component template