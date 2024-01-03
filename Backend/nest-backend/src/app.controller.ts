import {
  Controller,
  Get,
  Post,
  Param,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CsvService } from './bull/job.add.service';
import { Repository } from 'typeorm';
import { DbEntity } from './Entity/db.entity';
import { InjectRepository } from '@nestjs/typeorm';
/*import multer from 'multer';
import { diskStorage } from 'multer';
import { extname } from 'path';*/
@Controller('csv')
export class AppController {
  
  constructor(
    @InjectRepository(DbEntity)
    private userRepository: Repository<DbEntity>,
    private readonly csvService: CsvService) {}
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadCsvs(@UploadedFile() file: Express.Multer.File) {
    this.csvService.addToQueue(file);
    return { message: 'CSV file uploaded and processed successfully' };
  }

  @Get('getdata/:id')
  async getData(@Param() params: any) {
    return await this.userRepository.findOne({where : {id: params.id}});
    
  }
}
