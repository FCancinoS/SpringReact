package com.ccorp.factufacil.service;
import com.ccorp.factufacil.model.Factr;
import com.ccorp.factufacil.repository.FactrRepository;
import java.util.List;

public interface FactrService {
    Factr saveFactr(Factr factr);
     void saveAllFacturas(List<Factr> facturas);

    List<Factr> getAllFacturas();
}
