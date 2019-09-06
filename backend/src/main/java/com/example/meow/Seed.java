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
        Users one = new Users("cat1@meowage.com", "Catticus Finch", "hi", "goldfish", 2, "I love fish", "https://easysunday.com/blog/wp-content/uploads/2017/11/cat.jpg");
        this.usersRepository.save(one);
        Users two = new Users("cat2@meowage.com", "Miz Kitty", "hi", "lazer", 3, "help me I'm single", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9PF7oK_J5NFa_N_yU_tZo-GyqMRFSXheHXjQeCoq5Vzx3TfuA8A");
        this.usersRepository.save(two);
        Users three = new Users("cat3@meowage.com", "Fluffy", "hi", "feather on stick", 4, "You've tried the zeros, get with a hero", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgqR68owng0H_fCod-If9Y5l4r02lYi6lOc9GvdsaQ8eg6hy65Tw");
        this.usersRepository.save(three);
        Users four = new Users("cat4@meowage.com", "Samwise Catgi", "hi", "squirrels", 5, "Meeeeeoooowww", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO9zHwQ5zx_7NFGb6iEzHkZlCbbzJX7x_bWAmvt86dKPlbdmD-");
        this.usersRepository.save(four);
        Users five = new Users("cat5@meowage.com", "Meow Zedong", "hi", "'85 Camero", 2, "I never know what to put here", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3MEyjg2RJpF9sxsrHWMpgAQ91LvvM5LCbC59mO-XTcOj2kLf7A");
        this.usersRepository.save(five);
        Users six = new Users("cat6@meowage.com", "Randolf", "hi", "mouse", 3, "wanna know? ask me, I like to chat", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp82tQI4xHdtSSlQ1IEWUPv2JeoeOg_PHkCN3akXj1BCTeRJrDqw");
        this.usersRepository.save(six);
        Users seven = new Users("cat7@meowage.com", "Sake", "hi", "scratching post", 4, "DnD +33 Warlock, lets run a campaign", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzxb06pETCtdF-uX-r1FTGl1czazzA4S8r7CmQozocSvtGJ86-A");
        this.usersRepository.save(seven);
        Users eight = new Users("cat8@meowage.com", "Snookums", "hi", "baby birds", 5, "Amateur breakdancer, Professional baller", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPq69NqSwTly8LNqI24fRskF9NKM47-RyzKrm8jvCG0lBa2nUI");
        this.usersRepository.save(eight);
        Users nine = new Users("cat9@meowage.com", "Howard P. Cat", "hi", "the red dot", 2, "I like sushi and hot-tubbing", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLxgj_XBkIAyUi1fZWMsvyiCg0EghBC2REgvaZxXrBO1E_1ocV-Q");
        this.usersRepository.save(nine);
        Users ten = new Users("cat10@meowage.com", "Garfield", "hi", "house plants", 3, "lets get coffee and talk about Harry Potter", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57ZurVb3Goqf7VomkoAxQi5QrSfaAgPpVjc2p4g8MZ76rG5kPug");
        this.usersRepository.save(ten);
        Users eleven = new Users("cat11@meowage.com", "Kate", "hi", "butterflies", 4, "How do you like your eggs?", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbK4pLlCWdwlWm0wx9fhZtiOi0huyWvlZXTSFi9RwORMCuMKZn");
        this.usersRepository.save(eleven);
        Users twelve = new Users("cat12@meowage.com", "Rhianna", "hi", "curtain tassels", 5, "I'm probably not your type unless you like Dashboard Confessional", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcbU53z7u5aOxKtteKOzDM0cUxOjHUJ6BPIM8_LbGELYWRC56baA");
        this.usersRepository.save(twelve);
        Users thirteen = new Users("cat13@meowage.com", "Pookie", "hi", "stuffed pizza", 2, "I hardly ever scratch, and my litter is clean", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7iP-nzX-3NENlXvC5EeiVGBNSln3t76jPAGnqdUxNnjMrYsI");
        this.usersRepository.save(thirteen);
        Users fourteen = new Users("cat14@meowage.com", "Nibblits", "hi", "my laptop", 3, "Get to know me, I don't bite...hard", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp5NJ2X5LGo4tPV15ezKhtZ8-NShJVdelLaW1Y0Wukm5q0Ma5jlw");
        this.usersRepository.save(fourteen);
        Users fifteen = new Users("cat15@meowage.com", "Bender", "hi", "cardboard box", 4, "Give me a shot baby, and I'll rock your world", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpriVlrn_CyvIrT66TyoS39vLIxI9mskVWffT2XkVS0pUaCCoq");
        this.usersRepository.save(fifteen);

        Matches match = new Matches(1, true, true, 1, 2);
        this.matchesRepository.save(match);
        Matches match2 = new Matches(2, true, false, 1, 4);
        this.matchesRepository.save(match2);
        Matches match3 = new Matches(3, true, true, 1, 6);
        this.matchesRepository.save(match3);
        Matches match4 = new Matches(4, true, true, 1, 8);
        this.matchesRepository.save(match4);
        Matches match5 = new Matches(5, true, false, 1, 10);
        this.matchesRepository.save(match5);
        Matches match6 = new Matches(6, true, true, 1, 13);
        this.matchesRepository.save(match6);
        Matches match7 = new Matches(7, true, true, 1, 15);
        this.matchesRepository.save(match7);
    }
}