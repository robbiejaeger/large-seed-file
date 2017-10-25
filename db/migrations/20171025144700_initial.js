
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('waves', function(table) {
      table.increments('id').primary();
      table.decimal('latitude');
      table.decimal('longitude');

      table.timestamps(true, true);
    })
  ])
};


exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('waves')
  ]);
};