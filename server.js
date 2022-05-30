// DEPENDENCIES
const express = require('express');
const app = express();
const res = require('express/lib/response');
const mongoose = require('mongoose');
const /*schema*/ = require('./models//*schemaName*/');
const morgan = require('morgan');
require('dotenv').config();
const methodOverride = require('method-override');
const bcrypt = require('bcrypt');
const /*controller*/ = (require('./controllers//*controllerName*/'));


// database connection,
mongoose.connect(process.env./*DATABASE_URL*/, {
useNewUrlParser: true,
useUnifiedTopology: true
});