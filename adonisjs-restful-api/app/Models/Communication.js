'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Communication extends Model {
    static table = 'public.communication'
    static get primaryKey () {
        return 'id'
    }
}

module.exports = Communication
