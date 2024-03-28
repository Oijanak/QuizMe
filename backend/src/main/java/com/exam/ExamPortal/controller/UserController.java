package com.exam.ExamPortal.controller;

import com.exam.ExamPortal.model.Role;
import com.exam.ExamPortal.model.User;
import com.exam.ExamPortal.model.UserRole;
import com.exam.ExamPortal.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;
@CrossOrigin("*")
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @PostMapping
    public User createUser(@RequestBody User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        Set<UserRole> roles=new HashSet<>();
        Role role=new Role();
        role.setRoleId(45L);
        role.setRole("NORMAL");
        UserRole userRole=new UserRole();
        userRole.setUser(user);
        userRole.setRole(role);

        roles.add(userRole);
        return this.userService.createUser(user,roles);
    }
    @GetMapping("/{username}")
    public User getUserByUsername(@PathVariable("username") String username){
        return this.userService.getUserByUsername(username);
    }

    @DeleteMapping("/{username}")
    public User deleteUser(@PathVariable String username){
        return this.userService.deleteUser(username);
    }
}
