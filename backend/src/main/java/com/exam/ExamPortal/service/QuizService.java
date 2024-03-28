package com.exam.ExamPortal.service;

import com.exam.ExamPortal.model.Category;
import com.exam.ExamPortal.model.Quiz;

import java.util.List;

public interface QuizService {
    public Quiz createQuiz(Quiz quiz);
    public Quiz updateQuiz(Quiz quiz);

    public List<Quiz> getAllQuizes();

    public void deleteQuiz(Long quizId);

    public Quiz getQuizById(Long quizId);

    public List<Quiz> getQuizOfCategory(Category category);
}
