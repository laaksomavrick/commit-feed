// queries/index.js

import db from '../database/db'

export default class Query {

  constructor(table) {
    this.TABLE = table
  }

  create_or_update = async (conditions, obj) => {
    const exists = await this.find(conditions)
    if (exists) {
      return this.update(conditions, obj)
    } else {
      return this.create(obj)
    }
  }

  find = async (conditions) => {
    const record = await db.table(this.TABLE).where(conditions).first('id')
    return record !== undefined ? record : null
  }

  find_by_id = async (id) => {
    const record = await db.table(this.TABLE).where({ id }).first('id')
    return record !== undefined ? record : null
  }

  create = async (obj) => {
    const record = await db.table(this.TABLE).insert(obj)
    return record !== undefined ? record : null
  }

  update = async (conditions, obj) => {
    const record = await db.table(this.TABLE).where(conditions).update(obj)
    return record !== undefined ? record : null
  }

}

