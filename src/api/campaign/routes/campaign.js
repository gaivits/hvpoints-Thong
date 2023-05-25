'use strict';

/**
 * point router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = {
    routes:
    [

        {
            method:"POST",
            path:"/campaign/find",
            handler:"campaign.find",
            config:
            {
                find :
                {
                    auth:false,
                }
            }
        },
        {
            method:"POST",
            path:"/campaign/findOne/:id",
            handler:"campaign.findOne",
            config:
            {
                findOne :
                {
                    auth:false,
                }
            }
        },
        {
            method:"POST",
            path:"/campaign/create",
            handler:"campaign.create",
            config:
            {
                create :
                {
                    auth:false,
                }
            }
        },
        {
            method:"POST",
            path:"/campaign/update/:id",
            handler:"campaign.update",
            config:
            {
                update :
                {
                    auth:false,
                }
            }
        },
        {
            method:"POST",
            path:"/campaign/delete/:id",
            handler:"campaign.delete",
            config:
            {
                delete :
                {
                    auth:false,
                }
            }
        },
    ]
};
