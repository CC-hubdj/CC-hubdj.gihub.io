const MongoClient = require('mongodb').MongoClient;
// var ObjectId = require('mongodb').ObjectId
const url = 'mongodb://localhost:27017'; //连接数据库的默认地址
const dbName = '1909'; //数据库

// 连接
const connect = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, {
            useUnifiedTopology: true
        }, function (err, client) { //地狱回调函数
            err ? reject(err) : resolve(client);
            console.log("Connected successfully to server");
        });
    })
}

// 增
const insert = (col, query) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.insertMany(query, function (err, result) {
            err ? reject(err) : resolve(result);
        });
        client.close();
    })
}

// 删
const remove = (col, query) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.deleteOne(query, function (err, result) {
            err ? reject(err) : resolve(result);
        });
        client.close();
    })
}
// 改
const updata = (col, query, gx) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        // const whereStr = { _id: ObjectId() };  // 查询条件
        const updateStr = {
            $set: gx
        };
        collection.updateOne(query, updateStr, function (err, result) {
            err ? reject(err) : resolve(result);
        });
        client.close();
    })
}

// 查
const find = (col, query) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.find(query ? query : {}).toArray(function (err, docs) {
            err ? reject(err) : resolve(docs);
        });
        client.close();
    })
}

module.exports = {
    insert,
    remove,
    updata,
    find
}