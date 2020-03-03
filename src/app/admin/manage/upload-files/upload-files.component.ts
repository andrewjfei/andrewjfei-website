import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {

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
      // console.log(file);
      // this.files.push(file);
      // this.uploadForm.get('profile').setValue(file);
      const formData = new FormData();
      // formData.append('key', 'image');
      formData.append('image', file);

      this.http.post('http://localhost:8080/image-upload', formData).subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );

      console.log(formData);
    }

    //
    // console.log(this.files);
  }

  deleteAttachment(index) {
    this.files.splice(index, 1);
  }

}
