const { appendFileSync } = require("fs");
appendFileSync(process.env["GITHUB_ENV"], "ACTION_OUTPUT_PRE=pre\n", {
  encoding: "utf-8",
});
