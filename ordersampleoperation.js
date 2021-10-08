// var Db = require('./dboperations');
// var Order = require('./order');
// var ClientDetails = require('./clientdetails');
// var Register = require('./register');
// var Calls = require('./calls');
// var updatecalls = require('./updatecalls');

// const dboperations = require('./dboperations');

// var express = require('express');
// var bodyParser = require('body-parser');
// var cors = require('cors');
// var app = express();
// var router = express.Router();
// const multer = require("multer");

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(cors());
// app.use('/api', router);

// const handleError = (err, res) => {
//     res
//       .status(500)
//       .contentType("text/plain")
//       .end("Oops! Something went wrong!");
//   };
// // create a middleware
// router.use((request, response, next) => {
//     console.log('middleware');
//     next();
// })
// var config = require('./dbconfig');
// const sql = require('mssql');

// // Order Table
// async function getOrders() {
//     try {
//         let con = await sql.connect(config);
//         let orders = await con.request().query("SELECT * from Orders");
//         return orders.recordsets;
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// async function getOrder(orderId) {
//     try {
//         let con = await sql.connect(config);
//         let orderbyId = await con.request()
//             .input('input_parameter', sql.Int, orderId)
//             .query("SELECT * from Orders where Id = @input_parameter");
//         return orderbyId.recordsets;

//     }
//     catch (error) {
//         console.log(error);
//     }
// }


// async function addOrder(orderList) {

//     try {
//         let con = await sql.connect(config);
//         let insertOrder = await con.request()
//             .input('Id', sql.Int, orderList.Id)
//             .input('Title', sql.NVarChar, orderList.Title)
//             .input('Quantity', sql.Int, orderList.Quantity)
//             .input('Message', sql.NVarChar, orderList.Message)
//             .input('City', sql.NVarChar, orderList.City)
//             .execute('InsertOrders');
//         return insertOrder.recordsets;
//     }
//     catch (err) {
//         console.log(err);
//     }

// }


// // OrderTableAPI
// router.route('/orders').get((request, response) => {
//     // console.log(result);
//     dboperations.getOrders().then(result => {
//         response.json(result[0]);
//     })
// })

// router.route('/orders/:id').get((request, response) => {

//     dboperations.getOrder(request.params.id).then(result => {
//         response.json(result[0]);
//     })
// })

// router.route('/orders').post((request, response) => {
//     let order = { ...request.body }
//     // console.log(order);
//     dboperations.addOrder(order).then(result => {
//         response.status(201).json(result);
//     })
// })