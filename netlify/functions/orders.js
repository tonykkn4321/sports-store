let orders = [];

exports.handler = async function (event) {
  if (event.httpMethod === "POST") {
    const newOrder = JSON.parse(event.body);
    orders.push(newOrder);
    return {
      statusCode: 201,
      body: JSON.stringify({ success: true, order: newOrder })
    };
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ error: "Method Not Allowed" })
  };
};
