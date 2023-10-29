import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import ButtonBase from '@mui/material/ButtonBase';
import { useNavigate } from 'react-router-dom';

// Updated tiers array
const tiers = [
  {
    title: 'Use Credit',
    //price: '0',
    description: [
      //add description for making a transaction using the available credit
      'Use your credit to pay',
      'Amount will be deducted from your available balance',
      
      
    ],
    buttonText: 'Use Credit',   
    buttonVariant: 'outlined',
  },
  {
    title: 'Make Payment',
   

    description: [
      //add description for making a payment to increase the available credit
      'Pay to restore your credit',
      'Amount will be added to your available balance',
    ],
    buttonText: 'Make Payment',  
    buttonVariant: 'contained',
  },
];

const defaultTheme = createTheme();

function Credit() {
  const navigate = useNavigate(); 

  const handleCardClick = (title) => {
    if (title === 'Use Credit') {
      navigate('/transaction'); // <-- Route to transaction page for 'Use Credit'
    }
    // You can add more routing logic for other cards here if needed
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
      </AppBar>
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Pomelo Credit
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Available credit: $1000
          <br />
          Payable balance: $0
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end" justifyContent="center">
          {tiers.map((tier) => (
            <Grid item key={tier.title} xs={12} sm={6} md={4}>
              <ButtonBase style={{ width: '100%' }} onClick={() => handleCardClick(tier.title)}>  {/* <-- Wrap the Card with ButtonBase */}
                <Card>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{ align: 'center' }}
                    sx={{ backgroundColor: (theme) => theme.palette.grey[200] }}
                  />
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', mb: 2 }}>
                      <Typography component="h2" variant="h3" color="text.primary">
                      </Typography>
                    </Box>
                    <ul>
                      {tier.description.map((line) => (
                        <Typography component="li" variant="subtitle1" align="center" key={line}>
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ButtonBase>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Credit;
