import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // @ts-ignore
  @ViewChild('canvasEl') canvasRef: ElementRef<HTMLCanvasElement>;

  public canvas?: HTMLCanvasElement;
  public ctx?: CanvasRenderingContext2D;

  constructor() {}

  ngAfterViewInit() {
    this.canvas = this.canvasRef.nativeElement;
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.run();
  }

  run() {
    if (!this.canvas) {
      return;
    }
    if (!this.ctx) {
      return;
    }
    const ctx = this.ctx;
    const canvas = this.canvas;
  }
}
