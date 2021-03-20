const express = require('express')
const path = require('path')
const app = express()
const suppliers = require('./routes/suppliers');
const actions = require('./helpers/actions')


const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'public')))
app .set('views', path.join(__dirname, 'views'))
app .set('view engine', 'ejs')

app.get('/', (req, res)=>{
  // res.render('pages/index', {suppliers: actions.getSuppliers()});
  res.render('pages/index');
})

app.use('/api/v1/suppliers', suppliers)

app .listen(PORT, () => console.log(`Listening on ${ PORT }`))