const app = require("./app");
const PORT = process.env.PORT || 3000;
const axios = require('axios');

//fox api
app.get('/fox', async (req, res) => {
  try {
  const response = await axios.get('https://randomfox.ca/floof/')
  res.json(response.data)
  console.log(response.data)
  } catch(err){
    res.status(502).send('unavailable')
  }
})

//Add Caption and Form(handlebars not working)
//////placeholder array to test handlebars
const foxcaptions = [
  {captiontext: 'placeholdercaption'},
]
/////render caption
app.get('/', async (req, res) => {
  res.render('index', {foxcaptions})
})
/////caption to json
app.get('/foxcaption', async (req, res) => {
  res.json(foxcaptions)
})
/////post caption
app.post('/foxcaption', async (req, res) => {
  console.log(req.body)
  foxcaptions.push({captiontext:req.body.foxcaption})
  res.redirect('/')
})

app.listen(PORT, function () {
  console.log("\n");
  console.log(
    "\x1b[35m%s\x1b[0m",
    "Server listening on http://localhost:" + PORT
  );
});
