const data = require("./products-data");

exports.handler = async function () {
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};
