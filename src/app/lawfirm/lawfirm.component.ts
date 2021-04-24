import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lawfirm',
  templateUrl: './lawfirm.component.html',
  styleUrls: ['./lawfirm.component.css']
})
export class LawfirmComponent implements OnInit {
  district = "Kayonza"
  lawFirms;
  constructor() { }

  ngOnInit(): void {
  }

}
