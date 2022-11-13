import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateEvent } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoEntity } from './entity/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>,
  ) {}

  async findAll() {
    return await this.todoRepository.find();
  }

  async findOne(id: string) {
    try {
      return await this.todoRepository.findOneByOrFail({ id });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async create(data: CreateTodoDto) {
    return await this.todoRepository.save(this.todoRepository.create(data));
  }

  async update(id: string, data: UpdateTodoDto) {
    const todo = await this.todoRepository.findOneBy({ id });
    this.todoRepository.merge(todo, data);
    return this.todoRepository.save(todo);
  }

  async deletedById(id: string) {
    await this.todoRepository.findOneByOrFail({ id });
    await this.todoRepository.softDelete(id);
  }
}
