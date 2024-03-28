import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { QuizService } from '../../admin/services/quiz.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-load-quizes',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './load-quizes.component.html',
  styleUrl: './load-quizes.component.css',
})
export class LoadQuizesComponent {
  catId: any;
  quizzes: any;
  constructor(
    private activeRoute: ActivatedRoute,
    private quizService: QuizService
  ) {}
  ngOnInit() {
    this.activeRoute.params.subscribe((param) => {
      this.catId = param['catId'];
      console.log(this.catId);
      if (this.catId == 0) {
        this.quizService.getQizzes().subscribe(
          (data: any) => {
            this.quizzes = data;
            console.log(this.quizzes);
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        this.quizService
          .getQuizOfCategory(this.catId)
          .subscribe((data: any) => {
            this.quizzes = data;
            console.log(this.quizzes);
          });
      }
    });
  }
}
