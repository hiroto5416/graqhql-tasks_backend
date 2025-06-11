import { Injectable } from '@nestjs/common';
import { Task } from './models/task.module';
import { CreateTaskInput } from './dto/createTask.input';

@Injectable()
export class TaskService {
  tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  createTask(createTaskInput: CreateTaskInput): Task {
    const { name, dueDate, description } = createTaskInput;
    const newTask = new Task();
    // 現在の配列の長さプラス１の値をIDとしてセット
    newTask.id = this.tasks.length + 1;
    newTask.name = name;
    newTask.dueData = dueDate;
    newTask.status = 'NOT_STARTED';
    newTask.description = description || '';

    // タスク配列に追加する
    this.tasks.push(newTask);

    return newTask;
  }
}
