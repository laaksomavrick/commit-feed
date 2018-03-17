exports.up = function(knex, Promise) {

  return knex.schema.createTable('users', function (t) {
    t.increments().primary()
    t.string('name').notNullable()
    t.string('access_token').notNullable()
    t.string('email').notNullable()
    t.integer('external_id').notNullable()
    t.timestamps(true, true)
  }).then(() => {
      
    return knex.schema.createTable('projects', function(t) {
        t.increments().primary()
        t.string('name').notNullable()
        t.text('description')
        t.timestamps(true, true)
    }).then(() => {
      
      return knex.schema.createTable('user_projects', function(t) {

        t.increments().primary()
        t.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE').index().notNullable()
        t.integer('project_id').unsigned().references('id').inTable('projects').onDelete('CASCADE').index().notNullable()
        t.timestamps(true, true)

      })

    })

  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_projects').then(() => {
    return knex.schema.dropTable('users').then(() => {
      return knex.schema.dropTable('projects')
    })
  })
};
