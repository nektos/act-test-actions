function checkEnvVar({ name, allowEmpty }) {
  if (
    process.env[name] === undefined ||
    (allowEmpty === false && process.env[name] === "")
  ) {
    throw new Error(
      `${name} is undefined` + (allowEmpty === false ? " or empty" : "")
    );
  }
  console.log(`${name}=${process.env[name]}`);
}

checkEnvVar({ name: "GITHUB_ACTION", allowEmpty: false });
checkEnvVar({ name: "GITHUB_ACTION_REPOSITORY", allowEmpty: false });
checkEnvVar({ name: "GITHUB_ACTION_REF", allowEmpty: false });
