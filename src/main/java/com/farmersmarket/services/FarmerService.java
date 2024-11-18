package com.farmersmarket;

import com.farmersmarket.models.Farmer;
import java.util.List;
import java.util.ArrayList;

public class FarmerService {
    private List<Farmer> farmers = new ArrayList<>();

    public void addFarmer(Farmer farmer) {
        farmers.add(farmer);
    }

    public List<Farmer> getAllFarmers() {
        return farmers;
    }

    public Farmer getFarmerById(Long id) {
        return farmers.stream().filter(f -> f.getId().equals(id)).findFirst().orElse(null);
    }
}