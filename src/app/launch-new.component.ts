import { Component, OnInit } from '@angular/core';

import { HttpService } from './http.service';

@Component({
    moduleId: module.id,
    selector: 'launch-new',
    templateUrl: './launch-new.component.html',
    providers: [ HttpService ]
})

export class LaunchNewComponent implements OnInit {
    constructor(private httpService: HttpService) {}
    launches: any[] = [];
    onSubmit(division: string, project: string, clientApproval: Date, launchDate: Date) {
        this.httpService.sendData({division: division, project: project, clientApproval: clientApproval, launchDate: launchDate})
            .subscribe(
                data => console.log(data)
        );
    }
    getLaunchesFromServer(): void {
        this.httpService.getLaunchesFromServer()
            .subscribe(
                data => {
                    const launches = [];
                    for (let key in data) {
                        launches.push(data[key]);
                    }
                    this.launches = launches;
                }
            )
    }
    ngOnInit(): void {
        this.getLaunchesFromServer();
    }
}