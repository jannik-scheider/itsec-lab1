const mysql = require('mysql');


const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    database: 'ponyfarm',
    multipleStatements: true
});

/**
 * Connect to the database
 */
function connect() {
    connection.connect(error => {
        if (error) {
            throw error;
        }
    
        console.log('Successfully connected to DB');
    });
}



module.exports = {
    connect,
    connection
};
