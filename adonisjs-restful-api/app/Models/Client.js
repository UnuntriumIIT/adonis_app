'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Client extends Model {
    static table = 'public.client'

    static get primaryKey () {
        return 'id'
    }
    static get createdAtColumn() {
        return 'created_at'
    }
    static get updatedAtColumn() {
        return 'updated_at'
    }
    static get incrementing () {
        return false
    }

    spouse() {
        return this.hasOne('App/Models/Client', 'id', 'spouse_id')
    }
    communications() {
        return this.hasMany('App/Models/Communication', 'id', 'client_id')
    }
    jobs() {
        return this.hasMany('App/Models/Job', 'id', 'client_id')
    }
    children() {
        return this.hasMany('App/Models/Child', 'id', 'client_id')
    }
    passport() {
        return this.belongsTo('App/Models/DocumentPassport', 'passport_id', 'id')
    }
    regAddress() {
        return this.belongsTo('App/Models/Address', 'reg_address_id', 'id')
    }
    livingAddress() {
        return this.belongsTo('App/Models/Address', 'living_address_id', 'id')
    }
}

module.exports = Client
