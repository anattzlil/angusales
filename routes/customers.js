var express = require('express');
var router = express.Router();
var db = require('.././db.js');


/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.send('Express RESTful API');
});
 */

router.get('/', (req, res)=>{
   db.query('SELECT * from customers inner join companies on customers.company_id = companies.company_id', function(err, rows, fields){
     if (!err) {
       res.send(rows);
       console.log(rows);
      }
     else console.log('error');
   })
  });

router.post('/',  (req, res)=>{
  console.log(req.body);
  var newCustomer = req.body;
console.log("a",newCustomer);
  db.query('select MAX(customer_id) as max_id FROM customers', function(err, rows, fields){
    if (!err){
      console.log(rows);
      newCustomer.customer_id = rows.max_id+1;
      console.log(newCustomer);
      res.send(newCustomer);

    }else {console.log('error')};
  })
});


module.exports = router;