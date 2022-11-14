import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Generated,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TodoEntity } from '../../todo/entity/todo.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @Generated('uuid')
  @ApiProperty()
  @PrimaryColumn()
  id: string;

  @Column({ type: 'varchar' })
  @ApiProperty()
  username: string;

  @Column({ type: 'varchar' })
  @ApiProperty()
  password: string;

  @CreateDateColumn({ name: 'created_at' })
  @ApiProperty()
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  @ApiProperty()
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  @ApiProperty()
  deletedAt: string;

  @OneToMany(() => TodoEntity, (todo) => todo.user)
  users: TodoEntity[];
}
