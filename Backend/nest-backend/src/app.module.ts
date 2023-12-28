import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';
import { CsvService } from './bull/job.add.service';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  controllers: [AppController],
  providers: [AppService, CsvService],
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),

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
})
export class AppModule {}
