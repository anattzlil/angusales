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

router.get('/:id', (req, res)=>{
  console.log(req.params.id);
  db.query('SELECT * from customers WHERE ?', {customer_id: req.params.id}, function(err, rows, fields){
    if (!err) {
      res.send(rows);
    } else console.log('error');
  })
})

router.post('/',  (req, res)=>{
  console.log(req.body);
  var newCustomer = req.body;
console.log(newCustomer);
  db.query('INSERT INTO customers SET ?', {firstName: newCustomer.firstName, lastName:newCustomer.lastName, company_id:newCustomer.company_id, Email:newCustomer.email, phone:newCustomer.phone}, function(err, rows, fields){
    if (!err){
      console.log(rows);
/*       res.status(200).send({});
 */      res.send(rows);
    }else {console.log('error')};
  })
});

router.delete('/delete/:id', (req, res)=>{
  console.log(req)
  console.log(req.params.id);
  db.query('DELETE FROM customers WHERE ?',{customer_id: req.params.id}, function(err, rows, fields){
    if (!err) {
      console.log('deleted');
      res.send(rows)
    }else {console.log('error')}
  })
});

module.exports = router;