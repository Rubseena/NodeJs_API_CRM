
var Db = require('./dboperations');
var Order = require('./order');
var ClientDetails = require('./clientdetails');
var Register = require('./register');
var Calls = require('./calls');

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
// OrderTableAPI
router.route('/orders').get((request, response) => {
    // console.log(result);
    dboperations.getOrders().then(result => {
        response.json(result[0]);
    })
})

router.route('/orders/:id').get((request, response) => {

    dboperations.getOrder(request.params.id).then(result => {
        response.json(result[0]);
    })
})

router.route('/orders').post((request, response) => {
    let order = { ...request.body }
    // console.log(order);
    dboperations.addOrder(order).then(result => {
        response.status(201).json(result);
    })
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
// router.route('/updatecalls').get((request, response) => {
//     dboperations.getAllCallDetailsNameList().then(result => {
//         console.log("updateCalls result",result);
//         response.json(result[0]);
//     })
// })
// router.route('/mycalls').get((request, response) => {
//     dboperations.getCallDetails().then(result => {
//         // console.log(result);
//         response.json(result[0]);
//     })
// })
router.route('/updatecalls/:id').get((request, response) => {
    dboperations.getAllCallDetailsNameList(request.params.id).then(result => {
        // console.log(result);
        response.json(result[0]);
    })
})
router.route('/updatecalls/:id').put((request, response) => {
    let calls = {...request.body}
    console.log(calls);
    dboperations.updateCalls(request.params.id, calls).then(result=>  {
        console.log(result);
        response.status(201).json(result)
        // .catch(err => {
        //     res.status(400).send("unable to save to database");
        //     });
    });
});
router.route('/mycalls/:id').put((request, response) => {
    let calls = {...request.body}
    // console.log(calls);
    dboperations.findByIdAndUpdate(request.params.id, calls).then(result=>  {
        response.status(201).json(result)
        // .catch(err => {
        //     res.status(400).send("unable to save to database");
        //     });
    });
});


// router.route('/mycalls/:id').get((request, response) => {
//     dboperations.getCallDetailsById(request.params.id).then(result => {
//         response.json(result[0]);        
//     })
// })
// router.put('/mycalls/:id', function (request, response) {
//     dboperations.findByIdAndUpdate(request.params.id, request.body, {new: true}, function (err, result) {
//         if (err) return res.status(500).send("There was a problem updating the user.");
//         response.status(201).json(result);
//     });
// });
// DELETES A USER FROM THE DATABASE
// router.delete('/:id', function (req, res) {
//     User.findByIdAndRemove(req.params.id, function (err, user) {
//         if (err) return res.status(500).send("There was a problem deleting the user.");
//         res.status(200).send("User: "+ user.name +" was deleted.");
//     });
// });
var port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is running at ' + port);
