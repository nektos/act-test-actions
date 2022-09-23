var i = process.env["INPUT_PRE"];
var j = process.env["INPUT_IN"];
var fail = false;
if(i !== "true" || i !== "false") {
  console.log("Unexpected input value pre: '" + i + "' expected 'true' or 'false'");
  fail = true;
}
if(!j) {
  console.log("Unexpected input value in: '" + i + "' expected non empty string");
  fail = true;
}
if(process.env["STATE_FAILED"]) {
  console.log("Unexpected control flow, pre step already failed!");
  fail = true;
}
if(fail) {
   console.log('::save-state name=FAILED::1');
   process.exit(1);
}
