import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task as TaskModel } from './models/task.module';
import { CreateTaskInput } from './dto/createTask.input';
import { Task } from 'generated/prisma/client';

@Resolver()
export class TaskResolver {
  // ※constructorに依存先のクラスを渡すことで、Nestjsが自動的にタスクサービスのインスタンスを作成し、このコンストラクターに渡してくれる
  constructor(private readonly taskService: TaskService) {}

  @Query(() => [TaskModel], { nullable: 'items' })
  async getTasks(): Promise<Task[]> {
    // ※サービスのGETタスクメソッドの結果を返却する
    return await this.taskService.getTasks();
  }

  @Mutation(() => TaskModel)
  async createTask(
    @Args('createTaskInput') createTaskInput: CreateTaskInput,
  ): Promise<Task> {
    return await this.taskService.createTask(createTaskInput);
  }
}
