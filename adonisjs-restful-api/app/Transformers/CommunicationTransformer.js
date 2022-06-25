'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')

/**
 * CommunicationTransformer class
 *
 * @class CommunicationTransformer
 * @constructor
 */
class CommunicationTransformer extends BumblebeeTransformer {
  /**
   * This method is used to transform the data.
   */
  transform(model, context) {
    return {
      type: model.type,
      value: model.value,
      client_id: context.request.body.id
    }
  }
}

module.exports = CommunicationTransformer
