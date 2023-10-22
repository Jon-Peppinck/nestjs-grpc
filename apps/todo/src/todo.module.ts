import { Module } from '@nestjs/common';

import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [TodoController],
  providers: [TodoService, PrismaService],
})
export class TodoModule {}
