'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Job extends Model {
    static table = 'public.job'
    static get createdAtColumn() {
        return 'created_at'
    }
    static get updatedAtColumn() {
        return 'updated_at'
    }

    static scopeWithAddress(query) {
        return query.with('address')
    }

    static get primaryKey () {
        return 'id'
    }
    address () {
        return this.belongsTo('App/Models/Address', 'address_id', 'id')
    }
}

module.exports = Job
