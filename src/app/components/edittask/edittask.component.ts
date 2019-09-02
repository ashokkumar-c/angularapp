import { Component, OnInit } from '@angular/core';
import { EditTask } from '../../core/models/edittask.model';
import { TaskService } from '../../core/services/task.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {Pipe, PipeTransform} from '@angular/core';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {

  editTask: EditTask = {
    _id:'',
    task:'',
    parentTaskId:'',
    endDate:null,
    startDate:null, 
    priority:0
  };

  datePipe = new DatePipe('en-US');
  constructor(private taskService: TaskService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params['id']);        
    this.taskService.gettask(this.activatedRoute.snapshot.params['id']).subscribe(result => {
      this.editTask = result['data'] as EditTask; 
      this.editTask.startDate = this.datePipe.transform(this.editTask.startDate,'yyyy-MM-dd');
      this.editTask.endDate = this.datePipe.transform(this.editTask.endDate,'yyyy-MM-dd');
      console.log(this.editTask);   
   });

  }

  updateTask() {
    this.taskService.updateTask(this.editTask).subscribe(result => {
      if(result['status'] === 'success')
      {
        this.toastrService.success('Success', 'Task udpated successfully');
        this.router.navigate(['/home']);
      }
    });
  }

  cancelUpdate() {
    this.router.navigate(['/home']);
  }

}
