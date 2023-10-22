import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import { PostTodoDTO, TodoServiceController } from 'proto/todo';
import { TodoService } from './todo.service';

@Controller()
export class TodoController implements TodoServiceController {
  constructor(private readonly todoService: TodoService) {}
  @GrpcMethod('TodoService', 'PostTodo')
  async postTodo(postTodoDTO: PostTodoDTO) {
    return await this.todoService.postTodo(postTodoDTO);
  }

  @GrpcMethod('TodoService', 'GetTodos')
  async getTodos() {
    return await this.todoService.getTodos();
  }
}
