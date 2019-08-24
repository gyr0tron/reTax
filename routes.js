const routes = require("next-routes")();

routes.add("/bills/new", "/bills/new");
routes.add("/bills/:address", "/bills/show");
// routes.add("/bills/:address", "/bills/show");
routes.add("/bills/:address/plans", "/bills/plans");

module.exports = routes;
