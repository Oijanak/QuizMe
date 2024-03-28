package com.exam.ExamPortal.service.impl;

import com.exam.ExamPortal.model.Role;
import com.exam.ExamPortal.model.User;
import com.exam.ExamPortal.model.UserRole;
import com.exam.ExamPortal.repo.RoleRepository;
import com.exam.ExamPortal.repo.UserRepository;
import com.exam.ExamPortal.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Set;
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;


    @Override
    public User createUser(User user, Set<UserRole> userRoles) {
      User isExist= this.userRepository.findByUsername(user.getUsername());
        if(isExist!=null){
           throw new RuntimeException("User Already exist with username "+isExist.getUsername());
        }else{
            for(UserRole ur:userRoles){

                Role role=this.roleRepository.save(ur.getRole());
                user.getUserRoles().add(ur);
                System.out.println("Role "+role);
            }

            System.out.println("User after "+user);
            User savedUser=this.userRepository.save(user);
            return savedUser;
        }

    }

    @Override
    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public User deleteUser(String username) {
        User deleteUser=userRepository.findByUsername(username);
        userRepository.delete(deleteUser);
        return deleteUser;
    }

}
