import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';
const csv = require('csvtojson')

@Injectable()
export class CsvService {
  constructor(@InjectQueue('upload') private readonly queue: Queue) {}
}
