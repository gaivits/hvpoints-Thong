'use strict';

/**
 * point controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::campaign.campaign', ({ strapi }) => ({
    async find(ctx) {
        var  id  = ctx.params.id = ctx.request.body;
        try {
            let response = await strapi.service("api::campaign.campaign").find("api::campaign.campaign");
            if (response.length === 0) {
                return ctx.send({ resultdata: "Empty" });
            }
            else {
                return response;
            }
        }
        catch (err) {
            return ctx.badRequest({ message: err });
        }

    },

    async findOne(ctx) {
        var id = ctx.request.params.id;
        ctx.request.body.id = id;
        //console.log(ctx.request.body.uid);
        try {
            let response = await strapi.service("api::campaign.campaign").findOne("api::campaign.campaign", ctx.request.body);
            if (response.length === 0) {
                return ctx.send({ resultdata: "Empty" });
            }
            else {
                return response;
            }
        }
        catch (err) {
            return ctx.badRequest({ message: err });
        }

    },

    async create(ctx) {
        let {
            email,
            phone,
            uid,
            campaign_id,
            name,
            point,
            reward,
            detail,
            point_total,
            insert_date,
            last_date
        } = ctx.request.body;
        try {
            let response = await strapi.service("api::campaign.campaign").findOne("api::campaign.campaign", ctx.request.body);
            if (response.length === 0) {
                return ctx.send({ resultdata: "Empty" });
            }
            else {
                return response;
            }
        }
        catch (err) {
            return ctx.badRequest({ message: err });
        }

    },

    async update(ctx) {
        var id = ctx.request.params.id;
        ctx.request.body.id = id;
        let {
            email,
            phone,
            uid,
            campaign_id,
            name,
            point,
            reward,
            detail,
            point_total,
            insert_date,
            last_date
        } = ctx.request.body;
        try {
            let response = await strapi.service("api::campaign.campaign").update("api::campaign.campaign", ctx.request.body.id);
            if (response.length === 0) {
                return ctx.send({ resultdata: "Empty" });
            }
            else {
                return response;
            }
        }
        catch (err) {
            return ctx.badRequest({ message: err });
        }

    },
    async delete(ctx) {
        var id = ctx.request.params.id;
        ctx.request.body.id = id;
        let {
            email,
            phone,
            uid,
            campaign_id,
            name,
            point,
            reward,
            detail,
            point_total,
            insert_date,
            last_date
        } = ctx.request.body;
        try {
            let response = await strapi.service("api::campaign.campaign").delete("api::campaign.campaign", ctx.request.body.id);
            if (response.length === 0) {
                return ctx.send({ resultdata: "Empty" });
            }
            else {
                return response;
            }
        }
        catch (err) {
            return ctx.badRequest({ message: err });
        }

    },
}));
