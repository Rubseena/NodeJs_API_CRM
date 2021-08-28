
var Db  = require('./dboperations');
var Order = require('./order');
var ClientDetails = require('./clientdetails');
const dboperations = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

// create a middleware
router.use((request,response,next)=>{
   console.log('middleware');
   next();
})
// OrderTableAPI
router.route('/orders').get((request,response)=>{
// console.log(result);
    dboperations.getOrders().then(result => {
       response.json(result[0]);
    })

})

router.route('/orders/:id').get((request,response)=>{

    dboperations.getOrder(request.params.id).then(result => {
       response.json(result[0]);
    })

})

router.route('/orders').post((request,response)=>{

    let order = {...request.body}
    console.log(order);
    dboperations.addOrder(order).then(result => {
       response.status(201).json(result);
    })

})
//***********ClientDetailTableAPI********/

router.route('/clientdetails').get((request,response)=>{
    // console.log(result);
        dboperations.getClientDetails().then(result => {
           response.json(result[0]);
        })
    
    })
    
    router.route('/clientdetails/:id').get((request,response)=>{
    
        dboperations.getClientDetail(request.params.id).then(result => {
           response.json(result[0]);
        })
    
    })
    
    router.route('/clientdetails').post((request,response)=>{
    
        let detailslist = {...request.body}
        console.log(detailslist);
        dboperations.addClientDetails(detailslist).then(result => {
           response.status(201).json(result);
        })
    
    })


var port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is running at ' + port);

// dboperations.getOrders().then(result => {
//     console.log(result);
// })