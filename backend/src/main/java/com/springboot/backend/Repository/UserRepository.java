package com.springboot.backend.Repository;

import com.springboot.backend.Models.User;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
	
	// Name 
	public List<User> findByName(String name);
	
	// Email
	public List<User> findByEmail(String email);
	
	
}
