import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-out-putchild',
  templateUrl: './out-putchild.component.html',
  styleUrls: ['./out-putchild.component.css']
})
export class OutPutchildComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<String>();
  //newItem:String='';
  constructor() { }

  ngOnInit(): void {
  }

  addNewItem(value: String) {
    this.newItemEvent.emit(value);
  }

}
