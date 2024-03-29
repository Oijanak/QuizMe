import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../admin/services/quiz.service';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-instruction',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatButtonModule],
  templateUrl: './instruction.component.html',
  styleUrl: './instruction.component.css',
})
export class InstructionComponent {
  qid: any;
  quiz: any;
  constructor(
    private activeRoute: ActivatedRoute,
    private quizService: QuizService
  ) {}
  ngOnInit() {
    this.qid = this.activeRoute.snapshot.params['qid'];
    this.quizService.getQuizById(this.qid).subscribe((data: any) => {
      this.quiz = data;
      console.log(this.quiz);
    });
    console.log(this.qid);
  }
}
