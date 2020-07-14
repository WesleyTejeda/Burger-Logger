const connection = require("./connect.js");

let translateObjToSql = obj => {
    let keyValArr = [];

    obj.forEach(key => {
        let val = obj.key;
        if (Object.hasOwnProperty.call(obj, key)) {
            if (typeof val === "string" && val.indexOf(" ") >= 0) {
                val = "'" + val + "'";
              }
              keyValArr.push(key + "=" + val);
        }
    })
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
        let query = `UPDATE ${table} SET ${translateObjToSql(objColVals)} WHERE ${condition};`
        connection.query(query,(err, result) => {
            if (err)
                throw err;
            cb(result);
        })
    }
}

module.exports = orm;