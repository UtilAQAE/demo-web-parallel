$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Home.feature");
formatter.feature({
  "name": "Scenarios file",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "test 1",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test"
    }
  ]
});
formatter.step({
  "name": "I open the \u003cbrowserName\u003e browser and navigate to \u003curl\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "the element on home page is present",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "browserName",
        "url"
      ]
    },
    {
      "cells": [
        "chrome",
        "http://localhost:83/#!/home"
      ]
    },
    {
      "cells": [
        "firefox",
        "http://localhost:83/#!/home"
      ]
    }
  ]
});
formatter.scenario({
  "name": "test 1",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "I open the chrome browser and navigate to http://localhost:83/#!/home",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.HomeStepDef.openBrowser(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the element on home page is present",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.HomeStepDef.elementIsPresent(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "test 1",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "I open the firefox browser and navigate to http://localhost:83/#!/home",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.HomeStepDef.openBrowser(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the element on home page is present",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.HomeStepDef.elementIsPresent(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "test 2",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test"
    }
  ]
});
formatter.step({
  "name": "I open the \u003cbrowserName\u003e browser and navigate to \u003curl\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "the element on experts page is present",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "browserName",
        "url"
      ]
    },
    {
      "cells": [
        "chrome",
        "http://localhost:83/#!/experts/search"
      ]
    },
    {
      "cells": [
        "firefox",
        "http://localhost:83/#!/experts/search"
      ]
    }
  ]
});
formatter.scenario({
  "name": "test 2",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "I open the chrome browser and navigate to http://localhost:83/#!/experts/search",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.HomeStepDef.openBrowser(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the element on experts page is present",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.HomeStepDef.elementIsPresent(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "test 2",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "I open the firefox browser and navigate to http://localhost:83/#!/experts/search",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.HomeStepDef.openBrowser(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the element on experts page is present",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.HomeStepDef.elementIsPresent(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "test 3",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test"
    }
  ]
});
formatter.step({
  "name": "I open the \u003cbrowserName\u003e browser and navigate to \u003curl\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "the element on jobs page is present",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "browserName",
        "url"
      ]
    },
    {
      "cells": [
        "chrome",
        "http://localhost:83/#!/jobs/search"
      ]
    },
    {
      "cells": [
        "firefox",
        "http://localhost:83/#!/jobs/search"
      ]
    }
  ]
});
formatter.scenario({
  "name": "test 3",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "I open the chrome browser and navigate to http://localhost:83/#!/jobs/search",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.HomeStepDef.openBrowser(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the element on jobs page is present",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.HomeStepDef.elementIsPresent(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "test 3",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "I open the firefox browser and navigate to http://localhost:83/#!/jobs/search",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.HomeStepDef.openBrowser(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the element on jobs page is present",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.HomeStepDef.elementIsPresent(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Home2.feature");
formatter.feature({
  "name": "Scenarios file 2",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "test file 2.1",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test"
    }
  ]
});
formatter.step({
  "name": "I open the \u003cbrowserName\u003e browser and navigate to \u003curl\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "the element on organizations page is present",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "browserName",
        "url"
      ]
    },
    {
      "cells": [
        "chrome",
        "http://localhost:83/#!/organizations/search"
      ]
    },
    {
      "cells": [
        "firefox",
        "http://localhost:83/#!/organizations/search"
      ]
    }
  ]
});
formatter.scenario({
  "name": "test file 2.1",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "I open the chrome browser and navigate to http://localhost:83/#!/organizations/search",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.HomeStepDef.openBrowser(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the element on organizations page is present",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.HomeStepDef.elementIsPresent(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "test file 2.1",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "I open the firefox browser and navigate to http://localhost:83/#!/organizations/search",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.HomeStepDef.openBrowser(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the element on organizations page is present",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.HomeStepDef.elementIsPresent(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "test file 2.2",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test"
    }
  ]
});
formatter.step({
  "name": "I open the \u003cbrowserName\u003e browser and navigate to \u003curl\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "the element on funding page is present",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "browserName",
        "url"
      ]
    },
    {
      "cells": [
        "chrome",
        "http://localhost:83/#!/tenders/search"
      ]
    },
    {
      "cells": [
        "firefox",
        "http://localhost:83/#!/tenders/search"
      ]
    }
  ]
});
formatter.scenario({
  "name": "test file 2.2",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "I open the chrome browser and navigate to http://localhost:83/#!/tenders/search",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.HomeStepDef.openBrowser(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the element on funding page is present",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.HomeStepDef.elementIsPresent(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "test file 2.2",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "I open the firefox browser and navigate to http://localhost:83/#!/tenders/search",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.HomeStepDef.openBrowser(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the element on funding page is present",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.HomeStepDef.elementIsPresent(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "test file 2.3",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test"
    }
  ]
});
formatter.step({
  "name": "I open the \u003cbrowserName\u003e browser and navigate to \u003curl\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "the element on donors page is present",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "browserName",
        "url"
      ]
    },
    {
      "cells": [
        "chrome",
        "http://localhost:83/#!/donors"
      ]
    },
    {
      "cells": [
        "firefox",
        "http://localhost:83/#!/donors"
      ]
    }
  ]
});
formatter.scenario({
  "name": "test file 2.3",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "I open the chrome browser and navigate to http://localhost:83/#!/donors",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.HomeStepDef.openBrowser(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the element on donors page is present",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.HomeStepDef.elementIsPresent(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "test file 2.3",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "I open the firefox browser and navigate to http://localhost:83/#!/donors",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.HomeStepDef.openBrowser(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the element on donors page is present",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.HomeStepDef.elementIsPresent(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});