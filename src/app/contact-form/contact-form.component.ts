import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  log(value: String){
      console.log("data is changed !: ",value);
      
  }

  ngOnInit(): void {
  }

}
