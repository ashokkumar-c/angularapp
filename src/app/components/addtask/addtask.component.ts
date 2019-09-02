import { Component, OnInit } from '@angular/core';
import { Task } from '../../core/models/task.model';
import { TaskService } from '../../core/services/task.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  //task: string;
  //parentTaskId: string;
  //priority: number;
  //startDate: Date;
  //endDate: Date;
  newtask: Task = {
    task:'',
    parentTaskId:'',
    endDate:null,
    startDate:null,
    isCompleted:false,
    priority:0
  };

  constructor(private taskService: TaskService,
              private router: Router,
              private toastrService: ToastrService) { }

  ngOnInit() {
  }

  resetvalues() {
    this.newtask.task = '';
    this.newtask.parentTaskId = '';
    this.newtask.startDate = null;
    this.newtask.endDate = null;
    this.newtask.priority = 0;
  }

  tasksubmit() {
    
    this.taskService.addTask(this.newtask).subscribe(result =>{
      console.log(result);
      if(result['status'] === 'success')
      {
        this.toastrService.success('Success', 'Task created successfully');
        this.router.navigate(['/home']);
      }
    });
  
    
  }

}
