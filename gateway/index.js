const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();

const proxyMiddleware = createProxyMiddleware({
  target: "http://localhost:4000",
  changeOrigin: true,
});

const proxymiddleware2 = createProxyMiddleware({
  target: "http://localhost:4001",
  changeOrigin: true,
});

app.use("/test", proxyMiddleware);
app.use("/testing", proxymiddleware2);
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
