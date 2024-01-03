### Project files

- ##### app.component.ts
    -   Path: `Frontend/angular-frontend/src/app/app.component.ts`
    -   Code:
        ```
        async uploadCsv() {
            console.log(this.selectedFile);
            
            if (this.selectedFile) {
            this.error = "";
            const formData = new FormData();
            formData.append('file', this.selectedFile, this.selectedFile.name);
                this.http.post('http://localhost:3021/csv/upload', formData).subscribe((data)=>{
                this.isUploaded = true;
            },(err)=>{
                
                console.log(err);
            });
            }else{
            this.error = "Please upload the file"
            }
        }
        ```
