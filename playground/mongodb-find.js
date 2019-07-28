const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) return console.log("Unable to connect to MongoDb Server");

    const db = client.db('TodoApp');

    // db.collection('Todos').find({ completed: true }).toArray().then(
    //     (res) => {
    //         console.log("Todos");
    //         console.log(JSON.stringify(res, undefined, 2));
    //     },
    //     err => console.log('Unable to fetch Todos', err)
    // )

    db.collection('Users').find({ name: 'John' }).toArray().then(
        (res) => {
            console.log("Users");
            console.log(JSON.stringify(res, undefined, 2));
        },
        err => console.log('Unable to fetch Users', err)
    )

    client.close();
})