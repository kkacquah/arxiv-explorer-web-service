const airtable = require('airtable');
const {AIRTABLE_KEY} = process.env;

const base = new airtable({apiKey: AIRTABLE_KEY}).base('appdWbdo6qMu4DIr8');

module.exports = base;
