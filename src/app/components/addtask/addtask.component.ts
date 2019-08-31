import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../core/services/task.service';
import { Router } from '@angular/router';
import { Task } from '../../core/models/task.model';


@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  newtask: Task;
  task: string;
  parentTaskId: string;
  priority: number;
  startDate: Date;
  endDate: Date;

  constructor() { }

  ngOnInit() {
  }

  resetvalues()  {
   /*this.newtask.task = '';
   this.newtask.parentTaskId = '';
   this.newtask.startDate = null;
   this.newtask.endDate = null;
   this.newtask.priority = 0;*/
   this.task = '';
   this.parentTaskId = '';
   this.startDate = null;
   this.endDate = null;
   this.priority = 0;

  }

  tasksubmit() {
    this.newtask.task = this.task;
    this.newtask.parentTaskId = this.parentTaskId;
    this.newtask.startDate = this.startDate;
    this.newtask.endDate = this.endDate;
    this.newtask.priority = this.priority;
    this.newtask.is_completed = false;

  }

}
