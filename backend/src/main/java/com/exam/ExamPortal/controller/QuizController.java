package com.exam.ExamPortal.controller;

import com.exam.ExamPortal.model.Category;
import com.exam.ExamPortal.model.Quiz;
import com.exam.ExamPortal.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/quiz")
@CrossOrigin("*")
public class QuizController {

    @Autowired
    private QuizService quizService;

    @PostMapping()
    public ResponseEntity<Quiz> addQuiz(@RequestBody Quiz quiz){
        return ResponseEntity.ok(this.quizService.createQuiz(quiz));
    }

    @PutMapping()
    public ResponseEntity<Quiz> updateQuiz(@RequestBody Quiz quiz){
        return ResponseEntity.ok(this.quizService.updateQuiz(quiz));
    }

    @GetMapping()
    public ResponseEntity<List<Quiz>> getAllQuizes(){
        return ResponseEntity.ok(this.quizService.getAllQuizes());
    }

    @GetMapping("/{qid}")
    public Quiz getQuizById(@PathVariable Long qid){
        return this.quizService.getQuizById(qid);
    }

    @DeleteMapping("/{qid}")
    public void deleteQuiz(@PathVariable Long qid){
        this.quizService.deleteQuiz(qid);
    }
    @GetMapping("/category/{cid}")
    public ResponseEntity<List<Quiz>> getQuizByCategory(@PathVariable Long cid){
        Category category=new Category();
        category.setCid(cid);
        return ResponseEntity.ok(this.quizService.getQuizOfCategory(category));
    }
}
