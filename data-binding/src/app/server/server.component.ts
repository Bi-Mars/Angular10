import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName: string = "Server Name";

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit(): void {
  }

  serverId: number = 10;
  serverStatus: string = "offline";

  getServerStatus() {
    return this.serverStatus;
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created. Name of the server is: " + this.serverName;
  }

  onUpdateServerName(event: Event){
    // target is of typenInput element
    this.serverName = (<HTMLInputElement> event.target).value;
  }
}
