using Dapper;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaskList.Models
{
    public class TaskDAL
    {
        string connection = Secret.Connection;

        public List<Task> GetTasks()
        {
            using (var connect = new MySqlConnection(connection))
            {
                string sql = "select * from tasks";
                connect.Open();
                List<Task> output = connect.Query<Task>(sql).ToList();
                connect.Close();
                return output;
            }
        }

        public Task GetTask(int id)
        {          
            try
            {
                List<Task> tasks = GetTasks();
                Task output = tasks.Where(t => t.Id == id).ToList().First();
                return output;
            }
            catch (InvalidOperationException)
            {
                Task inputError = new Task();
                inputError.TaskName = $"{id} is an invalid ID(prolly)";
                return inputError;
            } 
        }

        public void CreateTask(Task newTask)
        {
            using (var connect = new MySqlConnection(connection))
            {
                string sql = $"insert into tasks " +
                    $"values({0},\"{newTask.TaskName}\",\"{newTask.TaskDescription}\", {newTask.Completed})";
                connect.Open();
                connect.Query<System.Threading.Tasks.Task>(sql);
                connect.Close();
            }
        }

        public void RemoveTask(int id)
        {
            if (ValidId(id))
            {
                using (var connect = new MySqlConnection(connection))
                {
                    string sql = $"delete from tasks " +
                        $"where id={id}";
                    connect.Open();
                    connect.Query<System.Threading.Tasks.Task>(sql);
                    connect.Close();
                }
            } 
        }

        public void EditTask(int id, Task modifiedTask)
        {
            if (ValidId(id))
            {
                using (var connect = new MySqlConnection(connection))
                {
                    string sql = $"update tasks " +
                        $"set taskname = \"{modifiedTask.TaskName}\", taskdescription = \"{modifiedTask.TaskDescription}\", completed = {modifiedTask.Completed} " +
                        $"where id={id}";
                    connect.Open();
                    connect.Query<System.Threading.Tasks.Task>(sql);
                    connect.Close();
                }
            }
        }

        public bool ValidId(int id)
        {
            List<Task> tasks = GetTasks();
            foreach (var task in tasks)
            {
                if (task.Id == id)
                {
                    return true;
                }
            }
            return false;
        }
    }
}
