require('dotenv').config();
const server = require ('./api/server.js');

const port = process.env.PORT || 7171;

console.log('This is working');

server.listen(port, () => {
console.log(`listening on port ${port}...`);
})