const { appendFileSync } = require("fs");
appendFileSync(process.env["GITHUB_ENV"], "ACTION_OUTPUT_MAIN=main\n", {
  encoding: "utf-8",
});
