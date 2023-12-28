import { Process, Processor } from '@nestjs/bull';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from 'bull';
import { DbEntity } from 'src/Entity/db.entity';
import { Repository } from 'typeorm';
import * as csv from 'csvtojson';
import * as fs from 'fs/promises';
import { parse } from 'csv-parse';

@Processor("upload") // eslint-disable-line
export class CreateEntry {}