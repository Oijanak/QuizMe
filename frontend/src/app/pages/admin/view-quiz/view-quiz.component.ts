import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { QuizService } from '../services/quiz.service';
import Swal from 'sweetalert2';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-quiz',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule, FormsModule],
  templateUrl: './view-quiz.component.html',
  styleUrl: './view-quiz.component.css',
})
export class ViewQuizComponent {
  quizzes: any = [];
  constructor(private quizServie: QuizService) {}
  ngOnInit() {
    this.quizServie.getQizzes().subscribe({
      next: (data) => {
        this.quizzes = data;
        console.log('Quizzes data', data);
      },
      error: (error) => {
        Swal.fire('Error', error);
      },
    });
  }
  deleteQuiz(qid: number) {
    if (confirm('Do you want to delete the quiz?')) {
      this.quizServie.deleteQuiz(qid).subscribe({
        next: (data) => {
          this.quizzes = this.quizzes.filter((quiz: any) => quiz.qid != qid);
          console.log(this.quizzes);
          Swal.fire('Deleted', `Quiz ${qid} deleted`);
        },
        error: (error) => {
          Swal.fire('Delete Failed', 'Something went wrong');
        },
      });
    }
  }
}
