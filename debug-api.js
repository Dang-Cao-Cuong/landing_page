
const https = require('https');
const fetch = require('node-fetch');

const agent = new https.Agent({
  rejectUnauthorized: false
});

async function testApi() {
    try {
        const response = await fetch('https://10.60.243.54:2405/api/contact-messages/v1/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contactMessageFullName: "Test Name",
                contactMessagePhoneNumber: "123456789",
                contactMessageEmail: "test@example.com",
                message: "Test message"
            }),
            agent: agent
        });

        console.log('HTTP Status:', response.status);
        console.log('HTTP OK:', response.ok);
        const data = await response.json();
        console.log('Body:', JSON.stringify(data, null, 2));

    } catch (error) {
        console.error('Error:', error);
    }
}

testApi();
