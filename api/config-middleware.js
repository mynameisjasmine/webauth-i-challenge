const express = require('express');
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors');
const session = require('express-session')
const KnexSessionStorage = require('connect-session-knex')(session);

const dbConnection = require('../database/dbConfig.js')

const sessionConfig = {
secret: process.env.SESSION_SECRET || 'dev secret',
name: 'stuff',
cookie: {
maxAge: 1000 * 60 * 60,
secure: process.env.NODE_ENV === 'development' ? false : true,
httpOnly: true
},
resave: true,
saveUninitialized: true,
store: new KnexSessionStorage({
knex: dbConnection,
tablename: 'knexsessions',
sidfieldname: 'sessionid',
createtable: true,
clearInterval: 1000 * 60 * 30 // delete expired sesssions every 10 mins.
 })
};


module.exports = server => {
 server.use(helmet());
 server.use(express.json());
 server.use(morgan('dev'));
 server.use(cors());
 server.use(session(sessionConfig));
}