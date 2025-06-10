import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task } from './models/task.module';

@Resolver()
export class TaskResolver {
  // ※constructorに依存先のクラスを渡すことで、Nestjsが自動的にタスクサービスのインスタンスを作成し、このコンストラクターに渡してくれる
  constructor(private readonly taskService: TaskService) {}

  @Query(() => [Task], { nullable: 'items' })
  getTasks(): Task[] {
    // ※サービスのGETタスクメソッドの結果を返却する
    return this.taskService.getTasks();
  }

  @Mutation(() => Task)
  createTask(
    @Args('name') name: string,
    @Args('dueDate') dueDate: string,
    @Args('description', { nullable: true }) description: string,
  ): Task {
    return this.taskService.createTask(name, dueDate, description);
  }
}
