package com.ccorp.factufacil.controller;


import com.ccorp.factufacil.model.Factr;
import com.ccorp.factufacil.service.FactrService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/factr")
public class FactrController {
    @Autowired
    private FactrService factrService;

    @GetMapping("/all")
    public List<Factr> getAllFacturas() {
        return factrService.getAllFacturas();
    }

    @PostMapping("/add")
    public String add(@RequestBody Factr factr){

        factrService.saveFactr(factr);
        return "New factr is added";

    }
    @PostMapping("/add-multiple")
    public String addMultiple(@RequestBody List<Factr> facturas) {
        factrService.saveAllFacturas(facturas);
        return "Facturas agregadas correctamente.";
    }
}
