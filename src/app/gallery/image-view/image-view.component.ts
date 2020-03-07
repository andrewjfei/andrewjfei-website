import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent implements OnInit {
  @Input() image;
  @Input() firstImage;
  @Input() lastImage;
  @Input() imageIndex;
  @Input() totalImages;
  @Output() nextImage: EventEmitter<any> = new EventEmitter();
  @Output() previousImage: EventEmitter<any> = new EventEmitter();
  @Output() clearSelected: EventEmitter<any> = new EventEmitter();
  @Output() imageChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleForwardButton() {
    this.nextImage.emit();
    this.imageChange.emit();
  }

  handleBackButton() {
    this.previousImage.emit();
    this.imageChange.emit();
  }

  clearSelectedImage() {
    this.clearSelected.emit();
    this.imageChange.emit();
  }

}
