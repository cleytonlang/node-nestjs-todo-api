import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BadRequestSwagger } from '../helpers/swagger/bad-request.swagger';
import { CreateLoginDto } from './dto/create-login.dto';
import { LoginService } from './login.service';
import { CreateLoginSwagger } from './swagger/create-login.swagger';

@Controller('api/login')
@ApiTags('Login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  @ApiOperation({ summary: 'Usuário cadastrado' })
  @ApiResponse({
    status: 201,
    description: 'Usuário cadastrado com sucesso',
    type: CreateLoginSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: BadRequestSwagger,
  })
  async create(@Body() body: CreateLoginDto) {
    return await this.loginService.create(body);
  }
}
