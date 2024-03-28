import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../../../services/info';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}
  public getQizzes() {
    return this.http.get(`${baseUrl}/quiz`);
  }
  public addQuizData(quizData: any) {
    return this.http.post(`${baseUrl}/quiz`, quizData);
  }
  public deleteQuiz(qid: number) {
    return this.http.delete(`${baseUrl}/quiz/${qid}`);
  }

  public getQuizById(qid: number) {
    return this.http.get(`${baseUrl}/quiz/${qid}`);
  }
  public updateQuiz(quizData: any) {
    return this.http.put(`${baseUrl}/quiz`, quizData);
  }
  public getQuizOfCategory(cid: number) {
    return this.http.get(`${baseUrl}/quiz/category/${cid}`);
  }
}
