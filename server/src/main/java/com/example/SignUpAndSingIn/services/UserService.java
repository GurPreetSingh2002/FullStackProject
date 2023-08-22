package com.example.SignUpAndSingIn.services;

import com.example.SignUpAndSingIn.model.User;
import com.example.SignUpAndSingIn.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public User addUser(User newUser){
        userRepository.save(newUser);
        return newUser;
    }

    public List<User> getAllUsers(){
        List<User> newUser = new ArrayList<>();
        userRepository.findAll().forEach(user -> newUser.add(user));
        return newUser;
    }

}
