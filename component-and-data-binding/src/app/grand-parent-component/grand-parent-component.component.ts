import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-grand-parent-component',
  templateUrl: './grand-parent-component.component.html',
  styleUrls: ['./grand-parent-component.component.css']
})
export class GrandParentComponentComponent implements OnInit {
  @Input() messageGrandParent = "I am from grand-parent component."
  message="I am from grandparent component"

  constructor() { }

  ngOnInit(): void {
  }
  sendMessageFromGrandParent(){

  }
  receiveMessageFromParent($event){
    this.message = $event;
  }

}
