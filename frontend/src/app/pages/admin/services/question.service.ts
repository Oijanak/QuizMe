import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../../../services/info';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private http: HttpClient) {}
  public getQuestionsOfQuiz(qid: number) {
    return this.http.get(`${baseUrl}/question/quiz/all/${qid}`);
  }

  public addQuestion(questionData: any) {
    return this.http.post(`${baseUrl}/question`, questionData);
  }
  public deleteQuestion(quesId: number) {
    return this.http.delete(`${baseUrl}/question/` + quesId);
  }
}
