exports.up = function(knex, Promise) {

  return knex.schema.createTable('columns', function(t) {

      t.increments().primary
      t.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE').index().notNullable()
      t.integer('board_id').unsigned().references('id').inTable('boards').onDelete('CASCADE').index().notNullable()
      t.string('name').notNullable()
      t.timestamps(true, true)

  })
  .then(() => {

    return knex.schema.createTable('tasks', function (t) {
      t.increments().primary
      t.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE').index().notNullable()
      t.integer('board_id').unsigned().references('id').inTable('boards').onDelete('CASCADE').index().notNullable()
      t.integer('column_id').unsigned().references('id').inTable('columns').onDelete('CASCADE').index().notNullable()
      t.string('name').notNullable()
      t.text('description')
      t.timestamps(true, true)
    })

  })
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTable('columns').then(() => {
  return knex.schema.dropTable('tasks')
 })
};
