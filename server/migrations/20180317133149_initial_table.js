exports.up = function(knex, Promise) {

  return knex.schema.createTable('users', function (t) {
    t.increments().primary()
    t.string('name').notNullable()
    t.string('access_token').notNullable()
    t.string('email').notNullable()
    t.integer('external_id').notNullable()
    t.timestamps(true, true)
  }).then(() => {
      
    return knex.schema.createTable('boards', function(t) {
        t.increments().primary()
        t.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE').index().notNullable()
        t.string('name').notNullable()
        t.timestamps(true, true)
    })
      
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('boards').then(() => {
    return knex.schema.dropTable('users')
  })
};
