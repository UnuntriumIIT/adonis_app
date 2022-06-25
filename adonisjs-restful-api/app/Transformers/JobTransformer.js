'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')

/**
 * JobTransformer class
 *
 * @class JobTransformer
 * @constructor
 */
class JobTransformer extends BumblebeeTransformer {
  /**
   * This method is used to transform the data.
   */
  transform(model, context) {
    return {
      client_id: context.request.body.id,
      address_id: model.address.id,
      company_name: model.companyName,
      type: model.type,
      date_emp: model.dateEmp,
      date_dismissal: model.dateDismissal,
      tin: model.tin,
      job_title: model.jobTitle,
      mon_income: model.monIncome,
      fio_manager: model.fioManager,
      site: model.site,
      phone_numbers: JSON.stringify(model.phoneNumbers),
    }
  }
}

module.exports = JobTransformer
