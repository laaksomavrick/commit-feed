// queries/index.js

import db from '../database/db'

export default class Query {

  constructor(table) {
    this.TABLE = table
  }

  get = async (select, order, limit) => {
    //TODO: make this generic for order; limit; etc
    const rows = await db.select().from(this.TABLE).orderBy('external_id', 'desc').limit(2)
    return rows
  }

  get_where_in = async (fk, ids) => {
    const rows = await db.select().from(this.TABLE).whereIn(fk, ids)
    return rows
  }

  create_or_update = async (conditions, obj) => {
    const exists = await this.find(conditions)
    console.log(exists)
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

