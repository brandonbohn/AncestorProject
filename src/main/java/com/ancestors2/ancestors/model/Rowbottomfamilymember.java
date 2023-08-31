package com.ancestors2.ancestors.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
    @Table(name="Rowbottomfamilymembers")
public class Rowbottomfamilymember {
  @Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

    @Column(name="name")
    private String name;

    @Column(name="location")
    private String location;

    @Column(name="deathDate")
    private String deathdate;

   @Column(name="dateofBirth")
   private String dateofBirth;

   @Column(name="occupation")
   private String occupation;

   @Column (name="birthCity")
   private String birthCity;

   @Column (name="spouse")
   private String spouse;

   @Column (name="property")
   private String property;

   @Column (name="pasttimes")
   private String pasttimes;

   @Column (name="education")
   private String education;

    @Column (name="martialStatus")
   private String martialStatus;

   @Column (name="interestingfacts")
   private String Interestingfacts;

   @Column (name="graveLocation")
   private String graveLocation;
   
   @Column (name="story", length=65000, columnDefinition="TEXT")
   private String story;
   @Column (name="profilephoto")
   private String profilephoto;

    @Column (name="gravephoto")
    private String gravephoto;

    @Column (name="spousephoto")
        private String spousephoto;

    @Column (name="kidphoto1")
        private String kidphoto1;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDeathdate() {
        return deathdate;
    }

    public void setDeathdate(String deathdate) {
        this.deathdate = deathdate;
    }

    public String getDateofBirth() {
        return dateofBirth;
    }

    public void setDateofBirth(String dateofBirth) {
        this.dateofBirth = dateofBirth;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public String getBirthCity() {
        return birthCity;
    }

    public void setBirthCity(String birthCity) {
        this.birthCity = birthCity;
    }

    public String getSpouse() {
        return spouse;
    }

    public void setSpouse(String spouse) {
        this.spouse = spouse;
    }

    public String getProperty() {
        return property;
    }

    public void setProperty(String property) {
        this.property = property;
    }

    public String getPasttimes() {
        return pasttimes;
    }

    public void setPasttimes(String pasttimes) {
        this.pasttimes = pasttimes;
    }

    public String getEducation() {
        return education;
    }

    public void setEducation(String education) {
        this.education = education;
    }

    public String getMartialStatus() {
        return martialStatus;
    }

    public void setMartialStatus(String martialStatus) {
        this.martialStatus = martialStatus;
    }

    public String getInterestingfacts() {
        return Interestingfacts;
    }

    public void setInterestingfacts(String interestingfacts) {
        Interestingfacts = interestingfacts;
    }

    public String getGraveLocation() {
        return graveLocation;
    }

    public void setGraveLocation(String graveLocation) {
        this.graveLocation = graveLocation;
    }

    public String getStory() {
        return story;
    }

    public void setStory(String story) {
        this.story = story;
    }

    public String getProfilephoto() {
        return profilephoto;
    }

    public void setProfilephoto(String profilephoto) {
        this.profilephoto = profilephoto;
    }

    public String getGravephoto() {
        return gravephoto;
    }

    public void setGravephoto(String gravephoto) {
        this.gravephoto = gravephoto;
    }

    public String getSpousephoto() {
        return spousephoto;
    }

    public void setSpousephoto(String spousephoto) {
        this.spousephoto = spousephoto;
    }

    public String getKidphoto1() {
        return kidphoto1;
    }

    public void setKidphoto1(String kidphoto1) {
        this.kidphoto1 = kidphoto1;
    }
}

   