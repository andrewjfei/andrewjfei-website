import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {

  files: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  uploadFile(event) {
    console.log(event)
    // for (const element of event.files) {
    //   this.files.push(element.name);
    // }
  }
  deleteAttachment(index) {
    this.files.splice(index, 1);
  }

}
