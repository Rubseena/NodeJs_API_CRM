
var Db = require('./dboperations');
var Order = require('./order');
var ClientDetails = require('./clientdetails');
var Register = require('./register');
var Calls = require('./calls');
var updatecalls = require('./updatecalls');

const dboperations = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();
const multer = require("multer");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

const handleError = (err, res) => {
    res
      .status(500)
      .contentType("text/plain")
      .end("Oops! Something went wrong!");
  };
// create a middleware
router.use((request, response, next) => {
    console.log('middleware');
    next();
})

//***********ClientDetailTableAPI********/

router.route('/clientdetails').get((request, response) => {
    // console.log(result);
    dboperations.getClientDetails().then(result => {
        response.json(result[0]);
    })
})

router.route('/clientdetails/:id').get((request, response) => {
    dboperations.getClientDetail(request.params.id).then(result => {
        response.json(result[0]);        
    })
})

router.route('/clientdetails').post((request, response) => {

    let detailslist = { ...request.body }
    // console.log(detailslist);
    dboperations.addClientDetails(detailslist).then(result => {
        response.status(201).json(result);
    })

})
//***********RegisterTableAPI********/
router.route('/register').post((request, response) => {
    let detailstoadd = { ...request.body }
    // console.log(detailstoadd);
    dboperations.addRegisterationDetails(detailstoadd).then(result => {
        response.status(201).json(result);

    })
})


//***********CallDetailsTableAPI********/
router.route('/mycalls').post((request, response) => {
    let calls = { ...request.body }
    // console.log(calls);
    dboperations.addCalls(calls).then(result => {
        response.status(201).json(result);
    })
})
router.route('/mycalls').get((request, response) => {
    dboperations.getAllCallDetails().then(result => {
        response.json(result[0]);
    })
})
router.route('/mycalls').get((request, response) => {
    dboperations.getClientCallDetailsByStatusId(request.params.id).then(result => {
        console.log("result : ", result)
        response.json(result[0]);        
    })
})

router.route('/updatecalls/:id').get((request, response) => {
    dboperations.getAllCallDetailsNameList(request.params.id).then(result => {
        // console.log(result);
        response.json(result[0]);
    })
})
router.route('/updatecalls').put((request, response) => {
    let calls = {...request.body}
    console.log('updatecalls:put:',calls);
    dboperations.updateCalls(calls).then(result=>  {
        console.log(result);
        response.status(201).json(result)
        
    });
});
router.route('/mycalls/:id').put((request, response) => {
    let calls = {...request.body}
    // console.log(calls);
    dboperations.findByIdAndUpdate(request.params.id, calls).then(result=>  {
        response.status(201).json(result)
    });
});
router.route('/reminder').get((request, response) => {
    dboperations.getReminderDetails().then(result => {
        response.json(result[0]);
    })
})

var port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is running at ' + port);
