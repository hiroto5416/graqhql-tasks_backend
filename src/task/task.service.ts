import { Injectable } from '@nestjs/common';
import { Task } from './models/task.module';

@Injectable()
export class TaskService {
  tasks: Task[] = [];

  getTasks(): Task[] {
    const task1 = new Task();
    task1.id = 1;
    task1.name = 'task1';
    task1.dueData = '2023-01-01';
    task1.status = 'NOT_STARTED';
    // タスクフィールドに追加する
    this.tasks.push(task1);
    return this.tasks;
  }
}
