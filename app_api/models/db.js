const mongoose = require('mongoose');
const readLine = require('readline');
require('./locations');
require('./users');

let dbUri = "mongodb://localhost/Loc8r";
if (process.env.NODE_ENV === 'production') {
    dbUri = process.env.MLAB_URI;
}
mongoose.connect(dbUri, {useNewUrlParser: true});

if (process.platform === 'win32') {
    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on('SIGINT', () => {
        process.emit('SIGINT');
    })
};

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbUri}`);
});

mongoose.connection.on('error', err => {
    console.log(`Mongoose connection error `, err);
});

mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose disconnected`);
});

const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close(() => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};

//for nodemon restart
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});

//for app termination
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    })
});

//Heroku app termination
process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app shutdown', () => {
        process.exit(0);
    });
});


