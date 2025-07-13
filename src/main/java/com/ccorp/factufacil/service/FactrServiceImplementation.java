package com.ccorp.factufacil.service;
import com.ccorp.factufacil.model.Factr;
import com.ccorp.factufacil.repository.FactrRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FactrServiceImplementation implements FactrService {

    @Autowired
    private FactrRepository factrRepository;

    @Override
    public Factr saveFactr(Factr factr) {
        return factrRepository.save(factr);
    }

    @Override
    public void saveAllFacturas(List<Factr> facturas) {
        if (facturas.isEmpty()) {
            throw new IllegalArgumentException("La lista de facturas no puede estar vacía.");
        }
        factrRepository.saveAll(facturas);
    }

    @Override
    public List<Factr> getAllFacturas() {
        return factrRepository.findAll();
    }

}