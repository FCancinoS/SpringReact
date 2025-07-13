import React, { useEffect, useState } from 'react';
import {
  Table, TableBody, TableCell, TableHead, TableRow, Paper,
} from '@mui/material';

export default function TablaFacturas() {
  const [facturas, setFacturas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/factr/all')
      .then(res => res.json())
      .then(data => setFacturas(data));
  }, []);

  return (
    <Paper sx={{ maxWidth: 800, margin: 'auto', padding: 2 }}>
      <h2>Facturas registradas</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Cliente</TableCell>
            <TableCell>RFC</TableCell>
            <TableCell>Fecha</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {facturas.map((f, i) => (
            <TableRow key={i}>
              <TableCell>{f.factrClienteNombre}</TableCell>
              <TableCell>{f.factrClienteRfc}</TableCell>
              <TableCell>{f.factrFechaEmision}</TableCell>
              <TableCell>${f.factrTotal}</TableCell>
              <TableCell>{f.factrEstadoPago}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
