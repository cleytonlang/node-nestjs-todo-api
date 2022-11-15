import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateLoginDto {
  @IsNotEmpty({
    message: 'O Campo username deve ser informado',
  })
  @ApiProperty()
  username: string;

  @IsNotEmpty({
    message: 'O Campo password deve ser informado',
  })
  @ApiProperty()
  password: string;
}
