import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { RedArrowInterface } from './red-arrow/types/red-arrow.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'red-arrow';
  arrows: any[] = [];

  @ViewChild('startItem', { read: ElementRef }) startItem!: ElementRef;
  @ViewChild('endItem', { read: ElementRef }) endItem!: ElementRef;

  ngOnInit(): void {}

  ngAfterViewInit() {
    console.log('afterinit');
    setTimeout(() => {
      this.loadArrows();
    }, 1000);
  }

  loadArrows() {
    this.arrows.length = 0;

    const arrow = {
      start: this.startItem,
      end: this.endItem,
    };

    console.log('arrow', arrow);

    this.arrows.push(arrow);
  }
}
