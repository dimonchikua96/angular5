import {Task} from './task';
import {tasks} from './data';

export class TaskService {
    tasks: Task[] = tasks;

    getTasks() {
        return this.tasks;
    }

    createTask(title: string) {
        let task = new Task(title);
        this.tasks.push(task);
    }

    deleteTask(task: Task) {

        let index = this.tasks.indexOf(task);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
        console.log( this.tasks);
    }

    toggleTask(task: Task) {
        console.log(task.state);
        task.state = !task.state;
        console.log(task.state);
    }

}
