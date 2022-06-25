'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')

/**
 * PassportTransformer class
 *
 * @class PassportTransformer
 * @constructor
 */
class PassportTransformer extends BumblebeeTransformer {
  /**
   * This method is used to transform the data.
   */
  transform (model) {
    return {
      id: model.id,
      date_issued: model.dateIssued,
      number: model.number,
      birth_place: model.birthPlace,
      series: model.series,
      giver: model.giver,
      created_at: model.createdAt,
      updated_at: model.updatedAt
    }
  }
}

module.exports = PassportTransformer
