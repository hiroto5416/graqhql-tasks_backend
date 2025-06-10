import { Injectable } from '@nestjs/common';
import { Task } from './models/task.module';

@Injectable()
export class TaskService {
  tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  createTask(name: string, dueData: string, description?: string): Task {
    const newTask = new Task();
    // 現在の配列の長さプラス１の値をIDとしてセット
    newTask.id = this.tasks.length + 1;
    newTask.name = name;
    newTask.dueData = dueData;
    newTask.status = 'NOT_STARTED';
    newTask.description = description || '';

    // タスク配列に追加する
    this.tasks.push(newTask);

    return newTask;
  }
}
