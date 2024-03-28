package com.exam.ExamPortal.service.impl;

import com.exam.ExamPortal.model.Question;
import com.exam.ExamPortal.model.Quiz;
import com.exam.ExamPortal.repo.QuestionRepo;
import com.exam.ExamPortal.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
@Service
public class QuestionServiceImpl implements QuestionService {

    @Autowired
    private QuestionRepo questionRepo;
    @Override
    public Question addQuestion(Question question) {
        return this.questionRepo.save(question);
    }

    @Override
    public Question updateQuestion(Question question) {
        return this.questionRepo.save(question);
    }

    @Override
    public List<Question> getAllQuestions() {
        return this.questionRepo.findAll();
    }

    @Override
    public void deleteQuestion(Long qid) {
        this.questionRepo.deleteById(qid);
    }

    @Override
    public Question getQuestionById(Long qid) {
        return this.questionRepo.findById(qid).get();
    }

    @Override
    public Set<Question> getQuestionOfQuiz(Quiz quiz) {
        return this.questionRepo.findByQuiz(quiz);
    }

}
