const routes = require("next-routes")();

routes.add("/bills/new", "/bills/new");
routes.add("/bills/:address", "/bills/show");

module.exports = routes;
