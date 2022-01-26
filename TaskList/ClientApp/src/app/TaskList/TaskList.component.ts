import { Component, OnInit } from '@angular/core';
import { Convert, Task } from '../Task';
import { TaskService } from '../Task.service';

@Component({
  selector: 'app-TaskList',
  templateUrl: './TaskList.component.html',
  styleUrls: ['./TaskList.component.css'],
  providers: [TaskService]
})
export class TaskListComponent implements OnInit {

  tasks?: Task[] = [];
  formDiv:boolean = false;
  listDiv:boolean = true;
  allButForm:boolean = true;
  newTaskButton:boolean = true;

  constructor(private taskService: TaskService) {
    this.taskService.GetTasks().subscribe(
      (response:any)=>{
        console.log("::Response Return::")
        console.log(response);
        this.tasks = response;
        console.log("::Task Collections::")
        console.log(this.tasks);
      }
    )
  }

  ngOnInit() {
    
  }

  DeleteTask(id:number){
    this.listDiv = false;
    let deletePanel = document.getElementById("del"+id);
    deletePanel.style.display = "";
  }

  CreateTask(){
    this.formDiv = true;
    this.allButForm = false;
  }

  EditTask(id:number){
    this.listDiv = false;
    this.newTaskButton = false;
    let deletePanel = document.getElementById("edit"+id);
    deletePanel.style.display = "";
  }

  DeleteCancel(id:number){
    this.listDiv = true;
    let deletePanel = document.getElementById("del"+id);
    deletePanel.style.display = "none";
  }

  CreateCancel(){
    this.formDiv = false;
    this.allButForm = true;
  }

  EditCancel(id:number){
    this.listDiv = true;
    this.newTaskButton = true;
    let deletePanel = document.getElementById("edit"+id);
    deletePanel.style.display = "none";
  }
}
