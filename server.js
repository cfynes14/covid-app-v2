

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
const localAuthorities = require('./server/utils/localAuthorities');
const Location = require('./server/utils/location');
const National = require('./server/utils/national');
const localAuthorityData = require('./server/utils/localAuthorityData');

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

// app.use(express.static(path.join(__dirname, 'client/build')));

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
  let data = await National.daily()
  console.log(data.status)
  if(data){
    res.status(200)
    res.send(data);
  } else {
    console.log('nothing to return')
    res.status(404).send('Unable to find data')
  }
})

app.get('/getLAdata', async (req, res) => {
  let data = await localAuthorityData(req.query)
  if(data){
    res.status(200)
    res.send(data); 
  } else {
    console.log('nothing to return')
    res.status(404).send('Unable to find data')
  }
})

app.listen(port, () => console.log(`Listening on port ${port}`));