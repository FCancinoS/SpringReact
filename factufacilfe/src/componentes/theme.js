// theme.js
import { createTheme } from '@mui/material/styles';
import { teal, deepOrange, purple, indigo } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    teal: {
      main: teal[500],
      contrastText: '#fff',
    },
    deepOrange: {
      main: deepOrange[500],
      contrastText: '#fff',
    },
    purple: {
      main: purple[500],
      contrastText: '#fff',
    },
    indigo: {
      main: indigo[500],
      contrastText: '#fff',
    },
  },
});
export default theme;
