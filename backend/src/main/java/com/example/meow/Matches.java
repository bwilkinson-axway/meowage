package com.example.meow;

import javax.persistence.*;

@Entity
public class Matches {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name= "onematch")
    private boolean onematch;

    @Column(name= "twomatch")
    private boolean twomatch;

    @Column(name= "catone")
    private long catone;

    @Column(name= "cattwo")
    private long cattwo;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getCatone() {
        return catone;
    }

    public void setCatone(long catone) {
        this.catone = catone;
    }

    public long getCattwo() {
        return cattwo;
    }

    public void setCattwo(long cattwo) {
        this.cattwo = cattwo;
    }

    public boolean isOnematch() {
        return onematch;
    }

    public void setOnematch(boolean onematch) {
        this.onematch = onematch;
    }

    public boolean isTwomatch() {
        return twomatch;
    }

    public void setTwomatch(boolean twomatch) {
        this.twomatch = twomatch;
    }
}
