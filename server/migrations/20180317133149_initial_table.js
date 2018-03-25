exports.up = function(knex, Promise) {

  return knex.schema.createTable('push_events', function (t) {
    t.increments().primary()
    t.bigInteger('external_id').notNullable()
    t.string('username').notNullable()
    t.string('repo').notNullable()
    t.integer('count').notNullable()
    t.boolean('public').notNullable()
    t.timestamps(true, true)
  }).then(() => {
      
  return knex.schema.createTable('commits', function(t) {
    t.increments().primary()
    t.integer('push_event_id').unsigned().references('id').inTable('push_events').onDelete('CASCADE').index().notNullable()
    t.string('message').notNullable()
    t.string('url').notNullable()
    t.timestamps(true, true)
  })
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('commits').then(() => {
    return knex.schema.dropTable('push_events')
  })
};
