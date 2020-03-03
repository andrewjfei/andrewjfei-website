import {Component, Input, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {
  @Input() isPersonal;

  files: any = [];
  uploadForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }

  uploadFile(event) {
    console.log(event);
    for (const file of event) {
      const formData = new FormData();
      formData.append('image', file);

      this.http.post('http://localhost:8080/personal/image-upload', formData).subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
    }
  }

  uploadEventFile(event) {
    console.log(event);
    for (const file of event) {
      const formData = new FormData();
      formData.append('image', file);

      this.http.post('http://localhost:8080/events/image-upload', formData).subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
    }
  }

  deleteAttachment(index) {
    this.files.splice(index, 1);
  }

}
