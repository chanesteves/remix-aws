const { createRequestHandler } = require("@remix-run/architect");

const build = require("@remix-run/dev/server-build");

if (process.env.NODE_ENV !== "production") {
  require("./mocks");
}

export const handler = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
});
