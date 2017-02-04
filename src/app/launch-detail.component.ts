import { Component, Input } from '@angular/core';
import { Launch } from './launch';
@Component({
    selector: 'my-launch-detail',
    templateUrl: './launch-detail.component.html'
})
export class LaunchDetailComponent {
    @Input()
        launch: Launch;
}
