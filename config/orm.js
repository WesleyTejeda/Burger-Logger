const connection = require("./connect.js");

let translateObjToSql = obj => {
    let keyValArr = [];

    for(var key in obj) 
        keyValArr.push(`${key}="${obj[key]}"`);
    return keyValArr.toString();
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
        let query = `INSERT INTO ${table}(${cols}) VALUES('${vals[0]}', ${vals[1]});`;
        connection.query(query, (err, result) => {
            if (err)
                throw err;
            cb(result);
        })
    },
    updateOne: (table, objColVals, condition, cb) =>{
        let setText = translateObjToSql(objColVals);
        let query = `UPDATE ${table} SET ${setText} WHERE ${condition};`
        connection.query(query,(err, result) => {
            if (err)
                throw err;
            cb(result);
        })
    }
}

module.exports = orm;