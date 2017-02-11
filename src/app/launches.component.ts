import { Component, OnInit } from '@angular/core';
import { Launch } from './launch';
import { HttpService } from './http.service';
@Component({
    selector: 'my-launches',
    templateUrl: './launches.component.html',
    providers: [HttpService]
})
export class LaunchesComponent implements OnInit {
    launches: Launch[];
    selectedLaunch: Launch;
    constructor(private httpService: HttpService) { }
    getLaunches(): void {
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
        this.getLaunches();
    }
    onSelect(launch: Launch): void {
        this.selectedLaunch = launch;
    }
    close(): void {
        this.selectedLaunch = null;
    }
}

