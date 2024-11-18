// Product.java
package com.farmersmarket.models;

public class Product {
    private Long id;
    private String name;
    private String category;
    private double price;

    // Constructors
    public Product() {}

    public Product(Long id, String name, String category, double price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
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

    public String getCategory() {
        return category;
    }