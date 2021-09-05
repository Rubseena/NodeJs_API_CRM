
const config = {
    user :'rubseena',
    password :'sa123',
    server:'127.0.0.1',
    database:'EmailDB',
    options:{
        trustedconnection: true,
        enableArithAbort : true, 
        instancename :'SQLEXPRESS',
        trustServerCertificate: true,
    },
    port : 53739
}

module.exports = config; 
