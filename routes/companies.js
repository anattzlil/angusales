var express = require('express');
var router = express.Router();
var db = require('.././db.js');

router.get('/', (req, res)=>{
  db.query('select companies.company_id,companies.name,companies.address,companies.country, count(customer_id)cnt from companies left join customers on companies.company_id= customers.company_id group by companies.company_id,companies.name,companies.address,companies.country', function(err, rows, fields){
    if (!err) {
      res.send(rows);
     }
    else console.log('error');
  })
 });

 router.get('/names', (req, res)=> {
  db.query('select company_id, name from companies', function(err, rows, fields){
    if (!err) {
      res.send(rows);
     }
    else console.log('error');
  })
 })

router.post('/', (req, res)=>{
  var newCompany = req.body;
  console.log (newCompany);
  db.query('INSERT INTO companies SET ?', {name: newCompany.name, address: newCompany.address, country: newCompany.country}, function(err, rows, fields){
    if (!err) {res.send(rows)}
    else console.log('error');
  })
})

module.exports = router;