package com.exam.ExamPortal.config;

import com.exam.ExamPortal.service.impl.UserDetailServiceImpl;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    @Autowired
    private UserDetailsService userDetailService;
    @Autowired
    private JwtUtils jwtUtils;


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {


        final String requestTokenHeader=  request.getHeader("Authorization");
        System.out.println("Authorizaition"+requestTokenHeader);
        String username=null;
        String jwtToken=null;
        if(requestTokenHeader!=null&& requestTokenHeader.startsWith("Bearer ")){

            jwtToken=requestTokenHeader.substring(7);
            username=this.jwtUtils.extractUsername(jwtToken);
            System.out.println("Jwt "+username);
        }else {
            System.out.println("Invalid Token");
        }

        if(username!=null && SecurityContextHolder.getContext().getAuthentication()==null){


            UserDetails userDetails=this.userDetailService.loadUserByUsername(username);
            System.out.println(userDetails.getPassword());
            if(this.jwtUtils.validateToken(jwtToken,userDetails)){
                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken=new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
                System.out.println(usernamePasswordAuthenticationToken.getName());
                usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
            }
        }
        else{

            System.out.println("Token not valid");
        }
        filterChain.doFilter(request,response);
    }
}
