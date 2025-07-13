package com.ccorp.factufacil.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "factr")
public class Factr {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "factr_id")
    private Integer factrId;

    @Column(name = "factr_fecha_emision", nullable = false)
    private LocalDate factrFechaEmision;

    @Column(name = "factr_cliente_nombre", nullable = false, length = 100)
    private String factrClienteNombre;

    @Column(name = "factr_cliente_rfc", length = 20)
    private String factrClienteRfc;

    @Column(name = "factr_total", nullable = false)
    private Double factrTotal;

    @Column(name = "factr_estado_pago", length = 20)
    private String factrEstadoPago; // VARCHAR libre

    @Column(name = "factr_metodo_pago", length = 50)
    private String factrMetodoPago;

    @Column(name = "factr_moneda", length = 10)
    private String factrMoneda = "MXN";

    @Column(name = "factr_comentarios", columnDefinition = "TEXT")
    private String factrComentarios;

    // Getters y setters aquí, o usa @Getter @Setter de Lombok


    public Factr(){

    }
    public Integer getFactrId() {
        return factrId;
    }

    public void setFactrId(Integer factrId) {
        this.factrId = factrId;
    }

    public LocalDate getFactrFechaEmision() {
        return factrFechaEmision;
    }

    public void setFactrFechaEmision(LocalDate factrFechaEmision) {
        this.factrFechaEmision = factrFechaEmision;
    }

    public String getFactrClienteNombre() {
        return factrClienteNombre;
    }

    public void setFactrClienteNombre(String factrClienteNombre) {
        this.factrClienteNombre = factrClienteNombre;
    }

    public String getFactrClienteRfc() {
        return factrClienteRfc;
    }

    public void setFactrClienteRfc(String factrClienteRfc) {
        this.factrClienteRfc = factrClienteRfc;
    }

    public Double getFactrTotal() {
        return factrTotal;
    }

    public void setFactrTotal(Double factrTotal) {
        this.factrTotal = factrTotal;
    }

    public String getFactrEstadoPago() {
        return factrEstadoPago;
    }

    public void setFactrEstadoPago(String factrEstadoPago) {
        this.factrEstadoPago = factrEstadoPago;
    }

    public String getFactrMetodoPago() {
        return factrMetodoPago;
    }

    public void setFactrMetodoPago(String factrMetodoPago) {
        this.factrMetodoPago = factrMetodoPago;
    }

    public String getFactrMoneda() {
        return factrMoneda;
    }

    public void setFactrMoneda(String factrMoneda) {
        this.factrMoneda = factrMoneda;
    }

    public String getFactrComentarios() {
        return factrComentarios;
    }

    public void setFactrComentarios(String factrComentarios) {
        this.factrComentarios = factrComentarios;
    }




}
