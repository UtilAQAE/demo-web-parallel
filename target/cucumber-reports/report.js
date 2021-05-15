$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Home.feature");
formatter.feature({
  "name": "Test parallel",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Test1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Open home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.HomeStepDef.openHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Test2",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Open home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.HomeStepDef.openHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Test3",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Open home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.HomeStepDef.openHomePage()"
});
