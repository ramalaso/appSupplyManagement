var express = require('express');
var router = express.Router();
const { Client } = require('pg');
var express = require('express');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const connectionString = process.env.DATABASE_URL;
const client = new Client({
  connectionString: connectionString,
  ssl: { rejectUnauthorized: false }
});

client.connect()

//Get all products ordered by id
router.get('/', function (req, res) {
    client.query("SELECT * FROM products ORDER BY product_id", (err, response) => {
      if (err) {
        console.log(err.stack)
      } else {
        res.send(response.rows)
      }
    })
  })
//post product
router.post('/', function(req, res, next) {
    client.query('INSERT INTO products(product_name ,product_quantity ,product_price , fk_supplier_id) VALUES($1, $2, $3, $4)', [req.body.name, req.body.quantity, req.body.price, req.body.supplier_id ], function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
      res.send(result.rows);
    });
  });
//get a product
router.get('/:id', function(req, res, next) {
    client.query('SELECT * FROM products WHERE product_id = $1', [req.params.id], function(err, result) {
      if (err) {
        return console.error('error running query', err);
      }
      res.send(result.rows);
    });
  });
// update product
router.put('/:id', function(req, res, next) {
    client.query('UPDATE products SET product_name = $2, product_quantity = $3, product_price = $4, fk_supplier_id = $5   WHERE product_id = $1', [req.params.id, req.body.name, req.body.quantity, req.body.price, req.body.supplier_id ], function(err, result) {
      if (err) {
        return console.error('error running query', err);
      }
      res.send(result.rows);
    });
  });
//delete one product
router.delete('/:id', function(req, res, next) {
    console.log("connected to database");
    client.query('DELETE FROM products WHERE products_id = $1',[req.params.id], function(err, result) {
      if (err) {
        return console.error('error running query', err);
      }
      res.send(result.rows);
    });
  });

module.exports = router;