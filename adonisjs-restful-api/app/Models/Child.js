'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Child extends Model {
    static table = 'public.child'
    static get primaryKey () {
        return 'id'
    }
}

module.exports = Child
