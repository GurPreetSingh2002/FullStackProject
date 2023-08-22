package com.example.SignUpAndSingIn.controller;

import com.example.SignUpAndSingIn.model.User;
import com.example.SignUpAndSingIn.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    UserService userService;

    @RequestMapping(method = RequestMethod.POST , value = "/users")
    public User addUser(@RequestBody User newUser){
        userService.addUser(newUser);
        return newUser;
    }

    @RequestMapping(method = RequestMethod.GET , value = "/users")
    public List<User> getAllUsers(){
        return userService.getAllUsers();

    }
}
