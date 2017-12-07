import { resolve } from 'url';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EventDataService } from './event-data.service';
import { AddEventComponent } from './add-event/add-event.component';
import { EventComponent } from './event/event.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventResolver } from './event-resolver.service';
import { EditExpenseComponent } from './edit-expense/edit-expense.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ExpenseComponent } from './expense/expense.component';
import { ExpenseResolver } from './expense-resolver.service';
import { ExpenseDataService } from './expense-data.service';

const routes = [
    { path: 'list', component: EventListComponent },
    { path: 'add', component: AddEventComponent },
    { path: ':id', component: EventDetailComponent, resolve: { 'event': EventResolver } },
    { path: ':id/edit/:expenseId', component: EditExpenseComponent, resolve: { 'event': EventResolver, 'expense': ExpenseResolver } },
    { path: ':id/add', component: AddExpenseComponent, resolve: { 'event': EventResolver } }

];

@NgModule({
    declarations: [
        AddEventComponent,
        EventComponent,
        EventListComponent,
        EventDetailComponent,
        EditExpenseComponent,
        AddExpenseComponent,
        ExpenseComponent
    ],
    imports: [
        HttpModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        EventDataService,
        EventResolver,
        ExpenseResolver,
        ExpenseDataService,
        EventDataService
    ]
})
export class EventModule { }
