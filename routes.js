const routes = require("next-routes")();

routes.add("/bills/:address", "/bills/show");

module.exports = routes;
