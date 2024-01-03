import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selectedFile!: File ;
  isUploaded:Boolean=false
  error!: string;
  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  async uploadCsv() {
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
}
