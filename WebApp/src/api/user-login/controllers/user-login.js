'use strict';

/**
 *  user-login controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::user-login.user-login',({ strapi }) =>  ({
    // Method 1: Creating an entirely custom action
    // async exampleAction(ctx) {
    //   try {
    //     ctx.body = 'ok';
    //   } catch (err) {
    //     ctx.body = err;
    //   }
    // },
  
    // Method 2: Wrapping a core action (leaves core logic in place)
    // async find(ctx) {
    //   // some custom logic here
    //   ctx.query = { ...ctx.query, local: 'en' }
    //   console.log(ctx.query)
      
    //   // Calling the default core action
    //   const { data, meta } = await super.find(ctx);
  
    //   // some more custom logic
    //   meta.date = Date.now()
  
    //   return { data, meta };
    // },
  
    // Method 3: Replacing a core action
    async findOne(ctx) {
        console.log(ctx.query)
        ctx.body="hellol"
    //   const { id } = ctx.params;
      const code  = ctx.query.code;
      const empId=ctx.query.employeeID
      const id=ctx.params

      console.log(code)
  
      const entity = await strapi.service('api::company.company').findOne(code);
      const entity_ = await strapi.service('api::employee.employee').findOne(empId);
      console.log(entity,entity_)
        
      if(entity.length<1){
          ctx.body="retry with company code"
      }else if(entity_.length<1){
          ctx.body='reenter correct EmployeeID'
      }else{
          ctx.body='Logged in successfully'
      }
    //   const sanitizedEntity = await this.sanitizeOutput(entity_,ctx);
    //     console.log("this is santized",sanitizedEntity)

    //     return this.transformResponse(sanitizedEntity);
    
  
      
    }
  }));
