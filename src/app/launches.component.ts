import { Component, OnInit } from '@angular/core';
import { Launch } from './launch';
import { LaunchService } from './launch.service';
@Component({
    selector: 'my-launches',
    templateUrl: './launches.component.html',
    providers: [LaunchService]
})
export class LaunchesComponent implements OnInit {
    launches: Launch[];
    selectedLaunch: Launch;
    constructor(private launchService: LaunchService) { }
    getLaunches(): void {
        this.launchService.getLaunches().then(launches => this.launches = launches);
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

