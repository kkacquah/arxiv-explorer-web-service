'use strict';

const Boom = require('@hapi/boom');
const GetDatapoints = require('../../application_business_rules/use_cases/getDatapoints');
const DatapointsRepository = require('../../application_business_rules/repositories/DatapointsRepository');
const DatapointsRepositoryInMemory = require('../../application_business_rules/use_cases/QueryResolverInMemory');
const mockDatapoints = require('../../../test/data/searchQueryResolverTestResponse');
const ParamsController = require('./ParamsController');
const datapointsRepository = new DatapointsRepository(new DatapointsRepositoryInMemory(mockDatapoints));

module.exports = {

  async getDatapoints(request) {
    // Input
    //get params from session token
    if (request.query.initialize) {
      // Treatment
      request.yar.set('params', {
        //Interval of the start and end time of the query in milliseconds since epoch.
        period: {
          start: 682128000,
          end: 1577222874,
          interval: 60*60*24*365
        },
        category: "cs" //Category as represented by ArXiv short code.
      });
    }
    const params = request.yar.get('params');
    const phrase = request.query.phrase;
    //generate query for datapoints service
    const query = {
      phrase,
      ...params
    }
    // Treatment
    const pointsArray = await GetDatapoints(query, {
      datapointsRepository
    });

    // Output
    if (!pointsArray) {
      return Boom.notFound();
    }

    // Output
    return pointsArray;
  }

};
