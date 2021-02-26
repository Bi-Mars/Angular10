import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  message = "I am from Child";

  @Output() messageEventChild = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendMessageFromChild(){
    this.messageEventChild.emit(this.message);
  }
}
