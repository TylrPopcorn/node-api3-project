// require your server and launch it

/*
    npm install
*/


const server = require("./api/server.js")

const port = 8000;

server.listen(port, () => {
    console.log("Server running on: ", port)
})