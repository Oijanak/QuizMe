import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../services/quiz.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { CategoryService } from '../services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
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
  templateUrl: './update-quiz.component.html',
  styleUrl: './update-quiz.component.css',
})
export class UpdateQuizComponent {
  categories: any = [];
  qid: any = null;
  quiz: any = {
    title: '',
    description: '',
    maxMarks: '',
    numberOfQuestions: '',
    category: {
      cid: null,
    },
  };

  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private routing: Router
  ) {}
  ngOnInit() {
    this.qid = this.route.snapshot.params['qid'];
    this.quizService.getQuizById(this.qid).subscribe({
      next: (data) => {
        this.quiz = data;
        console.log(this.quiz);
      },
      error: (error) => {
        alert('No resorces found to update');
        this.routing.navigateByUrl('/admin/view-quiz');
        console.log('error', error);
      },
    });
    this.categoryService.getCategories().subscribe({
      next: (data: any) => {
        this.categories = data;
      },
      error: (error) => {
        console.log('Error', error);
      },
    });
  }
  updateQuiz() {
    this.quizService.updateQuiz(this.quiz).subscribe({
      next: (data) => {
        console.log(data);
        Swal.fire('Successfull', 'Updated successfully');
        this.routing.navigateByUrl('/admin/view-quiz');
      },
      error: (error) => {
        Swal.fire('Failed', error);
      },
    });
  }
}
