"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import '../.env'
const Server_1 = require("./server/Server");
Server_1.server.listen(process.env.PORT || 3333, () => {
    console.log(`App is running on port ${process.env.PORT || 3333}`);
});
