import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
   index:number[] =[0,1,2];
   birthday:Date = new Date(1988, 3, 15);
   amount:number=30;

  constructor() { }

  ngOnInit(): void {
  }

  toggle = true; // start with true == shortDate

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }
  
  addItem(newItem:String) {
    this.index.push(Number(newItem));
  }

}
