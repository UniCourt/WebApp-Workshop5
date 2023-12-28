import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';
import { CreateEntry } from './bull/job.trigger';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbEntity } from 'src/Entity/db.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_MASTER_DB_HOST,
      port: +process.env.POSTGRES_MASTER_DB_PORT,
      username: process.env.POSTGRES_MASTER_DB_USER,
      password: process.env.POSTGRES_MASTER_DB_PASSWORD,
      database: process.env.POSTGRES_MASTER_DB_NAME,
      entities: [DbEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([DbEntity]),
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
      },
    }),
    BullModule.registerQueue({
      name: 'upload',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, CreateEntry],
})
export class AppModule {}
