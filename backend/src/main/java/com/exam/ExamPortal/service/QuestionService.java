package com.exam.ExamPortal.service;

import com.exam.ExamPortal.model.Question;
import com.exam.ExamPortal.model.Quiz;

import java.util.List;
import java.util.Set;

public interface QuestionService {
    public Question addQuestion(Question question);
    public Question updateQuestion(Question question);

    public List<Question> getAllQuestions();

    public void deleteQuestion(Long qid);

    public Question getQuestionById(Long qid);

    public Set<Question> getQuestionOfQuiz(Quiz quiz);
}
