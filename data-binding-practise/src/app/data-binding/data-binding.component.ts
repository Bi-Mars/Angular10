//import

import { Component } from "@angular/core";

//Component
@Component({
    selector: "app-dataBinding",
    templateUrl: "./data-binding.component.html",
    styleUrls: ["./data-binding.component.css"]
})

//export
export class DataBindingComponent{
    userName: string = "Username"
    userNameEmpty: boolean = false;

 isUserNameEmpty(): Boolean{
        if(this.userName.length === 0){
            this.userNameEmpty = !this.userNameEmpty;
        }
       return this.userNameEmpty;
    }

    resetUserName(): void{
        this.userName = "";
    }
}