exports.up = function(knex, Promise) {

  return knex.schema.createTable('events', function (t) {
    t.increments().primary()
    t.integer('external_id').notNullable()
    t.string('username').notNullable()
    t.integer('count').notNullable()
    t.boolean('public').notNullable()
    t.timestamps(true, true)
  }).then(() => {
      
  return knex.schema.createTable('commits', function(t) {
    t.increments().primary()
    t.integer('event_id').unsigned().references('id').inTable('events').onDelete('CASCADE').index().notNullable()
    t.string('message').notNullable()
    t.timestamps(true, true)
  })
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('commits').then(() => {
    return knex.schema.dropTable('events')
  })
};
