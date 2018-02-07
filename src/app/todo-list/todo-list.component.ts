import {Component, OnInit} from '@angular/core';
import {TaskService} from './../shared/task.service';
import {Task} from './../shared/task';

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
    tasks: Task[];

    constructor(private taskService: TaskService) {
        this.tasks = [];
    }

    ngOnInit() {
        this.tasks = this.taskService.getTasks();
    }

    delete(task: Task) {
        this.taskService.deleteTask(task);
    }

    toggle(task: Task) {
        this.taskService.toggleTask(task);
    }

}