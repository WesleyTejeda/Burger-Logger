const connection = require("./connect.js");

let translateObjToSql = obj => {
    let keyValArr = [];
    console.log(obj);

    for(var key in obj) {
        var val = obj[key];
        console.log(val);
        keyValArr.push(`${key}="${val}"`);
    }
    console.log(keyValArr);
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
        console.log(objColVals + " is the old object");
        let setText = translateObjToSql(objColVals);
        console.log(setText + " is the new array");
        let query = `UPDATE ${table} SET ${setText} WHERE ${condition};`
        connection.query(query,(err, result) => {
            if (err)
                throw err;
            cb(result);
        })
    }
}

module.exports = orm;