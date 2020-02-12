'use strict';
const Path = require('path')

module.exports = {
  name: 'frontend',
  version: '1.0.0',
  register: async (server) => {

    server.route([{
      method: 'GET',
      path: '/{path*}',
      handler: {
        directory: {
          path: './build',
          listing: false,
          index: true
        }
      },
      options: {
        description: 'Landing page ResearchTrends frontend.',
        tags: ['api'],
      },
    },
    {
      method: 'GET',
      path: '/viz/{path*}',
      handler: {
        directory: {
          path: './build',
          listing: false,
          index: true
        }
      },
      options: {
        description: 'Visualization page for ResearchTrends frontend.',
        tags: ['api'],
      },
    },
  ]);
  }
};
