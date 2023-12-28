├── Docker
├── nest-backend
└── README.md

### Project files

- ##### job.add.service.ts
    -   Path: `Backend/nest-backend/src/bull/job.add.service.ts`
    -   Code:
        ```
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
        ```

- ##### app.controller.ts
    -   Path: `Backend/nest-backend/src/app.controller.ts`
    -   Code:
        ```
        @Post('upload')
        @UseInterceptors(FileInterceptor('file'))
        async uploadCsvs(@UploadedFile() file: Express.Multer.File) {
            this.csvService.addToQueue(file);
            return { message: 'CSV file uploaded and processed successfully' };
        }