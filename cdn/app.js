const express = require('express');
const fetch = require('node-fetch');
const compression = require('compression');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(compression());
app.use('/vendor', express.static('vendor'));
app.use('/fonts', express.static('vendor/css/food/fonts'));

let jsURLs = [
    'https://code.jquery.com/jquery-3.4.1.min.js',
    'http://localhost:4100/vendor/js/jquery-accessibleMegaMenu.js',
    'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/noframework.waypoints.min.js'
];
let cssURLs = [
    'http://localhost:4100/vendor/css/food/css/food.min.css',
    'http://localhost:4100/vendor/css/megamenu.css'
];
let fontsURLs = [
    'https://cdn.materialdesignicons.com/4.9.95/css/materialdesignicons.min.css',
    'https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700&display=swap',
    'https://fonts.googleapis.com/css?family=Hind&display=swap',
    'https://fonts.googleapis.com/css?family=Khand&display=swap',
    'https://fonts.googleapis.com/css?family=Hind+Siliguri&display=swap',
    'https://fonts.googleapis.com/css?family=Mukta+Mahee&display=swap',
    'https://fonts.googleapis.com/css?family=Hind+Vadodara&display=swap'
];

let jsText = '';
let cssText = '';
let fontsText = '';

app.listen(4100, () => {
    console.log('====Started CDN on port 4100====');
    Promise.all(jsURLs.map(u=>fetch(u))).then(responses =>
        Promise.all(responses.map(res => res.text()))
    ).then(t => {
        jsText = (t || []).join('\n'); 
    });
    Promise.all(cssURLs.map(u=>fetch(u))).then(responses =>
        Promise.all(responses.map(res => res.text()))
    ).then(t => {
        cssText = (t || []).join('\n'); 
    });
    Promise.all(fontsURLs.map(u=>fetch(u))).then(responses =>
        Promise.all(responses.map(res => res.text()))
    ).then(t => {
        fontsText = (t || []).join('\n'); 
    });
});

app.get('/jsbundle', (req, res) => {
    res.type('.js')
    res.send(jsText);
});

app.get('/cssbundle', (req, res) => {
    res.type('.css')
    res.send(cssText);
});

app.get('/fontsbundle', (req, res) => {
    res.type('.css')
    res.send(fontsText);
});
