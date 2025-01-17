const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors())

app.get('/test', (req, res) => {
    res.send('hello');
})

app.post('/', async (req, res) => {
    const { mobile } = req.body;
    console.log(mobile);
    axios.get(`https://digitalapiproxy.paytm.com/v1/mobile/getopcirclebyrange?channel=web&version=2&number=${mobile}&child_site_id=1&site_id=1&locale=en-in`)
    .then(function (response) {
        // handle success
        console.log(response.data);
        res.json(response.data)
    })
    .catch(function (error) {
        // handle error
        console.log('inside error');
        res.status(500).json({message: "failed to fetch data"});
    })
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`app running`);
})

