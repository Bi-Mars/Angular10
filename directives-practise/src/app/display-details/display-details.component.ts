import { Component} from "@angular/core"

@Component({
    selector: "app-display-details",
    templateUrl: "./display-details.component.html",
    styles:[`
        .white-text{
            color: white;
        }
    `]
})

export class DisplayDetails{
    logs = [];
    toggle: boolean = true;

    logBtnClicks(){
        this.toggle = !this.toggle;
        this.logs.push(new Date());
    }


}