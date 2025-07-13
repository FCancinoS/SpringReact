import React, { useState } from 'react';
import { Button } from '@mui/material';
import Factr from './Factr';
import TablaFacturas from './TablaFacturas';

export default function FacturaApp() {
  const [mostrarTabla, setMostrarTabla] = useState(false);

  return (
    <>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => setMostrarTabla(!mostrarTabla)}
        sx={{ mt: 2, mx: 'auto', display: 'block' }}
      >
        {mostrarTabla ? 'Crear nueva factura' : 'Ver facturas registradas'}
      </Button>
      {mostrarTabla ? <TablaFacturas /> : <Factr />}
    </>
  );
}
