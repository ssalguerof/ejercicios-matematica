import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercise-generator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exercise-generator.component.html',
  styleUrls: ['./exercise-generator.component.css']
})
export class ExerciseGeneratorComponent {
  operation: string = 'addition';
  digits: number = 1;
  count: number = 1;
  exercises: { num1: number; num2: number; operation: string; answer: number; userAnswer?: number; isCorrect?: boolean }[] = [];

  generateExercises(): void {
    this.exercises = [];
    for (let i = 0; i < this.count; i++) {
      const num1 = this.generateRandomNumber(this.digits);
      const num2 = this.generateRandomNumber(this.digits);
      let answer = 0;

      switch (this.operation) {
        case 'addition':
          answer = num1 + num2;
          break;
        case 'subtraction':
          answer = num1 - num2;
          break;
        case 'multiplication':
          answer = num1 * num2;
          break;
      }

      this.exercises.push({ num1, num2, operation: this.operation, answer });
    }
  }

  validateAnswers(): void {
    this.exercises.forEach(exercise => {
      exercise.isCorrect = exercise.userAnswer === exercise.answer;
    });
  }

  private generateRandomNumber(digits: number): number {
    const min = Math.pow(10, digits - 1);
    const max = Math.pow(10, digits) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
