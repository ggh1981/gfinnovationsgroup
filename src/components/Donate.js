import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

function Donate() {
  return (
    <Container>
      <Box
        sx={{
          backgroundColor: '#f5f5f5',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          marginBottom: '20px'
        }}
      >
        <Typography variant="h4" gutterBottom>
          Donate to G&F Innovations Group LLC
        </Typography>
        <Typography variant="body1">
          Your donations help us continue our work. Thank you for your support!
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" mt={4}>
        <PayPalScriptProvider options={{ "client-id": "YOUR_PAYPAL_CLIENT_ID" }}>
          <PayPalButtons
            style={{ layout: 'vertical' }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: '10.00'
                  }
                }]
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                alert("Transaction completed by " + details.payer.name.given_name);
                // OPTIONAL: Call your server to save the transaction
                return fetch("/paypal-transaction-complete", {
                  method: "post",
                  body: JSON.stringify({
                    orderID: data.orderID
                  })
                });
              });
            }}
          />
        </PayPalScriptProvider>
      </Box>
    </Container>
  );
}

export default Donate;