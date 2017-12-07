import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router/';
import { AddEventComponent } from './event/add-event/add-event.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './person/auth-guard.service';

const appRoutes: Routes = [
    {
        path: 'event',
        canActivate: [AuthGuardService],
        loadChildren: 'app/event/event.module#EventModule'
    },
    { path: '', redirectTo: 'event/list', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
    ],
    declarations: [],
    exports: [
        RouterModule
    ],
    providers: []
})
export class RoutingModule { }
