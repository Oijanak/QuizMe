package com.exam.ExamPortal.repo;

import com.exam.ExamPortal.model.Category;
import com.exam.ExamPortal.model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuizRepo extends JpaRepository<Quiz,Long> {

    List<Quiz> findByCategory(Category category);
}
