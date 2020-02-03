'use strict';
const Joi = require('@hapi/joi');

const RecordsController = require('../../interface_adapters/controllers/RecordsController');

module.exports = {
  name: 'records',
  version: '1.0.0',
  register: async (server) => {

    server.route([{
      method: 'POST',
      path: '/records',
      handler: RecordsController.createRecord,
      options: {
        description: 'Create record when feedback is posted.',
        tags: ['api'],
        validate: {
          payload: Joi.object({
            description: Joi.string().required(),
            feedbackType:Joi.string().required(),
          }).options({
            stripUnknown: true
          })
        }
      },
    }]);
  }
};
