import { Component, OnInit } from '@angular/core';
import {Task} from '../../core/models/task.model';
import {TaskService} from '../../core/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];
  selectedTasks: Task[];
  taskSelected: string;

  constructor( private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.gettasks().subscribe(result => {
      console.log(result);
      this.tasks = result['data'] as Task[];
      this.selectedTasks = this.tasks;
    });
  }

}
