package com.example.meow;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Optional;

@RestController
public class Controller {

    @Autowired
    private final UsersRepository usersRepository;
    private final MatchesRepository matchesRepository;

    public Controller(UsersRepository usersRepository, MatchesRepository matchesRepository) {
        this.usersRepository = usersRepository;
        this.matchesRepository = matchesRepository;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/")
    public String welcome () {
        return "Bienvenidos Meow Meow";
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/all")
    public Iterable<Users> allCats () {
        return this.usersRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/meow/{id}")
    public Optional<Users> oneCat (@PathVariable long id) {
        return this.usersRepository.findById(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/meow")
    public Users addOneCat (@RequestBody Users cat) {
        return this.usersRepository.save(cat);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/byemeow")
    public void deleteOneCat (@RequestBody long id) {
        this.usersRepository.deleteById(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/matches")
    public Iterable<Matches> allMatches () {
        return this.matchesRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/match")
    public Matches matchmaker (@RequestBody Matches match) {
        return this.matchesRepository.save(match);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/thanksbutnothanks")
    public void deleteMatch (@RequestBody long id) {
        this.matchesRepository.deleteById(id);
    }

}
