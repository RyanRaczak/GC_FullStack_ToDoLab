using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaskList.Models;
using Task = TaskList.Models.Task;

namespace TaskList.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TaskController : ControllerBase
    {
        TaskDAL db = new TaskDAL();
        
        [HttpGet]
        public List<Task> GetTasks()
        {
            return db.GetTasks();
        }

        [HttpGet("byid/{id}")]
        public Task GetTask(int id)
        {
            return db.GetTask(id);
        }

        [HttpPost("createTask")]
        public void CreatTask(Task newTask)
        {
            db.CreateTask(newTask);
        }

        [HttpDelete("removeTask/{id}")]
        public void RemoveTask(int id)
        {
            db.RemoveTask(id);
        }

        [HttpPut("editTask/{id}")]
        public void EditTask(int id, Task modifiedTask)
        {
            Task oldTask = GetTask(id);
            if (modifiedTask.TaskName == null || modifiedTask.TaskName == "")
            {
                modifiedTask.TaskName = oldTask.TaskName;
            }
            if (modifiedTask.TaskDescription == null || modifiedTask.TaskDescription == "")
            {
                modifiedTask.TaskDescription = oldTask.TaskDescription;
            }
            db.EditTask(id, modifiedTask);
        }

    }
}
