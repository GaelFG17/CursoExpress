const { mode } = require("crypto-js");

function logErrors(err, req, res, next) {
  console.error(err);
  next(err);
}

module.exports = logErrors;
