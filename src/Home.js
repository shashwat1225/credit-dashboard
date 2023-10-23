import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import hw from './hw.jpeg';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

function Pricing() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
      </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Credit Card App (Kinda Sorta)
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Hey everyone at Pomelo! This is my attempt at creating a front-end for the problem we got for our code assessment. 
          I hope you like it and can let me work on prod one day. =)
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center">
          <img src={hw} alt="Description of the Image" style={{ maxWidth: "50%", height: "auto" }} />
        </Box>
        
        <Box mt={3}>
          <Button variant="contained" color="primary" href="/credit">Site</Button>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}

export default Pricing;
