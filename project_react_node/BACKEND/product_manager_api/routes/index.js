var express = require('express');
var router = express.Router();

//kết nối postgreSQL
const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'project_reactjs_nodejs',
  password: '123456',
  port: 5432,
})
// end kết nối

/* GET home page. */
router.get('/', function(req, res, next) {
  pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
  })

  res.render('index', { title: 'Express' });
});

//get data in postgresql
router.get('/getdata01', function (req, res, next) {
  pool.query('SELECT * FROM product_info', (err, res) => {
   if(err){
     console.log(err)
   }else{
     console.log(res.rows)
   }
    pool.end()
  })

  res.render('index', { title: 'Express' });
});

module.exports = router;