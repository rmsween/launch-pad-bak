import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchesComponent }   from './launches.component';
import { LaunchDetailComponent }  from './launch-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/launches', pathMatch: 'full' },
    { path: 'launches',  component: LaunchesComponent },
    { path: 'detail/:id', component: LaunchDetailComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
