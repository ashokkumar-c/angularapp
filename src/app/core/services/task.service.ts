import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {map, retry, catchError, tap } from 'rxjs/operators';
import {Task} from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  tasks: Task[];

  constructor(private  httpClient: HttpClient) { }

  // Define API
  apiURL = 'http://localhost:3000';
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  validateTask(task: Task) {
    if (
      task.task === undefined ||
      task.parentTaskId === undefined ||
      task.priority === undefined ||
      task.startDate === undefined ||
      task.endDate === undefined ||
      task.isCompleted === undefined
      ) {
        console.log('error in validate task');
        return false;
      } else {
        console.log('sucesses in validate task');
        return true;
      }
  }


  // get all tasks
  gettasks() {
    return this.httpClient.get(this.apiURL + '/tasks');
  }

  gettask(id: string){
    return this.httpClient.get(this.apiURL + '/tasks/' + id)
  }

  addTask(task: Task): Observable<Task> {
    return this.httpClient.post<any>(this.apiURL + '/tasks', task, this.httpOptions);
  }

  updateTask(task: any): Observable<any> {    
    return this.httpClient.patch<any>(this.apiURL + '/tasks/'+ task['_id'] , task, this.httpOptions);
  }

}
