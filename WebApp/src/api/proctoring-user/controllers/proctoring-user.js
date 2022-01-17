'use strict';

/**
 *  proctoring-user controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::proctoring-user.proctoring-user',

    ({ strapi }) => ({
        // Method 1: Creating an entirely custom action
        async exampleAction(ctx) {
            console.log("hellomkshbfjhb",ctx)
            // try {
            //     ctx.query = 'ok';
            // } catch (err) {
            //     ctx.query = err;
            // }
        },

        async find(ctx) {
            // console.log(ctx)
            const  employeeID  = ctx;
            const  companyCode  = ctx.query.companyCode;
            console.log(employeeID,companyCode)
            const entity = await strapi.service('api::employee.employee').findOne(employeeID);
            const entity_ = await strapi.service('api::company.company').findOne(companyCode);

            if(entity &&entity_){
                res.status(200)
            }else{
                res.status(400)
            }
            // const sanitizedEntity = await this.sanitizeOutput(entity, entity_,ctx);

            // return this.transformResponse(sanitizedEntity);
        }
    }));
