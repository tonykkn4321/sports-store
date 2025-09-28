const data = require("./products-data");

exports.handler = async function () {
  const categories = [...new Set(data.map(p => p.category))].sort();
  return {
    statusCode: 200,
    body: JSON.stringify(categories)
  };
};
