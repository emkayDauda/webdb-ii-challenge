const db = require('../data/db-config')

function get(id) {
    let query =  db('cars')

    return query
}

module.exports = {
    get
}