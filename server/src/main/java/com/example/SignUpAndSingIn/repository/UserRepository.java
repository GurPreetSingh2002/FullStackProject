package com.example.SignUpAndSingIn.repository;

import com.example.SignUpAndSingIn.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User,String> {
}
