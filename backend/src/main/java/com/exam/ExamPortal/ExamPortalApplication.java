package com.exam.ExamPortal;

import com.exam.ExamPortal.model.Role;
import com.exam.ExamPortal.model.User;
import com.exam.ExamPortal.model.UserRole;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class ExamPortalApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(ExamPortalApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
//		User user=new User();
//
//		user.setEmail("janakchy01@gmail.com");
//		user.setPassword(new BCryptPasswordEncoder().encode("1234"));
//		user.setPhone("9803984326");
//		user.setProfile("abc.jpg");
//		user.setFirstName("Janak");
//		user.setLastName("Chy");
//		user.setUsername("jkchy");
//
//		Role role=new Role();
//		role.setRoleId(44L);
//		role.setRole("ADMIN");
//
//
//		Set<UserRole> userRoleSet=new HashSet<>();
//
//		UserRole userRole=new UserRole();
//		userRole.setRole(role);
//		userRole.setUser(user);
//
//		userRoleSet.add(userRole);
//
//
////
//		User saveUser=this.userService.createUser(user,userRoleSet);
////
////		System.out.println(saveUser.getUsername());

	}
}
