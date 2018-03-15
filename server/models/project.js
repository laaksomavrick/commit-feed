// models/project.js

import sequelize from 'sequelize'
import db from '../database/db'
import user from './user'

const project = db.define('project', {
  name: sequelize.STRING,
  description: sequelize.STRING,
}, {
  underscored: true
})

//console.log("here")
//console.log(user)
//project.hasMany(user, { through: 'user_project_map' })
//github.com/sequelize/sequelize/issues/4578

export default project
