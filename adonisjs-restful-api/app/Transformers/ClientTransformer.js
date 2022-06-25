'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')

/**
 * ClientTransformer class
 *
 * @class ClientTransformer
 * @constructor
 */
class ClientTransformer extends BumblebeeTransformer {
  transform(model) {
    return {
      id: model.id,
      name: model.name,
      surname: model.surname,
      patronymic: model.patronymic,
      dob: model.dob,
      spouse_id: model.spouse.id,
      passport_id: model.passport.id,
      living_address_id: model.livingAddress.id,
      reg_address_id: model.regAddress.id,
      general_exp: model.generalExp,
      cur_work_exp: model.curWorkExp,
      cur_field_exp: model.curFieldExp,
      status: model.status,
      type_education: model.typeEducation,
      marital_status: model.maritalStatus,
      type_emp: model.typeEmp,
      mon_income: model.monIncome,
      mon_expenses: model.monExpenses,
      created_at: model.createdAt,
      updated_at: model.updatedAt
    }
  }
}

module.exports = ClientTransformer
