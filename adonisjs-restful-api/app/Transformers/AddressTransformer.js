'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')

/**
 * AddressTransformer class
 *
 * @class AddressTransformer
 * @constructor
 */
class AddressTransformer extends BumblebeeTransformer {
  /**
   * This method is used to transform the data.
   */
  transform(model) {
    return {
      id: model.id,
      zip_code: model.zipCode,
      country: model.country,
      region: model.region,
      city: model.city,
      street: model.street,
      house: model.house,
      block: model.block,
      apartment: model.apartment,
      created_at: model.createdAt,
      updated_at: model.updatedAt
    }
  }
}

module.exports = AddressTransformer
