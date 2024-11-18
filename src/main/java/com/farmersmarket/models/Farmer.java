// Farmer.java
package com.farmersmarket.models;

public class Farmer {
    private Long id;
    private String name;
    private String location;
    private String contactInfo;

    // Constructors
    public Farmer() {}

    public Farmer(Long id, String name, String location, String contactInfo) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.contactInfo = contactInfo;
    }

    // Getters and Setters
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

    public String getContactInfo() {
        return contactInfo;
    }

    public void setContactInfo(String contactInfo) {
        this.contactInfo = contactInfo;
    }
}
