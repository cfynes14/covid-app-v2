
const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
const localAuthorities = require('./server/utils/localAuthorities');
const Location = require('./server/utils/location');
const National = require('./server/utils/national');
const localAuthorityData = require('./server/utils/localAuthorityData');

app.use(cors())
  
app.use(express.static(path.join(__dirname, "client/build")));

app.use(bodyParser.urlencoded({ extended: true }));

//get all local authority names
app.get('/localAuthorities', (req, res) => {
    res.send(localAuthorities());
});

//get geojson object for named LA
app.get('/location', async (req, res) => {
  let location = req.query.location
  let coords
    coords = await Location.search(location)
    res.send(coords);
  }
)

//retrieve national data 
app.get('/national', async (req, res) => {
  let response = await National.daily()
  if(response.status == 200 || response.status == 304){
    res.send(response)
  } else {
    res.status(500).send()
  }
})

app.get('/getLAdata', async (req, res) => {
  const response = await localAuthorityData(req.query)
  if(response.status == 200){

    res.send(response.data.data); 
  } else {
    res.status(response.status).send(response.statusText)
  }
})

app.listen(port, () => console.log(`Listening on port ${port}`));