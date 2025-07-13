import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Import the theme
import { ResetTvOutlined } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
const currencies = [
  {value: 'USD',label: '$',},
  {value: 'EUR',label: '€',},
  {value: 'BTC',label: '฿',  },
  {value: 'MXN',label: '$',  },
];
const metodos = [
  {value: 'NFC',label: 'NFC',},
  {value: 'Transferencia',label: 'Transferencia',},
  {value: 'Efectivo',label: 'Efectivo',},
  {value: 'Tarjeta de credito',label: 'Tarjeta de credito',},
  {value: 'Tarjeta de debito',label: 'Tarjeta de debito',},
];


export default function BasicTextFields() {
const [nombre,setNombre] = React.useState('');
const [rfc,setRfc] = React.useState('');
const [estadoPago,setEstadoPago] = React.useState('');
const [metodoPago,setMetodoPago] = React.useState('');
const [moneda,setMoneda] = React.useState('');
const [total,setTotal] = React.useState('');
const [comentarios,setComentarios] = React.useState('');
const [fechaEmision,setFechaEmision] = React.useState(new Date().toISOString().split('T')[0]); // Formato YYYY-MM-DD
const [factrs, setFactrs] = React.useState([]);


    const handleClick = (e) => {
  e.preventDefault();
  const factr = {
  factrClienteNombre: nombre,
  factrFechaEmision: fechaEmision,
  factrClienteRfc: rfc,
  factrEstadoPago: estadoPago,
  factrMetodoPago: metodoPago,
  factrMoneda: moneda,
  factrTotal: parseFloat(total), // Para enviar como número
  factrComentarios: comentarios // Puede ir vacío o null
};

  console.log(factr);
  fetch('http://localhost:8080/factr/add', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(factr),
    }).then(()=> {
      console.log('Nueva factura creada');
    
    })
}
React.useEffect(() => {
    fetch('http://localhost:8080/factr/all')
    .then(response => response.json())
    .then((result)=> {
      setFactrs(result);
    }

)
}, [])

    return (
    <Box
      component="form"
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '300px',
        mx: 'auto',    
        my: 4,
    }}
      noValidate
      autoComplete="off"

    >
        <Typography variant="h3" component="h3" gutterBottom> Genera una factura</Typography>
      <TextField
        id="outlined-basic"
        label="Nombre del cliente"
        variant="outlined"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        />
        <TextField
        id="outlined-basic"
        label="RFC"
        variant="outlined"
        value={rfc}
        onChange={e => setRfc(e.target.value)}
        />
        <TextField
        label="Fecha de emisión"
        type="date"
        value={fechaEmision}
        onChange={e => setFechaEmision(e.target.value)}
        InputLabelProps={{ shrink: true }}
        />

      <TextField 
          id="outlined-basic" 
          select label="Estado del pago" 
          variant="outlined"
          value={estadoPago}
          onChange={(e) => setEstadoPago(e.target.value)}
          defaultValue="Pagado"
          >
            <MenuItem key="Pagado" value="Pagado">
              Pagado
            </MenuItem>
            <MenuItem key="Pendiente" value="Pendiente">
              Pendiente
            </MenuItem>
            <MenuItem key="Cancelado" value="Cancelado">
              Cancelado
            </MenuItem>     
            </TextField>
      <TextField 
          id="outlined-basic" 
          select label="Método de pago" 
          variant="outlined"
          value={metodoPago}    
            onChange={(e) => setMetodoPago(e.target.value)}
          defaultValue="Transferencia"
          >
            {metodos.map((option) => (
                <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
            ))}
          </TextField>
      <TextField
          id="outlined-select-currency"
          select
          label="Moneda"
          defaultValue="MXN"
          helperText="Selecciona la moneda"
          value={moneda}
            onChange={(e) => setMoneda(e.target.value)}
        >
          {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
            id="outlined-basic"
            label="Total"
            variant="outlined"
            value={total}
            onChange={e => setTotal(e.target.value)}
            />
      <TextareaAutosize 
         id='outlined-basic' 
         aria-label="Comentarios" 
         placeholder='Comentarios' 
         variant="outlined"
         minRows={3} 
         value={comentarios}
         onChange={e => setComentarios(e.target.value)}/>    
        <ThemeProvider theme={theme}>
        <Button variant="contained" color="teal" onClick={handleClick}>
          Guardar   
        </Button>
            </ThemeProvider>
    </Box>
  );
}
