//import
import { Component } from "@angular/core";

//component decorator
@Component({
    selector: "app-servers",
    templateUrl: "./servers.component.html"
})
//export
export class ServersComponent{
    serverName: string = "test-server";
    allowNewServer: boolean =  false;
    serverCreationStatus: string = "No server was created!"
    serverCreated: boolean = false;

    onCreateServer(){
        this.serverCreated = true;
        this.serverCreationStatus = `${this.serverName} was created`;
    }

    isNewServerAllowed(): boolean{
        if(this.serverName.length === 0){
            this.allowNewServer = !this.allowNewServer;
        }
        return this.allowNewServer;
    }


}