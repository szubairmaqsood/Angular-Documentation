import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variable-use',
  templateUrl: './variable-use.component.html',
  styleUrls: ['./variable-use.component.css']
})
export class VariableUseComponent implements OnInit {
  message:String = 'I\'m read only!';
  fontColor:String = 'blue';
  sayHelloId:Number = 1;
  canClick:boolean = false;
  canEdit:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  sayMessage() {
    alert(this.message);
}

onEditClick() {
  this.canEdit = !this.canEdit;
  if (this.canEdit) {
    this.message = 'You can edit me!';
  } else {
    this.message = 'I\'m read only!';
  }
}

}
