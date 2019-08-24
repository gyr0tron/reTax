const routes = require("next-routes")();

routes.add("/bills/new", "/bills/new"); // TODO: Change (Simmar)
routes.add("/bills/:address", "/bills/index"); // TODO: Change (Simmar)
routes.add("/bills/:address/plans", "/bills/plans/index"); // TODO: Change (Simmar)
routes.add("/bills/:address/plans/new", "/bills/plans/new"); // TODO: Change (Simmar)
// routes.add("/bills/:address", "/bills/show");

module.exports = routes;
