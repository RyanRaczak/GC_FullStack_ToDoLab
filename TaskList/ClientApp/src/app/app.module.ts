import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { TaskListComponent } from './TaskList/TaskList.component';
import { DeleteTaskComponent } from './DeleteTask/DeleteTask.component';
import { CreateTaskComponent } from './CreateTask/CreateTask.component';
import { EditTaskComponent } from './EditTask/EditTask.component';


@NgModule({
  declarations: [					
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
      TaskListComponent,
      DeleteTaskComponent,
      CreateTaskComponent,
      EditTaskComponent
   ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'taskList', component: TaskListComponent},
      { path: 'deleteTask', component: DeleteTaskComponent},
      { path: 'createTask', component: CreateTaskComponent},
      { path: 'editTask', component: EditTaskComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
