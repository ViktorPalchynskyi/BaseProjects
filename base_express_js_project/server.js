require('module-alias/register');

const { config } = require('@config');
const PORT = config.server.port;
const app = require('./app');

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
