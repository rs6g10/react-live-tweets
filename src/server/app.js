const express = require('express'),
    app = express(),
    port = process.env.PORT || 8085,
    path = require('path'),
    environment = process.env.NODE_ENV,
    twitter = require('twitter'),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    twitterConfig = require('./secret/twitter'),
    viewPath = path.join(`${__dirname}/../server/views/app.html`),
    tweets = new twitter(twitterConfig.config);

app.use(express.static(path.join(`${__dirname}/../../public/assets`)));
app.get('/', (req, res) => res.sendFile(viewPath));
http.listen(port, () => {
    console.log('listening on port ' + port);
});

io.on('connection', (socket) => {
    console.log('User connected. Socket id %s', socket.id);

    socket.on('disconnect', () => {
        console.log('User disconnected. %s. Socket id %s', socket.id);
    });
});

tweets.stream('statuses/filter', {track: 'react'}, (stream) => {
    stream.on('data', (data) => {
        io.sockets.emit('tweet', data);
    });
});




