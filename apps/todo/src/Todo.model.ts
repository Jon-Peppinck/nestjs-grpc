import { Prisma } from '@prisma/client';

export class Todo implements Prisma.TodoCreateInput {
  id: number;
  description: string;
  isDone: boolean;
}
