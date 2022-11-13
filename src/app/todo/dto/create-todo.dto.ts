import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  @ApiProperty()
  task: string;

  @IsNotEmpty({
    message: 'O Campo finalizado deve ser informado',
  })
  @IsIn([0, 1], {
    message: 'O Campo finalizado Deve ser 0 ou 1',
  })
  @ApiProperty()
  isDone: number;
}
