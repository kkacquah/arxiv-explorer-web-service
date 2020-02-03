'use strict';

const Boom = require('@hapi/boom');
const CreateRecord = require('../../application_business_rules/use_cases/CreateRecord.js');
const records = require('../../application_business_rules/repositories/RecordsRepository');

module.exports = {

  async createRecord(request) {
    // Treatment
    const recordResponse = CreateRecord(request.payload, {
      records
    });

    return recordResponse;
  }

};
