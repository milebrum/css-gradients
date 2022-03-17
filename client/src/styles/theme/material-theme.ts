import { createTheme } from '@mui/material';

const Theme = createTheme({
  components: {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#f1f4f8;',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: '100%',
          height: '42px',
          background: '#f1f4f8',
          borderRadius: '6px',
          fontFamily: 'Poppins, sans-serif',
          color: '#3D4853',
          fontWeight: 600,
          textTransform: 'capitalize',
          fontSize: '.8125rem',
          lineHeight: '3rem',
        },
      },
    },
  },
});

export default Theme;
