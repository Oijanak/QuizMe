import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { QuestionService } from '../services/question.service';
import { CommonModule } from '@angular/common';
import { MatCardContent, MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-question',
  standalone: true,
  imports: [
    MatCardModule,
    RouterModule,
    CommonModule,
    MatDividerModule,
    MatButtonModule,
  ],
  templateUrl: './view-quiz-question.component.html',
  styleUrl: './view-quiz-question.component.css',
})
export class ViewQuizQuestionComponent {
  qId: any;
  qTiltle: any = '';
  questions: any = [];
  constructor(
    private route: ActivatedRoute,
    private quesionService: QuestionService
  ) {}
  ngOnInit() {
    this.qId = this.route.snapshot.params['id'];
    this.qTiltle = this.route.snapshot.params['title'];
    console.log(this.qId, this.qTiltle);
    this.quesionService.getQuestionsOfQuiz(this.qId).subscribe({
      next: (data) => {
        this.questions = data;
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  deleteQuestion(quesId: number) {
    if (confirm('Do you want to delete this Question?')) {
      this.quesionService.deleteQuestion(quesId).subscribe({
        next: (data) => {
          this.questions = this.questions.filter(
            (question: any) => question.qid != quesId
          );
          Swal.fire('Deleted');
        },
        error: (error) => {
          Swal.fire('Delete failed');
        },
      });
    }
  }
}
