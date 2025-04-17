import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-solve-sets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solve-sets.component.html',
  styleUrls: ['./solve-sets.component.css']
})
export class SolveSetsComponent {
  circles: { x: number; y: number; width: number; height: number }[] = [];
  isDrawing = false;
  startX = 0;
  startY = 0;
  currentTool: string | null = null;

  selectTool(tool: string): void {
    this.currentTool = tool;
  }

  onMouseDown(event: MouseEvent): void {
    if (this.currentTool === 'circle') {
      this.isDrawing = true;
      this.startX = event.offsetX;
      this.startY = event.offsetY;
      this.circles.push({ x: this.startX, y: this.startY, width: 0, height: 0 });
    }
  }

  onMouseMove(event: MouseEvent): void {
    if (this.isDrawing && this.currentTool === 'circle') {
      const currentCircle = this.circles[this.circles.length - 1];
      const width = Math.abs(event.offsetX - this.startX);
      const height = Math.abs(event.offsetY - this.startY);
      currentCircle.width = width;
      currentCircle.height = height;
      currentCircle.x = Math.min(this.startX, event.offsetX);
      currentCircle.y = Math.min(this.startY, event.offsetY);
    }
  }

  onMouseUp(event?: MouseEvent): void {
    if (this.isDrawing && this.currentTool === 'circle') {
      this.isDrawing = false;
      this.currentTool = null; // Deseleccionar la herramienta
    }
  }

  deleteCircle(index: number): void {
    if (this.currentTool === 'eraser') {
      this.circles.splice(index, 1);
    }
  }
}
