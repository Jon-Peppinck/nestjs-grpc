import { Injectable } from '@nestjs/common';

import { Todo, Todos, PostTodoDTO } from 'proto/todo';
import { PrismaService } from './prisma.service';
import { Todo as ITodo } from './Todo.model';

@Injectable()
export class TodoService {
  constructor(private prismaService: PrismaService) {}

  async postTodo(postTodoDTO: PostTodoDTO): Promise<Todo> {
    const todo: ITodo = await this.prismaService.todo.create({
      data: postTodoDTO,
    });

    return {
      id: todo.id,
      description: todo.description,
      isDone: todo.isDone,
    };
  }

  async getTodos(): Promise<Todos> {
    const todos: ITodo[] = await this.prismaService.todo.findMany();

    return {
      Todos: todos.map((t) => ({
        id: t.id,
        description: t.description,
        isDone: t.isDone,
      })),
    };
  }
}
