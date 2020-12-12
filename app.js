const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', async (req, res) => {
    const { mobile } = req.body.mobile;
    console.log(mobile);
    axios.get('https://digitalapiproxy.paytm.com/v1/mobile/getopcirclebyrange?channel=web&version=2&number=9853174100&child_site_id=1&site_id=1&locale=en-in')
    .then(function (response) {
        // handle success
        console.log(response);
        res.json(response.data)
    })
    .catch(function (error) {
        // handle error
        console.log(error);
        res.json(error)
    })
});

app.listen(3000, () => {
    console.log(`app running`);
})

