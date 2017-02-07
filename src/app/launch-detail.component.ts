import 'rxjs/add/operator/switchMap';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Launch } from './launch';
import { LaunchService } from './launch.service';
@Component({
    moduleId: module.id,
    selector: 'my-launch-detail',
    templateUrl: './launch-detail.component.html'
})
export class LaunchDetailComponent {
    @Input()
        launch: Launch;
    constructor(
        private launchService: LaunchService,
        private route: ActivatedRoute,
        private location: Location
    ) {}
    save(): void {
        this.launchService.update(this.launch)
            .then(() => this.close());
    }
    close(): void {
        this.launch = null;
    }
}
