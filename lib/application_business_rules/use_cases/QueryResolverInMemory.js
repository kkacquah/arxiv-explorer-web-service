'use strict';

const Datapoints = require('../../enterprise_business_rules/models/Datapoints');

module.exports = class {

  constructor(data) {
    this.data = data;
  }

  async resolveQuery(query) {
    // TODO: Update to fit new data response format
    var pointArrays = this.data[query.phrase];
    return new Datapoints(pointArrays);
  }

};
