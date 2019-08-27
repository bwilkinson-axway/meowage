package com.example.meow;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Seed implements CommandLineRunner {
    private UsersRepository usersRepository;
    private MatchesRepository matchesRepository;

    public Seed(UsersRepository usersRepository, MatchesRepository matchesRepository) {
        this.usersRepository = usersRepository;
        this.matchesRepository = matchesRepository;
    }
    @Override
    public void run(String... arg0) throws Exception {
        this.usersRepository.deleteAll();
        this.matchesRepository.deleteAll();
        Users james = new Users();
                james.setId(1);
                james.setEmail("cat@catsrus.com");
                james.setUsername("fishylady");
                james.setPassword("hi");
                james.setFavorite_toy("goldfish");
                james.setAge(2);
                james.setBio("I love fish");
                james.setPhoto("http://www.merp.com");
        this.usersRepository.save(james);
        Users garfield = new Users();
                garfield.setId(2);
                garfield.setEmail("Tom@cat.com");
                garfield.setUsername("tomcat");
                garfield.setPassword("hi");
                garfield.setFavorite_toy("lazer");
                garfield.setAge(3);
                garfield.setBio("help me I'm single");
                garfield.setPhoto("http://www.meep.com");
        this.usersRepository.save(garfield);

        Matches match = new Matches();
                match.setId(1);
                match.setOnematch(true);
                match.setTwomatch(false);
                match.setCatone(1);
                match.setCattwo(2);
        this.matchesRepository.save(match);
    }
}