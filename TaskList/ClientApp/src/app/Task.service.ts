import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './Task';

@Injectable()
export class TaskService {
    url:string = "Task";
    constructor(private http: HttpClient, @Inject('BASE_URL') baseURL:string) {
        this.url = baseURL+this.url;
    }  

    GetTasks(){
        return this.http.get(this.url)
    }

    GetTask(id:number){
        return this.http.get(this.url+"/byId/"+id);
    }

    CreateTask(newTask:Task){
        return this.http.post(this.url+"/createTask", newTask);
    }

    DeleteTask(id:number){
        return this.http.delete(this.url+"/removeTask/"+id);
    }

    UpdateTask(id:number, modifiedTask: Task){
        return this.http.put(this.url+"/editTask/"+id, modifiedTask);
    }

}
