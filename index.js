const server = require('./server.js');

const port = process.env.PORT;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
