var config = require('./dbconfig');
const sql = require('mssql');

// Order Table
async function getOrders() {
    try {
        let con = await sql.connect(config);
        let orders = await con.request().query("SELECT * from Orders");
        return orders.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getOrder(orderId) {
    try {
        let con = await sql.connect(config);
        let orderbyId = await con.request()
            .input('input_parameter', sql.Int, orderId)
            .query("SELECT * from Orders where Id = @input_parameter");
        return orderbyId.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}


async function addOrder(orderList) {

    try {
        let con = await sql.connect(config);
        let insertOrder = await con.request()
            .input('Id', sql.Int, orderList.Id)
            .input('Title', sql.NVarChar, orderList.Title)
            .input('Quantity', sql.Int, orderList.Quantity)
            .input('Message', sql.NVarChar, orderList.Message)
            .input('City', sql.NVarChar, orderList.City)
            .execute('InsertOrders');
        return insertOrder.recordsets;
    }
    catch (err) {
        console.log(err);
    }

}

// Client Details Table
async function getClientDetails() {
    try {
        let con = await sql.connect(config);
        let clients = await con.request().query("SELECT * from Register");
        console.log(clients);
        return clients.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getClientDetail(detailId) {
    try {
        let con = await sql.connect(config);
        let clients = await con.request()
            .input('input_parameter', sql.Int, detailId)
            .query("SELECT * from Register where Id = @input_parameter");
        return clients.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}
// async function addClientDetails(clientdetails) {

//     try {
//         let pool = await sql.connect(config);
//         let insertClientDetails = await pool.request()
//             // .input('Id', sql.Int, clientdetails.Id)
//             .input('ClientName', sql.NVarChar, clientdetails.ClientName)
//             .input('ContactPerson', sql.NVarChar, clientdetails.ContactPerson)
//             .input('EmailId', sql.NVarChar, clientdetails.EmailId)
//             .input('MobileNumber', sql.NVarChar, clientdetails.MobileNumber)
//             .input('AddressLine1', sql.NVarChar, clientdetails.AddressLine1)
//             .input('AddressLine2', sql.NVarChar, clientdetails.AddressLine2)
//             .input('AddressLine3', sql.NVarChar, clientdetails.AddressLine3)
//             .input('City', sql.NVarChar, clientdetails.City)
//             .input('State', sql.NVarChar, clientdetails.State)
//             .input('Country', sql.NVarChar, clientdetails.Country)
//             .execute('InsertClientDetails');
//         return insertClientDetails.recordsets;
//     }
//     catch (err) {
//         console.log(err);
//     }

// }

async function addRegisterationDetails(registerdetails) {

    try {
        let pool = await sql.connect(config);
        let insertRegisterDetails = await pool.request()
            // .input('Id', sql.Int, clientdetails.Id)
            .input('firstName', sql.NVarChar, registerdetails.firstName)
            .input('lastName', sql.NVarChar, registerdetails.lastName)
            .input('companyName', sql.NVarChar, registerdetails.companyName)
            .input('address', sql.NVarChar, registerdetails.address)
            .input('address2', sql.NVarChar, registerdetails.address2)
            .input('city', sql.NVarChar, registerdetails.city)
            .input('province', sql.NVarChar, registerdetails.province)
            .input('country', sql.NVarChar, registerdetails.country)
            .input('postalCode', sql.NVarChar, registerdetails.postalCode)
            .input('emailId', sql.NVarChar, registerdetails.emailId)
            .input('contactNumber', sql.NVarChar, registerdetails.contactNumber)
            .input('mobileNumber', sql.NVarChar, registerdetails.mobileNumber)
            .input('image', sql.NVarChar, registerdetails.image)
            .execute('InsertRegistrationDetails');
        return insertRegisterDetails.recordsets;
    }
    catch (err) {
        console.log(err);
    }

}
async function getCallDetails() {
    try {
        let con = await sql.connect(config);
        let clients = await con.request().query("SELECT * from Calls");
        console.log(clients);
        return clients.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getCallDetailsById(detailId) {
    try {
        let con = await sql.connect(config);
        let clients = await con.request()
            .input('input_parameter', sql.Int, detailId)
            .query("SELECT * from Calls where Id = @input_parameter");
        return clients.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}
async function addCalls(calldetails) {

    try {
        let pool = await sql.connect(config);
        let insertCallDetails = await pool.request()
            // .input('Id', sql.Int, clientdetails.Id)
            .input('UserId', sql.NVarChar, calldetails.UserId)
            .input('ClientDetails', sql.NVarChar, calldetails.ClientDetails)
            .input('EngagementStatus', sql.NVarChar, calldetails.EngagementStatus)
            .input('Description', sql.NVarChar, calldetails.Description)
            .input('NextCallDate', sql.NVarChar, calldetails.NextCallDate)         
            .execute('InsertCallDetails');
        return insertCallDetails.recordsets;
    }
    catch (err) {
        console.log(err);
    }

}
async function updateCalls(Id,calldetails) {

    try {
        let pool = await sql.connect(config);
        let updateCallDetails = await pool.request()
            .input('Id', sql.Int, Id)
            .input('UserId', sql.NVarChar, calldetails.UserId)
            .input('ClientDetails', sql.NVarChar, calldetails.ClientDetails)
            .input('EngagementStatus', sql.NVarChar, calldetails.EngagementStatus)
            .input('Description', sql.NVarChar, calldetails.Description)
            .input('NextCallDate', sql.NVarChar, calldetails.NextCallDate)         
            .execute('UpdateCalls');
        return updateCallDetails.recordsets;
    }
    catch (err) {
        console.log(err);
    }

}


module.exports = {
    getOrders: getOrders,
    getOrder : getOrder,
    addOrder : addOrder,
    getClientDetails:getClientDetails,
    getClientDetail:getClientDetail,
    // addClientDetails:addClientDetails,
    addRegisterationDetails:addRegisterationDetails,
    addCalls:addCalls,
    getCallDetails:getCallDetails,
    getCallDetailsById:getCallDetailsById,
    updateCalls:updateCalls,
}