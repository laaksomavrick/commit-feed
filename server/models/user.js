// models/user.js

import sequelize from 'sequelize'
import db from '../database/db'
import project from './project'

const user = db.define('user', {
  name: sequelize.STRING,
  access_token: sequelize.STRING,
  email: sequelize.STRING,
  external_id: sequelize.INTEGER
}, {
  underscored: true
})

console.log("here")
console.log(project)

user.hasMany(project, { through: 'user_project_map' })

export default user
