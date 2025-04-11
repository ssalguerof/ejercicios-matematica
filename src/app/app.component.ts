import { Component } from '@angular/core';
import { ExerciseGeneratorComponent } from './exercise-generator/exercise-generator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ExerciseGeneratorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicios';
}
