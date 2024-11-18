package com.farmersmarket.controllers;

import com.farmersmarket.models.Farmer;
import com.farmersmarket.services.FarmerService;
import java.util.List;

public class FarmerController {
    private FarmerService farmerService = new FarmerService();

    public void createFarmer(Farmer farmer) {
        farmerService.addFarmer(farmer);
        System.out.println("Farmer added successfully.");
    }

    public void listFarmers() {
        List<Farmer> farmers = farmerService.getAllFarmers();
        for (Farmer farmer : farmers) {
            System.out.println(farmer.getName());
        }
    }
}