import React, { useState } from 'react';
import { Button, Typography, Container, TextField, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Transaction = () => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [paymentValue, setPaymentValue] = useState('');
    const navigate = useNavigate();

    const handleAPI = async (apiEndpoint) => {
        setLoading(true);
        try {
            const response = await fetch(apiEndpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: paymentValue }),
            });

            const data = await response.json();
            if (response.ok) {
                setResult(data.message);
            } else {
                setResult(data.error);
            }
        } catch (err) {
            setResult('Error processing transaction.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                Make Payment with Credit
            </Typography>
            <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                label="Payment Value"
                value={paymentValue}
                onChange={e => setPaymentValue(e.target.value)}
            />
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleAPI('/api/initiate-transaction')}
                        disabled={loading}
                    >
                        {loading ? 'Processing...' : 'Initiate Transaction'}
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleAPI('/api/settle-transaction')}
                        disabled={loading}
                    >
                        {loading ? 'Processing...' : 'Settle Transaction'}
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button
                        variant="contained"
                        color="default"
                        onClick={() => {
                            handleAPI('/api/go-home-api');
                            navigate('/credit'); // route to credit.js page after the API call
                        }}
                        disabled={loading}
                    >
                        {loading ? 'Processing...' : 'Go Home'}
                    </Button>
                </Grid>
            </Grid>
            {result && <Typography variant="h6" align="center">{result}</Typography>}
        </Container>
    );
}

export default Transaction;
