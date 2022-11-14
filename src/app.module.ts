import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './app/todo/todo.module';
import { LoginModule } from './app/login/login.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'sqlite',
        database: configService.get('DB_DATABASE', 'todo.db'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/**/*.migrations{.ts,.js}'],
        synchronize: true,
      }),
    }),
    TodoModule,
    LoginModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
