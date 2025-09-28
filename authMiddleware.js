const jwt = require("jsonwebtoken");

const APP_SECRET = "myappsecret";
const USERNAME = "admin";
const PASSWORD = "secret";

module.exports = function (req, res, next) {
  // Log incoming request for debugging
  console.log("Request:", req.method, req.url);
  console.log("Authorization:", req.headers["authorization"]);

  // Handle login
  if ((req.url === "/api/login" || req.url === "/login") && req.method === "POST") {
    if (req.body && req.body.name === USERNAME && req.body.password === PASSWORD) {
      const token = jwt.sign({ data: USERNAME }, APP_SECRET, { expiresIn: "1h" });
      res.json({ success: true, token });
    } else {
      res.json({ success: false });
    }
    return;
  }

  // Protect non-GET product/category routes and non-POST order routes
  const protectedRoutes =
    ((req.url.startsWith("/api/products") || req.url.startsWith("/products") ||
      req.url.startsWith("/api/categories") || req.url.startsWith("/categories")) && req.method !== "GET") ||
    ((req.url.startsWith("/api/orders") || req.url.startsWith("/orders")) && req.method !== "POST");

  if (protectedRoutes) {
    let token = req.headers["authorization"];
    if (token && token.startsWith("Bearer ")) {
      token = token.slice(7); // Remove "Bearer " prefix
      try {
        jwt.verify(token, APP_SECRET);
        return next();
      } catch (err) {
        console.error("JWT verification failed:", err.message);
      }
    }
    res.statusCode = 401;
    res.end();
    return;
  }

  // Allow all other requests
  next();
};
