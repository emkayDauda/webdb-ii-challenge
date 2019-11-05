
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: '1234BV', make: 'Honda', model: 'V3', mileage: 3.4 },
        { VIN: '1234BV', make: 'Honda', model: 'V3', mileage: 3.4 },
        { VIN: '1234BV', make: 'Honda', model: 'V3', mileage: 3.4 }
      ]);
    });
};
