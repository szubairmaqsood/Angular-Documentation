import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
   index:number[] =[0,1,2];
  
  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem:String) {
    this.index.push(Number(newItem));
  }

}
