package com.exam.ExamPortal.controller;

import com.exam.ExamPortal.model.Question;
import com.exam.ExamPortal.model.Quiz;
import com.exam.ExamPortal.service.QuestionService;
import com.exam.ExamPortal.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/question")
@CrossOrigin("*")
public class QuestionController {

    @Autowired
    private QuestionService questionService;
    @Autowired
    private QuizService quizService;


    @PostMapping()
    public ResponseEntity<Question> addQuestion(@RequestBody Question question){
        return ResponseEntity.ok(this.questionService.addQuestion(question));
    }

    @PutMapping()
    public ResponseEntity<Question> updateQuestion(@RequestBody Question question){
        return ResponseEntity.ok(this.questionService.updateQuestion(question));
    }

    @GetMapping()
    public ResponseEntity<List<Question>> getAllQuestions(){
        return ResponseEntity.ok(this.questionService.getAllQuestions());
    }

    @GetMapping("/quiz/{qid}")
    public ResponseEntity<List<Question>> getQuestionsOfQuiz(@PathVariable Long qid){
        Quiz quiz=this.quizService.getQuizById(qid);
        Set<Question> questions=quiz.getQuestions();
        List<Question> list=new ArrayList<>(questions);
        if(list.size()>Integer.parseInt(quiz.getNumberOfQuestions())){
            list=list.subList(0,Integer.parseInt(quiz.getNumberOfQuestions()+1));
        }
        Collections.shuffle(list);
        return ResponseEntity.ok(list);
    }
    @GetMapping("/quiz/all/{qid}")
    public ResponseEntity<List<Question>> getQuestionsOfQuizAdmin(@PathVariable Long qid){
        Quiz quiz=this.quizService.getQuizById(qid);
        Set<Question> questions=quiz.getQuestions();
        List<Question> list=new ArrayList<>(questions);

        return ResponseEntity.ok(list);
    }

    @GetMapping("/{quesId}")
    public Question getQuestionById(@PathVariable Long quesId){
        return this.questionService.getQuestionById(quesId);
    }
    @DeleteMapping("/{quesId}")
    public void deleteQuestion(@PathVariable Long quesId){
        this.questionService.deleteQuestion(quesId);
    }
}
