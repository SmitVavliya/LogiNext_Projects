package com.springboot.backend.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.springboot.backend.Models.User;
import com.springboot.backend.Repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
//import org.springframework.data.domain.Sort;
//import org.springframework.data.domain.Sort.Direction;
//import org.springframework.data.domain.Sort.Order;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // ResponseEntity represents an HTTP response, including headers, body, and
    // status.
    @GetMapping("/{pageNumber}")
    public ResponseEntity<?> getUsers(@PathVariable Integer pageNumber, @RequestParam(required = false, defaultValue = "id, desc") String sort[]) {
        try {
            Pageable pageable = PageRequest.of(pageNumber - 1, 4);
            Page<User> users = this.userRepository.findAll(pageable);
            return ResponseEntity.ok(users);
        	
// 			Sorting 
//        	List<Order> orders = new ArrayList<Order>(); 
//        	if(sort.length > 2) {
//        		int sz = sort.length;
//                for (int i = 0; i < sz; i += 2) {
//                	orders.add(new Order(getSortDirection(sort[i + 1]), sort[i]));
//                }        		
//        	} else {
//        		orders.add(new Order(getSortDirection(sort[1]), sort[0]));
//        	}
//        	
//	        Pageable pageable = PageRequest.of(pageNumber - 1, 4, Sort.by(orders));
//	        Page<User> users = this.userRepository.findAll(pageable);
//	        return ResponseEntity.ok(users);
        } catch (Exception e) {
            return ResponseEntity.ok("Error...");
        }
    }

//    private Direction getSortDirection(String string) {
//		if(string.equals("asc")) {
//			return Sort.Direction.ASC;
//		}
//		if(string.equals("desc")) {
//			return Sort.Direction.DESC;
//		}
//		return null;
//	}

	@GetMapping("/api/{userId}")
    public ResponseEntity<?> getUser(@PathVariable String userId) {
        try {
            return ResponseEntity.ok(userRepository.findById(userId));
        } catch (Exception e) {
            return ResponseEntity.ok("Error...");
        }
    }

    @PostMapping(path = "/", consumes = "application/json")
    public ResponseEntity<?> addUser(@RequestBody User user) {
        try {
//            List<User> list = new ArrayList<>(this.userRepository.findAll());
//            for (User userData : list) {
//                if (userData.getUsername().equals(user.getUsername())) {
//                    return ResponseEntity.ok("Already In Use...");
//                }
//            }

            User userData = this.userRepository.save(user);
            return ResponseEntity.ok(userData);
        } catch (Exception e) {
            return ResponseEntity.ok("Error...");
        }
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable String userId) {
        try {
            userRepository.deleteById(userId);
            return ResponseEntity.ok("Your Selected Record is Deleted...");
        } catch (Exception e) {
            return ResponseEntity.ok("Error...");
        }
    }

    @PatchMapping("/{userId}/{like}")
    public ResponseEntity<?> likeUser(@PathVariable String userId, @PathVariable Boolean like) {
        try {
            Optional<User> optinalEntity = userRepository.findById(userId);
            User user = optinalEntity.get();
            user.setLike(like);
            userRepository.save(user);
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            return ResponseEntity.ok("Error...");
        }
    }
    
    @PatchMapping("/{userId}")
    public ResponseEntity<?> editUser(@PathVariable String userId, @RequestBody User userData) {
    	try {
    		Optional<User> optionalEntity = userRepository.findById(userId);
    		User user = optionalEntity.get();
    		user.setName(userData.getName());
    		user.setEmail(userData.getEmail());
    		user.setPhone(userData.getPhone());
    		user.setWebsite(userData.getWebsite());
    		userRepository.save(user);
    		return ResponseEntity.ok(user);
    	} catch (Exception e) {
    		return ResponseEntity.ok("Error...");
    	}
    }
    
    @GetMapping("/user/search")
    public ResponseEntity<?> searchUser(@RequestParam(required = true) String[] query) {
    	try {
    		return ResponseEntity.ok(userRepository.findByName(query[0]));
    	} catch(Exception e) {
    		return ResponseEntity.ok("Error...");
    	}
    }
}