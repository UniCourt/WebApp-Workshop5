import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';
const csv = require('csvtojson')

@Injectable()
export class CsvService {
  constructor(@InjectQueue('upload') private readonly queue: Queue) {}
  async addToQueue(csvFile: any) {
    const data = await csv().fromFile(csvFile.path);
    await this.queue.add(
    'upload-job',
    {
        data: data,
    },
    { delay: 3000 },
    );
}
}
