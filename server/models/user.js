'use strict'

import sequelize from 'sequelize'
import db from '../database/db'

const user = db.define('user', {
  name: sequelize.STRING,
  access_token: sequelize.STRING,
  email: sequelize.STRING,
  external_id: sequelize.INTEGER,
  createdAt: { type: sequelize.DATE, field: 'created_at'},
  updatedAt: { type: sequelize.DATE, field: 'updated_at'}
})

export default user
