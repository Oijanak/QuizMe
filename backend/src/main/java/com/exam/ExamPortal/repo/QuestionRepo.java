package com.exam.ExamPortal.repo;

import com.exam.ExamPortal.model.Question;
import com.exam.ExamPortal.model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;


public interface QuestionRepo extends JpaRepository<Question,Long> {

    public Set<Question> findByQuiz(Quiz quiz);
}
