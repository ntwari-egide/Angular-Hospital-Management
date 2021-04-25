import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tailwind-example',
  templateUrl: './tailwind-example.component.html',
  styleUrls: ['./tailwind-example.component.css']
})
export class TailwindExampleComponent implements OnInit {

  constructor() { }

  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }
  
  ngOnInit(): void {
  }

}
