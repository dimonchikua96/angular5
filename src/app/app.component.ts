import {Component} from '@angular/core';

class Task {
    constructor(public title: string,
                public state: boolean = false) {
    }
}

const tasks: Task[] =
    [
        {
            title: 'Learn Angular 5',
            state: true
        },
        {
            title: 'Create news portal',
            state: false
        }
    ];

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    newTodoTitle: string = '';

    tasks: Task[] = tasks;

    addTask() {

        let todo: Task = new Task(this.newTodoTitle);
        tasks.push(todo);
        this.newTodoTitle = '';
    }

    toggle(task: Task) {
        task.state = !task.state;
    }

    delete(taskId: number) {
        tasks.splice(taskId, 1);
    }
}
