import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TaskService } from '../Task.service';

@Component({
  selector: 'app-CreateTask',
  templateUrl: './CreateTask.component.html',
  styleUrls: ['./CreateTask.component.css']
})
export class CreateTaskComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  CreateTask(){
    let taskname:string = (<HTMLInputElement>document.getElementById("taskname")).value;
    let taskdescription:string = (<HTMLInputElement>document.getElementById("taskdescription")).value;

    let newTask:Task = {id: 0, taskName: taskname, taskDescription: taskdescription, completed: false}

    this.taskService.CreateTask(newTask).subscribe(
      (response:any) => { 
        console.log("Task Added");
        location.reload();
      }
    )
  }
}
