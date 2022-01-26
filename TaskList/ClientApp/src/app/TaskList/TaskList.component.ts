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
    let displayPanel = document.getElementsByClassName("taskList");
    let deletePanel = document.getElementById("del"+id);
    let panels = Array.from(displayPanel);
    for (let index = 0; index < panels.length; index++) {
      const panel = displayPanel[index];
      panel.style.display = "none";
    }
    // displayPanel.forEach(element => {
      
    // });
    // displayPanel.style.display = "none";
    deletePanel.style.display = "block";

    // if(displayPanel.style.display === "" || displayPanel.style.display === "inherit"){
    //   displayPanel.style.display = "none";
    //   deletePanel.style.display = "";
    // }
  }

  DeleteCancel(id:number){
    let displayPanel = document.getElementById("taskList");
    let deletePanel = document.getElementById("del"+id);

    displayPanel.style.display = "";
    deletePanel.style.display = "none";
  }

}
