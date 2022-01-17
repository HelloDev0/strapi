'use strict';

/**
 * proctor service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::proctor.proctor');
