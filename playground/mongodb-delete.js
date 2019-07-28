const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) return console.log("Unable to connect to MongoDb Server");

    const db = client.db('TodoApp');

    //deleteMany
    // db.collection('Todos').deleteMany({ text: "This is a test" }).then(
    //     result => console.log(result)
    // );

    //deleteOne
    // db.collection('Todos').deleteOne({ text: "Something to do 3" }).then(result => console.log(result));

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({ completed: true }).then(res => console.log(res));

    // client.close();
})