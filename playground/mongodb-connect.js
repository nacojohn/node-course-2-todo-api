const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) return console.log("Unable to connect to MongoDb Server");

    const db = client.db('TodoApp');

    db.collection('Todos').insertOne({
        text: 'Something to do 3',
        completed: true
    }, (err, result) => {
        if (err) return console.log("Unable to insert todo ", err);

        console.log(JSON.stringify(result))
        console.log(JSON.stringify(result.ops))
    });

    // db.collection('Users').insertOne({
    //     name: 'John Nnanna',
    //     age: 26,
    //     location: 'Aba'
    // }, (err, result) => {
    //     if (err) return console.log("Unable to add user ", err);

    //     console.log(JSON.stringify(result));
    // })

    client.close();
})