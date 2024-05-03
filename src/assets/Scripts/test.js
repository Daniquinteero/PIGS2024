const {getJson} = require("serpapi")
const util = require('util');
require('dotenv').config();

const API_KEY = process.env.API_KEY;
getJson({
  api_key: "d3cb8f1ea129743fc0d434a8bd06de46a7573ffd17d180ad93fd40e19c8dd29b",
  engine: "google_maps",
  q:"Coffe",
  google_domain:"google.com",
  ll:"@40.6970193,-74.3093255,14z",
  type:"search",
  hl:"en"
}, (json) => {
  console.log(util.inspect(json,{depth:null, colors:true}));
  });
