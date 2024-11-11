document.getElementById('payment-method').addEventListener('change', function() {
    const selectedMethod = document.querySelector('input[name="payment-method"]:checked').value;
    document.querySelectorAll('.payment-details').forEach(function(el) {
        el.style.display = 'none';
    });
    if (selectedMethod === 'mtn') {
        document.getElementById('mtn-section').style.display = 'block';
    } else if (selectedMethod === 'paypal') {
        document.getElementById('paypal-section').style.display = 'block';
    }
});

// PayPal Integration Example (Replace with your PayPal SDK Code)
document.getElementById('paypal-button').addEventListener('click', function() {
    // Redirect to PayPal or integrate PayPal SDK for donation
    window.location.href = 'https://www.paypal.com/donate';
});


function showForm(formId) {
    // Hide all forms
    document.querySelectorAll('.payment-form').forEach(function(form) {
        form.style.display = 'none';
    });

    // Show the selected form
    document.getElementById(formId).style.display = 'block';
}











document.getElementById('donation-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission

    // Get the phone number and amount from the form
    const phoneNumber = document.getElementById('mtn-number').value;
    const amount = document.getElementById('mtn-amount').value;

    // Send data to the backend for MoMo payment request
    fetch('/api/mtn-momo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            phoneNumber: phoneNumber,
            amount: amount
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Payment prompt sent to your phone. Please complete the payment.');
        } else {
            alert('Failed to send payment prompt: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});









const axios = require('axios');

// Function to initiate MoMo payment
const initiateMomoPayment = async (phoneNumber, amount) => {
    const data = {
        "CustomerName": "Donor Name",         // Optional
        "CustomerMsisdn": phoneNumber,        // User's phone number
        "Channel": "mtn-gh",                 // For MTN Ghana
        "Amount": amount,                    // Donation amount
        "PrimaryCallbackUrl": "https://yourwebsite.com/payment-callback",  // Callback URL for payment status
        "Description": "Church Donation",    // Description for payment
        "ClientReference": "Donation123"     // Reference for the transaction
    };

    try {
        const response = await axios.post('https://api.hubtel.com/v1/merchantaccount/merchants/0534829203/receive/mobilemoney', data, {
            auth: {
                username: 'YOUR_API_KEY',     // Hubtel API key
                password: 'YOUR_API_SECRET'   // Hubtel API secret
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error initiating MoMo payment:', error.response.data);
        throw new Error('Failed to initiate payment');
    }
};

// Backend route to handle form submission
app.post('/api/mtn-momo', async (req, res) => {
    const { phoneNumber, amount } = req.body;

    try {
        const paymentResponse = await initiateMomoPayment(phoneNumber, amount);
        res.json({ success: true, message: 'Payment initiated successfully', data: paymentResponse });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
});







app.post('/payment-callback', (req, res) => {
    const paymentData = req.body;

    // Check if payment was successful
    if (paymentData.Status === "Success") {
        console.log('Payment successful for transaction:', paymentData.ClientReference);
        // Update your database to mark the donation as completed
    } else {
        console.log('Payment failed for transaction:', paymentData.ClientReference);
        // Handle payment failure
    }

    // Always send a 200 response to Hubtel
    res.status(200).send('OK');
});








