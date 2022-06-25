'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')

/**
 * ChildTransformer class
 *
 * @class ChildTransformer
 * @constructor
 */
class ChildTransformer extends BumblebeeTransformer {
  /**
   * This method is used to transform the data.
   */
  transform(model, context) {
    return {
      patronymic: model.patronymic,
      surname: model.surname,
      name: model.name,
      dob: model.dob,
      client_id: context.request.body.id
    }
  }
}

module.exports = ChildTransformer
