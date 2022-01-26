import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TaskService } from '../Task.service';

@Component({
  selector: 'app-DeleteTask',
  templateUrl: './DeleteTask.component.html',
  styleUrls: ['./DeleteTask.component.css'],
  providers: [TaskService]
})
export class DeleteTaskComponent implements OnInit {

  @Input() id:number;
  task:Task = {id: 0, taskName: "Loading Task", taskDescription: "Loading Task", completed: false};

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.GetTask(this.id).subscribe(
      (response:any) => {
        this.task = response;
        console.log(this.task);
      }
    )
  }

  DeleteTask(id:number){
    this.taskService.DeleteTask(id).subscribe(
      (response:any) => { location.reload(); }
    );
  }

}
