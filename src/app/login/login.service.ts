import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLoginDto } from './dto/create-login.dto';
import { LoginEntity } from './entity/login.entity';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(LoginEntity)
    private readonly loginRepository: Repository<LoginEntity>,
  ) {}

  async findAll() {
    return await this.loginRepository.find();
  }

  async findOne(id: string) {
    try {
      return await this.loginRepository.findOneByOrFail({ id });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async create(data: CreateLoginDto) {
    return await this.loginRepository.save(this.loginRepository.create(data));
  }

  async deletedById(id: string) {
    await this.loginRepository.findOneByOrFail({ id });
    await this.loginRepository.softDelete(id);
  }
}
