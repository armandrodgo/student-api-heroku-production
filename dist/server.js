"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _http = _interopRequireDefault(require("http"));

var _app = _interopRequireDefault(require("./app.js"));

//En su ejemplo server.js
//import https from 'https';
//import fs from 'fs';
//import { dirname } from 'path';
//import { fileURLToPath } from 'url';
//const __dirname = dirname(fileURLToPath(import.meta.url));

/*https.createServer({
    key: fs.readFileSync( `${__dirname}/config/server.key`),
    cert: fs.readFileSync( `${__dirname}/config/server.cert`)
}, app)
.listen(process.env.PORT);
*/

/* , _=> {
    console.log(`Example app listening on port ${process.env.PORT}! Go to https://localhost:8443/`) });
 */
_http["default"].createServer(_app["default"]).listen(process.env.PORT);