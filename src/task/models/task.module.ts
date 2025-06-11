import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Status } from 'generated/prisma';

@ObjectType()
export class Task {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  dueData: string;

  @Field()
  status: Status;

  @Field({ nullable: true })
  description: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
