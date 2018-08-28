'use strict'

const {Pool, Client} = require('pg')

const connStr = 'postgresl://postgres:psql@localhost:5432/node_tut'

const pool = Pool ({
    connectionString: connStr,
    // user: 'postgres',
    // host: 'localhost',
    // database: 'node_tut',
    // password: 'psql',
    // port: 5432,
})

pool.query('SELECT * from users;', (err, result) => {
    if (err) {
        return console.error('Error executing query', err)
    }

    console.log(result)
    process.exit(0)    
})
