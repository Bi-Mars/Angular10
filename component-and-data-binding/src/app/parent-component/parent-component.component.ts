import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
  message="I am from Parent component";

  @Output() messageEventParent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendMessageFromParent(){
    this.message="I am from Parent component";
    this.messageEventParent.emit(this.message);
  }

  receiveMessageFromChild($event){
   this.message = $event;
   this.messageEventParent.emit(this.message);
  }

}
