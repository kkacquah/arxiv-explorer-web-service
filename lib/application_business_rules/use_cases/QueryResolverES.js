'use strict';

const fetch = require('node-fetch');
const Datapoints = require('../../enterprise_business_rules/entities/Datapoints');
const {API_GATEWAY_ENDPOINT} = process.env;

module.exports = class {

  constructor(data) {
    this.data = data;
  }

  async resolveQuery(query) {
    const res = await fetch(API_GATEWAY_ENDPOINT, {
      method: 'post',
      body: JSON.stringify(this.data),
      headers: { 'Content-Type' : 'application/json' },
    });
    const data = await res.json();
    let pointArrays = {}
    data.array.forEach(element => {
      pointArrays[element.phrase] = element.data
    })
    return new Datapoints(pointArrays);
  }

};
