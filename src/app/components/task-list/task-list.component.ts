import { Component, OnInit, Injectable } from '@angular/core';
import {Task} from '../../core/models/task.model';
import {CompleteTask} from '../../core/models/completetask.model';
import {TaskService} from '../../core/services/task.service';
import { Router } from '@angular/router';
import {Pipe, PipeTransform} from '@angular/core';
import { DatePipe } from '@angular/common';
import { Constants } from 'src/app/core/utilities/Constants';

@Pipe({
  name: 'dateFormat'
})

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];
  selectedTasks: Task[];
  objCompleteTask: Task;

  constructor( private taskService: TaskService,
              private router: Router) { }

  ngOnInit() {
    this.taskService.gettasks().subscribe(result => {
       this.tasks = result['data'] as Task[];
      this.selectedTasks = this.tasks;
    });
  }

  completeTask(id:any) {
    
    let taskComplete: CompleteTask = {
      //"endDate": this.datePipe.transform(Date,'MM-dd-yyyy'),
      '_id':id,
      'endDate': new Date(),
      'isCompleted':true
    };
    console.log(taskComplete);
    this.taskService.updateTask(taskComplete).subscribe(result => {
      if(result['status'] === 'success')
      {
        this.ngOnInit();
      }
    });
  }

}
