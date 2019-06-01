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
router.get('/', function(req, res, next) {});

//get data in postgresql
router.get('/getdata01', function (req, res, next) {

  /* Gửi dữ liệu qua cho react : cổng 3000 - k cần nữa vì trong package.json có khai báo proxy rồi */
  /* res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true); */
  //next();
/* end Gửi dữ liệu qua cho react : cổng 3000 */

  pool.query('SELECT * FROM product_info', (err, response) => {
   if(err){
     //console.log(err)
   }else{
     //console.log(res.rows)
     //đẩy dữ liệu ra giao diện
     res.send(response.rows);
   }
    //pool.end()
  })

  //res.render('index', { title: 'Express' });
});


//thêm mới  =  node js - chưa sử dụng với react
router.get('/add', function (req, res, next) { 
  res.render('add', { title: 'Express' });
});

//nhận dữ liệu
router.post('/add', function (req, res, next) {
  var product_name = req.body.product_name;
  var product_price = req.body.product_price;
  var image = req.body.image;
  //inset vao dữ liệu
  pool.query("INSERT INTO product_info (product_name,product_price,image) VALUES ($1,$2,$3)",[product_name,product_price,image],(err,response) => {
    if(err){
      res.send(err);
    }else{
      res.send('Thêm dữ liệu thành công!');
    }
  });
  //res.send(product_name + product_price + image);
});
module.exports = router;
