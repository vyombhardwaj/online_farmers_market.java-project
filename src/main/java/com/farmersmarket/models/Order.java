package com.farmersmarket.models;
import java.util.Date;

public class Order {
    private Long id;
    private Long farmerId;
    private Long productId;
    private Date orderDate;
    private int quantity;

    // Constructors
    public Order() {}

    public Order(Long id, Long farmerId, Long productId, Date orderDate, int quantity) {
        this.id = id;
        this.farmerId = farmerId;
        this.productId = productId;
        this.orderDate = orderDate;
        this.quantity = quantity;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getFarmerId() {
        return farmerId;
    }

    public void setFarmerId(Long farmerId) {
        this.farmerId = farmerId;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}