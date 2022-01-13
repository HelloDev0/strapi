'use strict';

/**
 * p-user service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::p-user.p-user');
