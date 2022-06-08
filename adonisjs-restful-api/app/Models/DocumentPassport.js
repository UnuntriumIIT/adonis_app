'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class DocumentPassport extends Model {
    static table = 'public.document_passport'
    static get createdAtColumn() {
        return 'created_at'
    }
    static get updatedAtColumn() {
        return 'updated_at'
    }
    static get primaryKey () {
        return 'id'
    }
}

module.exports = DocumentPassport
