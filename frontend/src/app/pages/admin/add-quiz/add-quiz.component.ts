import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatSelectModule } from '@angular/material/select';
import { CategoryService } from '../services/category.service';
import { QuizService } from '../services/quiz.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './add-quiz.component.html',
  styleUrl: './add-quiz.component.css',
})
export class AddQuizComponent {
  categories: any = [];
  quizData: any = {
    title: '',
    description: '',
    maxMarks: '',
    numberOfQuestions: '',
    category: {
      cid: null,
    },
  };
  constructor(
    private categoryService: CategoryService,
    private quizService: QuizService
  ) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  addQuiz() {
    if (this.quizData.title.trim() && this.quizData.category.cid) {
      this.quizService.addQuizData(this.quizData).subscribe({
        next: (data) => {
          Swal.fire('Successfull', 'Quiz Data Submitted');
          this.quizData = {
            title: '',
            description: '',
            maxMarks: '',
            numberOfQuestions: '',
            category: {
              cid: null,
            },
          };
          console.log('Quiz submitted', data);
        },
        error: (error) => {
          Swal.fire('Error', error);
        },
      });
    } else {
      Swal.fire('Data Empty', 'Tiltle and category must be reuired');
    }
  }
}
