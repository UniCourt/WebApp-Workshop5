.
├── Docker
├── nest-bgt
└── README.md

### Project files

- ##### job.trigger.ts
    -   Path: `Bgt/nest-bgt/src/bull/job.trigger.ts`
    -   Code:
        ```
        constructor(
            @InjectRepository(DbEntity) private readonly csvRepo: Repository<DbEntity>,
        ) {}
        ```

        ```
        @Process("upload-job")
        async createEntry(job: Job<any>) {
            const newData = this.csvRepo.create({ data: job.data.data });
            await this.csvRepo.save(newData);
        }