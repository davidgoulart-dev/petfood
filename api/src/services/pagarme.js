const axios = require('axios');
const api_key = require('../data/keys.json').api_key;

const api = axios.create({
    baseURL: 'https://api.pagar.me/core/v5',
    headers: {
        'Authorization': 'Basic ' + Buffer.from(`${api_key}:`).toString('base64'),
    }
});

module.exports = {
    createRecipient: async (name) => {
        try {
            const response = await api.post('/recipients', {
                "name": name,
                "email": "tstark@avengers.com",
                "description": "Recebedor tony stark",
                "document": "26224451990",
                "type": "individual",
                "default_bank_account": {
                  "holder_name": name,
                  "holder_type": "individual",
                  "holder_document": "26224451990",
                  "bank": "341",
                  "branch_number": "1234",
                  "branch_check_digit": "6",
                  "account_number": "12345",
                  "account_check_digit": "6",
                  "type": "checking",
                  "metadata": {
                    "key": "value"
                  }
                },
                "transfer_settings": {
                  "transfer_enabled": false,
                  "transfer_interval": "Daily",
                  "transfer_day": 0
                },
                "automatic_anticipation_settings": {
                  "enabled": true,
                  "type": "full", // remova o apóstrofo extra aqui
                  "volume_percentage": "50",
                  "delay": null
                },
                "metadata": {
                  "key": "value"
                }
            });
            return {error: false, data: response.data};
        } catch (err) {
            console.log("Status: ", err.response.status); // The response status code
            console.log("Status Text: ", err.response.statusText); // The response status text
            console.log("Response Body: ", err.response.data); // The response body
            return {error: true, message: err.message};
        }
    },
    createSplitTransaction: async (data) => {
        try{
            const response = await api.post('/orders', {
                api_key,
                ...data
            });

            return {error:false, data: response.data}
        }catch (err) {
            return {error: true, message: err.message}
        }
    }
};