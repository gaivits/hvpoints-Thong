'use strict';

/**
 * point service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::campaign.campaign',({ strapi })=>({
    async find(...args) {  
        // Calling the default core controller
        let entries = await strapi.entityService.findMany('api::campaign.campaign', {
            fields: "*",
            filters: {},
            sort: {},
            populate: {},
          });
        return entries;
      },
      async findOne(...args) {  
        // Calling the default core controller
        let entries = await strapi.entityService.findOne('api::campaign.campaign', args.at(1).uid , {
            fields: "*",
            filters: {},
            sort: {},
            populate: {},
          });
        return entries;
      },
      async create(...args) {  
        // Calling the default core controller
        let entries = await strapi.entityService.create('api::campaign.campaign',  {
            data:{
              email : args.at(1).email,
              phone : args.at(2).phone,
              uid : args.at(3).uid,
              campaign_id : args.at(4).campaign_id,
              name : args.at(5).name,
              point : args.at(6).point,
              reward : args.at(7).reward,
              detail : args.at(8).detail,
              point_total : args.at(9).point_total,
              insert_date : args.at(10).insert_date,
              last_update : args.at(11).insert_date,
            }
          });
        return entries;
      },
      async update(...args) {  
        // Calling the default core controller
        let entries = await strapi.entityService.update('api::campaign.campaign',args.at(3).uid,{
            data:{
              email : args.at(1).email,
              phone : args.at(2).phone,
              uid : args.at(3).uid,
              campaign_id : args.at(4).campaign_id,
              name : args.at(5).name,
              point : args.at(6).point,
              reward : args.at(7).reward,
              detail : args.at(8).detail,
              point_total : args.at(9).point_total,
              insert_date : args.at(10).insert_date,
              last_update : args.at(11).insert_date,
            }
          });
        return entries;
      },
      async delete(...args) {  
        // Calling the default core controller
        let entries = await strapi.entityService.delete('api::campaign.campaign',args.at(3).uid,{
            fields: "*",
            filters: {},
            sort: {},
            populate: {},
          });
        return entries;
      },
}));
