package com.exam.ExamPortal.controller;

import com.exam.ExamPortal.model.Category;
import com.exam.ExamPortal.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/category")
@CrossOrigin("*")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @PostMapping()
    public ResponseEntity<?> addCategory(@RequestBody Category category){
        Category savedCategory=this.categoryService.addCategory(category);
        return ResponseEntity.ok(savedCategory);
    }

    @GetMapping("/{categoryId}")
    public Category getCategoryById(@PathVariable Long categoryId){
        return this.categoryService.getCategory(categoryId);
    }

    @GetMapping()
    public ResponseEntity<List<Category>> getAllCategories(){
        List<Category> categories=this.categoryService.getAllcategories();
        return ResponseEntity.ok(categories);
    }

    @PutMapping()
    public Category updateCategory(@RequestBody Category category){
        return this.categoryService.updateCategary(category);
    }

    @DeleteMapping("/{categoryId}")
    public void deleteCategory(@PathVariable Long categoryId){
        this.categoryService.deleteCategory(categoryId);
    }
}
