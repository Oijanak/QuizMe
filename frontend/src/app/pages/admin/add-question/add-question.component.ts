import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../services/question.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-question',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    CKEditorModule,
  ],
  templateUrl: './add-question.component.html',
  styleUrl: './add-question.component.css',
})
export class AddQuestionComponent {
  public Editor = ClassicEditor;
  qid: any;
  qtitle: any;
  question: any = {
    quiz: {},
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
  };
  constructor(
    private route: ActivatedRoute,
    private snackbar: MatSnackBar,
    private questionService: QuestionService,
    private router: Router
  ) {}
  ngOnInit() {
    this.qid = this.route.snapshot.params['id'];
    console.log(this.qid);
    this.question.quiz['qid'] = +this.qid;
    this.qtitle = this.route.snapshot.params['title'];
  }
  formSubmit() {
    if (
      this.question.content != '' &&
      this.question.answer != '' &&
      this.question.option1 != '' &&
      this.question.option2 != ''
    ) {
      this.questionService.addQuestion(this.question).subscribe({
        next: (data: any) => {
          Swal.fire('Successfulll', 'Question added');
          this.router.navigateByUrl(
            '/admin/view-questions/' + this.qid + '/' + this.qtitle
          );
        },
        error: (error) => {
          Swal.fire('Failed', 'Internal Server Error');
        },
      });
    } else {
      this.snackbar.open('form field cannot be emty', '', { duration: 3000 });
      return;
    }
  }
}
