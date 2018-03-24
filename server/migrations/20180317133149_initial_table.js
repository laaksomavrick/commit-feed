exports.up = function(knex, Promise) {

  return knex.schema.createTable('users', function (t) {
    t.increments().primary()
    t.string('name').notNullable()
    t.string('access_token').notNullable()
    t.string('email').notNullable()
    t.integer('external_id').notNullable()
    t.timestamps(true, true)
  }).then(() => {
      
    return knex.schema.createTable('repos', function(t) {
        t.increments().primary()
        t.integer('external_id').notNullable()
        t.string('name').notNullable()
        t.text('description')
        t.string('url').notNullable()
        t.boolean('private').notNullable()
        t.timestamps(true, true)
    }).then(() => {
      
      return knex.schema.createTable('user_repos', function(t) {

        t.increments().primary()
        t.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE').index().notNullable()
        t.integer('repo_id').unsigned().references('id').inTable('repos').onDelete('CASCADE').index().notNullable()
        t.timestamps(true, true)

      })

    })

  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_repos').then(() => {
    return knex.schema.dropTable('users').then(() => {
      return knex.schema.dropTable('repos')
    })
  })
};
