const { appendFileSync } = require("fs");
appendFileSync(process.env["GITHUB_ENV"], "ACTION_OUTPUT_POST=post\n", {
  encoding: "utf-8",
});
