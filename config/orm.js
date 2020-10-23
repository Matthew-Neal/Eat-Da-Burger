// Import MySQL connection.
// O.R.M. where functions are for SQL database commands
const connection = require("./connection");

// function printQuestionMarks(num) {
//     var arr = [];

//     for (var i = 0; i < num; i++) {
//         arr.push("?");
//     }
//     return arr.toString();
// }

// function objToSql(ob) {
//     var arr = [];

//     for (var key in ob) {
//         arr.push(key + "=" + ob[key]);
//     }

//     return arr.toString();
// }

const orm = {
    selectAll: function (tableInput, cb) {
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // table = burgers, cols = columns we want to insert into, vals = array of values
    insertOne: function (tableInput, data, cb) {
        const queryString = "INSERT INTO " + tableInput + " SET ?;";
        connection.query(queryString, data, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // Values to update, condition
    updateOne: function (tableInput, data, update, cb) {
        const queryString = "UPDATE " + tableInput + " SET ? WHERE ?;";
        connection.query(queryString, [data, update], (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
};



// Export the orm object for the model (cat.js).
module.exports = orm;
