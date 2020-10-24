// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm");

const burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", cb);
    },
    // The variables cols and vals are arrays.
    insertOne: function (data, cb) {
        orm.insertOne("burgers", data, cb);
    },
    updateOne: function (data, update, cb) {
        orm.updateOne("burgers", data, update, cb);
    },


    delete: function (condition, cb) {
        orm.delete("burgers", condition, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
