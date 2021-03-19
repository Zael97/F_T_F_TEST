const express = require('express');
const http = require('http');

class Server {
    constructor() {
        this.port = process.env.PORT || 8000;
        this.app = express();
        this.name = 'Anthony';
        this.httpServer = new http.Server(this.app);

        if (!Server._instance) {
            Server._instance = this;
        }
        return Server._instance;
    }
    start() {
        this.httpServer.listen(this.port, () => {
            `Server running on port ${this.port}. Press Ctrl+C to stop.`
        });
    }
}

module.exports = new Server();