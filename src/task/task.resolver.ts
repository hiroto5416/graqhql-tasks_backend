import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task as TaskModel } from './models/task.module';
import { CreateTaskInput } from './dto/createTask.input';
import { Task } from 'generated/prisma/client';
import { UpdateTaskInput } from './dto/updateTask.input';

@Resolver()
export class TaskResolver {
  // ※constructorに依存先のクラスを渡すことで、Nestjsが自動的にタスクサービスのインスタンスを作成し、このコンストラクターに渡してくれる
  constructor(private readonly taskService: TaskService) {}

  @Query(() => [TaskModel], { nullable: 'items' })
  async getTasks(
    @Args('userId', { type: () => Int }) userId: number,
  ): Promise<Task[]> {
    // ※サービスのGETタスクメソッドの結果を返却する
    return await this.taskService.getTasks(userId);
  }

  @Mutation(() => TaskModel)
  async createTask(
    @Args('createTaskInput') createTaskInput: CreateTaskInput,
  ): Promise<Task> {
    return await this.taskService.createTask(createTaskInput);
  }

  @Mutation(() => TaskModel)
  async updateTask(
    @Args('updateTaskInput') UpdateTaskInput: UpdateTaskInput,
  ): Promise<Task> {
    return await this.taskService.updateTask(UpdateTaskInput);
  }

  @Mutation(() => TaskModel)
  async deleteTask(@Args('id', { type: () => Int }) id: number): Promise<Task> {
    return await this.taskService.deleteTask(id);
  }
}
