package com.exam.ExamPortal.service;

import com.exam.ExamPortal.model.User;
import com.exam.ExamPortal.model.UserRole;

import java.util.Set;

public interface UserService {
    public User createUser(User user, Set<UserRole> userRoles);
    public User getUserByUsername(String username);

    public User deleteUser(String username);

}
