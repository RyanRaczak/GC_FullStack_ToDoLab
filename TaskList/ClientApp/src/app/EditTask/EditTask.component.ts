import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TaskService } from '../Task.service';

@Component({
  selector: 'app-EditTask',
  templateUrl: './EditTask.component.html',
  styleUrls: ['./EditTask.component.css'],
  providers: [TaskService]
})
export class EditTaskComponent implements OnInit {

  @Input() id:number;
  task?:Task = {id: 0, taskName: "Loading Task", taskDescription: "Loading Task", completed: false};

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.GetTask(this.id).subscribe(
      (response:any) => {
        this.task = response;
        console.log(this.task);
      }
    );
  }

  UpdateTask(){
    let editedTask:string = (<HTMLInputElement>document.getElementById("newName"+this.id)).value;
    let editedDescription:string = (<HTMLInputElement>document.getElementById("newDescription"+this.id)).value;
    let completedString:string = (<HTMLInputElement>document.getElementById("newCompleted"+this.id)).value;
    let completedBool:boolean = (completedString == "true");
    let modifiedTask:Task = {id: this.id, taskName: editedTask, taskDescription: editedDescription, completed: completedBool};
    this.taskService.UpdateTask(this.id, modifiedTask).subscribe(
      (response:any) => { 
        console.log("Task Updated");
        location.reload();
      }
    )
  }

}
