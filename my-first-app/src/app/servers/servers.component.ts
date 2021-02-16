import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers' --> select by tag
 // selector: '[app-servers]', --> select by attribute
 selector: '.app-servers', 
  template: `
  <h2> This is inline Template from servers.component.ts </h2>
    <app-server> </app-server> `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
