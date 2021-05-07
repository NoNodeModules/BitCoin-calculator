const express = require('express');
const axios = require('axios');
const https = require('https');

const app = express();
app.set("view engine", "ejs");
app.use(express.static('public'));

axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(res => {

    USD_Rate = res.data.bpi.USD.rate_float;

    EUR_Rate = res.data.bpi.EUR.rate_float;

    console.log(USD_Rate, EUR_Rate);
})
.catch(err => {
    console.log('Error: ', err.message);
});

app.get('/', (req,res) =>{
    res.render('index.ejs');
});

app.listen(3000, ()=>{
    console.log('Server is running on Port 3000');
});