import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoFormComponent} from './todo-form/todo-form.component';
import {TaskService} from './shared/task.service';


@NgModule({
    declarations: [
        AppComponent,
        TodoFormComponent,
        TodoListComponent
    ],
    imports: [
        BrowserModule, FormsModule
    ],
    providers: [TaskService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
