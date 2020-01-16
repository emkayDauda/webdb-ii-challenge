
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
      table.increments('id');

      table.text('VIN').notNullable();

      table.text('make').notNullable();

      table.text('model').notNullable();

      table.decimal('mileage').notNullable();

      table.text('transmission', 6);

      table.text('status');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
