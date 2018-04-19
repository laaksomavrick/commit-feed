exports.up = function(knex, Promise) {
  return knex.schema.createTable('tasks', function (t) {
    t.increments().primary
    t.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE').index().notNullable()
    t.integer('board_id').unsigned().references('id').inTable('boards').onDelete('CASCADE').index().notNullable()
    t.string('name').notNullable()
    t.text('description')
    t.dateTime('due_date')
    t.boolean('complete')
    t.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTable('tasks') 
};
