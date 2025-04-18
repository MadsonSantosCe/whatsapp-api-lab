require('dotenv').config();
const axios = require('axios');

async function sendTemplateMessage(req, res) {
    const response = await axios({
        url: `https://graph.facebook.com/v14.0/${process.env.WHATSAPP_PHONE_ID}/messages`,
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            messaging_product: 'whatsapp',
            to: process.env.WHATSAPP_PHONE_TO,
            type: 'template',
            template: {
                name: 'hello_world',
                language: {
                    code: 'en_US'
                }
            }
        })
    });

    console.log(response.data);
}

sendTemplateMessage();