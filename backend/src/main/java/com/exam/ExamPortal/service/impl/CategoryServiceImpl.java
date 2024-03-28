package com.exam.ExamPortal.service.impl;

import com.exam.ExamPortal.model.Category;
import com.exam.ExamPortal.repo.CategoryRepository;
import com.exam.ExamPortal.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategoryRepository categoryRepo;
    @Override
    public Category addCategory(Category category) {
        return this.categoryRepo.save(category);
    }

    @Override
    public Category updateCategary(Category category) {
        return this.categoryRepo.save(category);
    }

    @Override
    public List<Category> getAllcategories() {
        return this.categoryRepo.findAll();
    }

    @Override
    public Category getCategory(Long categoryId) {
        return this.categoryRepo.findById(categoryId).get();
    }

    @Override
    public void deleteCategory(Long categoryId) {
        this.categoryRepo.deleteById(categoryId);
    }
}
