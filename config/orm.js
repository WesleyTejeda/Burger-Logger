const connection = require("./connect.js");

let questionMarkNum = (num) => {
    let numArr = [];
    for(let i=0; i < num; i++) {
        numArr.push("?");
    }
    // return 
}

const orm = {
    selectAll: (table, cb) =>{
        let query = `SELECT * FROM ${table};`;
        connection.query(query, (err, result) => {
            if (err)
                throw err;
            cb(result);
        })
    },
    insertOne: (table, cols, vals, cb) =>{
        let query = `INSERT INTO ${table}(${cols}) VALUES(${vals});`;
        connection.query(query, (err, result) => {
            if (err)
                throw err;
            cb(result);
        })
    },
    updateOne: (table, objColVals, condition, cb) =>{
        let query = `UPDATE ${table} SET ${objColVals} WHERE ${condition};`
        connection.query(query,(err, result) => {
            if (err)
                throw err;
            cb(result);
        })
    }
}

module.exports = orm;