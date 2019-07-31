const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) return console.log("Unable to connect to MongoDb Server");

    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5d3dc3d0eee135263cb3f611')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: true
    // }).then(result => console.log(result))

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5d3dc3767cf50d1c90a022f9')
    }, {
        $set: {
            location: 'Umuahia'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: true
    }).then(result => console.log(result))

    // client.close();
})