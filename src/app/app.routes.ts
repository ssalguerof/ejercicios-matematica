import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'exercise-generator', loadComponent: () => import('./exercise-generator/exercise-generator.component').then(m => m.ExerciseGeneratorComponent) },
  { path: 'solve-sets', loadComponent: () => import('./solve-sets/solve-sets.component').then(m => m.SolveSetsComponent) }
];
