const lotsR = require("./lots");

exports.routesInit = (app) => {
  app.use("/lots",lotsR)
}