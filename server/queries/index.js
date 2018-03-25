// queries/index.js

import db from '../database/db'

export default class Query {

  constructor(table) {
    this.TABLE = table
  }

  get = async (select, order) => {
    const rows = await db.select().from(this.TABLE).orderBy('id', 'desc')
    return rows
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
    const record = await db.table(this.TABLE).where(conditions).first()
    return record !== undefined ? record : null
  }

  find_by_id = async (id) => {
    const record = await db.table(this.TABLE).where({ id }).first()
    return record !== undefined ? record : null
  }

  create = async (obj) => {
    const rows = await db.table(this.TABLE).insert(obj)
    const record = this.find(obj)
    return record !== undefined ? record : null
  }

  update = async (conditions, obj) => {
    const rows = await db.table(this.TABLE).where(conditions).update(obj)
    const record = this.find(conditions)
    return record !== undefined ? record : null
  }

}

