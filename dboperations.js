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
        // console.log(clients);
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


async function getAllCallDetails() {
    try {
        let con = await sql.connect(config);
        let clients = await con.request().
        query("SELECT Calls.UserId as Id,Calls.EngagementStatus,Calls.NextCallDateTime,Register.image, Register.firstName + ' ' + Register.lastName as name ,Register.city FROM Calls INNER JOIN  Register ON Calls.UserId = Register.Id");
    //    console.log(clients);
        return clients.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getAllCallDetailsNameList(detailId) {
    try {
        let con = await sql.connect(config);
        let clients = await con.request()
        .input('input_parameter', sql.Int, detailId)
        .query(" SELECT Calls.Id,Calls.UserId,Register.firstName + ' ' + Register.lastName  as name ,Calls.Description,Calls.EngagementStatus,Calls.NextCallDateTime  FROM Calls INNER JOIN Register ON Calls.UserId = Register.Id where Calls.UserId = @input_parameter");
    //    console.log(clients);
        return clients.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getCallDetails() {
    try {
        let con = await sql.connect(config);
        let clients = await con.request().
        query("SELECT Calls.UserId as Id, Register.firstName + ' ' + Register.lastName as name FROM Calls INNER JOIN  Register ON Calls.UserId = Register.Id");
        // console.log(clients);
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
            // .input('ClientDetails', sql.NVarChar, calldetails.ClientDetails)
            .input('EngagementStatus', sql.NVarChar, calldetails.EngagementStatus)
            .input('Description', sql.NVarChar, calldetails.Description)
            .input('NextCallDateTime', sql.NVarChar, calldetails.NextCallDateTime)         
            .execute('InsertCallDetails');

        return insertCallDetails.recordsets;
    }
    catch (err) {
        console.log(err);
    }

}
// async function updateCalls(Id,calldetails){
//     try{
//         let con = await sql.connect(config);
//         let updateCallDetails = await con.request()
//             .input('UserId', sql.Int, Id)
//             .input('EngagementStatus', sql.Int, calldetails.EngagementStatus)
//             .input('Description', sql.Int, calldetails.Description)
//             .input('NextCallDateTime', sql.Int, calldetails.NextCallDateTime)

//             // .input('input_parameter', sql.Int, calldetails)
//             // .input('input_parameter', sql.Int, calldetails)

//             .query("UPDATE Calls SET UserId =@UserId, EngagementStatus =@EngagementStatus,Description =@Description, NextCallDateTime = @NextCallDateTime where UserId=@UserId");
//             console.log("updateCallDetails : ",updateCallDetails);
//             console.log("updateCallDetails.recordsets : ",updateCallDetails.recordsets);
//             return updateCallDetails.recordsets;

//     }
//     catch (err) {
//         console.log(err);
//     }
// }
async function updateCalls(calldetails) {
     try {
        let pool = await sql.connect(config);
        let updateCallDetails = await pool.request()
            // .input('Id', sql.Int, Id)
            .input('Id', sql.Int,calldetails.id)
            .input('UserId', sql.NVarChar, calldetails.UserId)
            .input('EngagementStatus', sql.NVarChar, calldetails.EngagementStatus)
            .input('Description', sql.NVarChar, calldetails.Description)
            .input('NextCallDateTime', sql.NVarChar, calldetails.NextCallDateTime)         
            .execute('UpdateCalls');            
            console.log("updateCallDetails : ",updateCallDetails);
            console.log("updateCallDetails.recordsets : ",updateCallDetails.recordsets);
        return updateCallDetails.recordsets;
    }
    catch (err) {
        console.log(err);
    }

}
async function getReminderDetails() {
    try {
        let con = await sql.connect(config);
        let clients = await con.request().
        query("SELECT Register.firstName, Register.lastName,Register.contactNumber, Register.mobileNumber, Register.image, Register.emailId, Calls.UserId, Calls.EngagementStatus, Calls.Description, Calls.NextCallDateTime FROM Calls INNER JOIN Register ON Calls.UserId = Register.Id");
    //    console.log(clients);
        return clients.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
async function getClientCallDetailsByStatusId(statusId) {
    try {
        let con = await sql.connect(config);
        let clients = await con.request()
        .input('input_parameter', sql.Int, statusId)
        query("SELECT Calls.Id, Calls.UserId,Calls.EngagementStatus,Register.firstName, Register.lastName, Register.image, Calls.NextCallDateTime FROM Calls INNER JOIN Register ON Calls.EngagementStatus = @input_parameter and Calls.UserId = Register.Id");
       console.log(clients);
        return clients.recordsets;
    }
    catch (error) {
        console.log(error);
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
    getAllCallDetails:getAllCallDetails,
    getAllCallDetailsNameList:getAllCallDetailsNameList,
    getReminderDetails:getReminderDetails,
    getClientCallDetailsByStatusId:getClientCallDetailsByStatusId,
}