import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { RedArrowInterface } from '../../types/red-arrow.interface';

@Component({
  selector: 'red-arrow',
  templateUrl: './red-arrow.component.html',
  styleUrls: ['./red-arrow.component.scss'],
})
export class RedArrowComponent implements OnInit {
  @Input() object!: { start: any; end: any };

  @Input() property!: RedArrowInterface;
  @Input() zIndex!: number;

  top = 104.5;
  left = 865;

  height = 85;
  width = -78;

  constructor() {}

  ngOnInit(): void {
    // if (this.property) {
    //   this.top = this.property.top;
    //   this.left = this.property.left;
    //   this.height = this.property.height;
    //   this.width = this.property.width;
    // }

    if (this.object) {
      this.property = this.findProperty(this.object.start, this.object.end);
      if (this.property) {
        this.top = this.property.top;
        this.left = this.property.left;
        this.height = this.property.height;
        this.width = this.property.width;
      }
    }
  }

  findProperty(
    startElement: ElementRef,
    endElement: ElementRef
  ): RedArrowInterface {
    console.log(startElement.nativeElement);
    console.log(endElement.nativeElement);
    const startPointX =
      startElement.nativeElement.getBoundingClientRect().x +
      startElement.nativeElement.offsetWidth / 2;
    const startPointY =
      startElement.nativeElement.getBoundingClientRect().y +
      startElement.nativeElement.offsetHeight / 2;

    const endPointX =
      endElement?.nativeElement.getBoundingClientRect().x +
      endElement.nativeElement.offsetWidth / 2;
    const endPointY =
      endElement?.nativeElement.getBoundingClientRect().y +
      endElement.nativeElement.offsetHeight / 2;

    const top = startPointY;
    const left = startPointX;

    const height = endPointY - startPointY;
    const width = endPointX - startPointX;

    return { top: top, left: left, height: height, width: width };
  }
}
