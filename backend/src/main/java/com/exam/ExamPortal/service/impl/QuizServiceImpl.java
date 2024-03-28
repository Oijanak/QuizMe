package com.exam.ExamPortal.service.impl;

import com.exam.ExamPortal.model.Category;
import com.exam.ExamPortal.model.Quiz;
import com.exam.ExamPortal.repo.QuizRepo;
import com.exam.ExamPortal.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class QuizServiceImpl implements QuizService {
    @Autowired
    private QuizRepo quizRepo;
    @Override
    public Quiz createQuiz(Quiz quiz) {
        return this.quizRepo.save(quiz);
    }

    @Override
    public Quiz updateQuiz(Quiz quiz) {
        return this.quizRepo.save(quiz);
    }

    @Override
    public List<Quiz> getAllQuizes() {
        return this.quizRepo.findAll();
    }

    @Override
    public void deleteQuiz(Long quizId) {
        this.quizRepo.deleteById(quizId);
    }

    @Override
    public Quiz getQuizById(Long quizId) {
           return this.quizRepo.findById(quizId).get();
    }

    @Override
    public List<Quiz> getQuizOfCategory(Category category) {
        return this.quizRepo.findByCategory(category);
    }
}
