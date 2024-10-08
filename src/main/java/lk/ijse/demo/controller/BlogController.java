package lk.ijse.demo.controller;

import lk.ijse.demo.entity.Blog;
import lk.ijse.demo.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/blog")
public class BlogController {

    @Autowired
    private BlogRepository blogRepository;

    // End Point
    @GetMapping("/hello")
    public String hello() {
        return "Hello World";
    }

    @PostMapping("/number")
    public int getNumber() {
        return 9;
    }

    @GetMapping("/data/{number}")
    public int getData(@PathVariable int number) {
        return number;
    }

    @GetMapping("/object")
    public Blog getObject() {
        Blog blog = new Blog();
        return blog;
    }

    @PostMapping("/savepost")
    public void savePost(@RequestBody Blog blog) {
        blogRepository.save(blog);
    }

    @PutMapping("/updatepost")
    public Blog updatePost(@RequestBody Blog blog) {
        return blogRepository.save(blog);
    }

    @DeleteMapping("/deletepost/{id}")
    public void deletePost(@PathVariable int id) {
        blogRepository.deleteById(id);
    }

    @GetMapping("/getallpost")
    public List<Blog> getAllPost() {
        return blogRepository.findAll();
    }
}