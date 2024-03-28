package com.exam.ExamPortal.service;

import com.exam.ExamPortal.model.Category;

import java.util.List;
import java.util.Set;

public interface CategoryService {
    public Category addCategory(Category category);
    public Category updateCategary(Category category);

    public List<Category> getAllcategories();

    public Category getCategory(Long categoryId);

    public void deleteCategory(Long categoryId);
}
