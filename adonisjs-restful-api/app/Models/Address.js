'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Address extends Model {
    static table = 'public.address'
    static get primaryKey () {
        return 'id'
    }
    static get createdAtColumn() {
        return 'created_at'
    }
    static get updatedAtColumn() {
        return 'updated_at'
    }
}

module.exports = Address
