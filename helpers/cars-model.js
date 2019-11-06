const db = require('../data/db-config')

function get(id) {
    let query =  db('cars')
    if (id) {
        query.where('cars.id', id).first()
    }
    return query
}

function add(car) {
    return db('cars')
    .insert(car)
    .then(([id]) => this.get(id) )
}

module.exports = {
    get,
    add,
}