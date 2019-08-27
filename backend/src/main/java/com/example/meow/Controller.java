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

    @GetMapping("/")
    public String welcome () {
        return "Bienvenidos Meow Meow";
    }

    @GetMapping("/all")
    public Iterable<Users> allCats () {
        return this.usersRepository.findAll();
    }

    @GetMapping("/meow/{id}")
    public Optional<Users> oneCat (@PathVariable long id) {
        return this.usersRepository.findById(id);
    }

    @PostMapping("/meow")
    public Users addOneCat (@RequestBody Users cat) {
        return this.usersRepository.save(cat);
    }

    @PostMapping("/byemeow")
    public void deleteOneCat (@RequestBody long id) {
        this.usersRepository.deleteById(id);
    }

    @GetMapping("/matches")
    public Iterable<Matches> allMatches () {
        return this.matchesRepository.findAll();
    }

    @PostMapping("/match")
    public Matches matchmaker (@RequestBody Matches match) {
        return this.matchesRepository.save(match);
    }

    @PostMapping("/thanksbutnothanks")
    public void deleteMatch (@RequestBody long id) {
        this.matchesRepository.deleteById(id);
    }

}
