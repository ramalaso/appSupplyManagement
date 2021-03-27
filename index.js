const express = require('express')
const path = require('path')
const app = express()
const suppliers = require('./routes/suppliers');
const products = require('./routes/products');


const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'public')))
app .set('views', path.join(__dirname, 'views'))
app .set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res)=>{
  res.render('pages/index');
})

app.get('/suppliers', (req, res)=>{
  res.render('pages/suppliers')
})

app.get('/inventory', (req, res)=>{
  res.render('pages/inventory')
})

app.use('/api/v1/suppliers', suppliers)
app.use('/api/v1/products', products)

app .listen(PORT, () => console.log(`Listening on ${ PORT }`))