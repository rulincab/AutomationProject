$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SearchCruices.feature");
formatter.feature({
  "line": 3,
  "name": "Search Sail",
  "description": "This feature allows searching a sail with some searching parameters\r\nit allows wants to see more information about a sail",
  "id": "search-sail",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@searchSails"
    }
  ]
});
formatter.before({
  "duration": 8832459700,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "The User is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the user defines the parameters to search for sails",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the user confirms the searching to get results",
  "keyword": "And "
});
formatter.match({
  "location": "SearchSailSteps.theUserIsOnTheHomePage()"
});
formatter.result({
  "duration": 9144141300,
  "status": "passed"
});
formatter.match({
  "location": "SearchSailSteps.theUserDefinesTheParametersToSearchForSails()"
});
formatter.result({
  "duration": 9563830400,
  "status": "passed"
});
formatter.match({
  "location": "SearchSailSteps.theUserConfirmsTheSearchingToGetResults()"
});
formatter.result({
  "duration": 3460640100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "successfully search for sails",
  "description": "This scenario consists of doing a searching that\r\nit returns all of the results on the set parameters",
  "id": "search-sail;successfully-search-for-sails",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@story1"
    },
    {
      "line": 13,
      "name": "@case1"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "it shows the sails that meet the searching parameters with \"Grid view active\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Grid view active",
      "offset": 60
    }
  ],
  "location": "SearchSailSteps.itShowsTheSailsThatMeetTheSearchingParametersWith(String)"
});
formatter.result({
  "duration": 3658493500,
  "status": "passed"
});
formatter.after({
  "duration": 9434993899,
  "status": "passed"
});
formatter.before({
  "duration": 6078578100,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "The User is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the user defines the parameters to search for sails",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the user confirms the searching to get results",
  "keyword": "And "
});
formatter.match({
  "location": "SearchSailSteps.theUserIsOnTheHomePage()"
});
formatter.result({
  "duration": 8754155100,
  "status": "passed"
});
formatter.match({
  "location": "SearchSailSteps.theUserDefinesTheParametersToSearchForSails()"
});
formatter.result({
  "duration": 8942637900,
  "status": "passed"
});
formatter.match({
  "location": "SearchSailSteps.theUserConfirmsTheSearchingToGetResults()"
});
formatter.result({
  "duration": 2932772000,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "successfully validate the filter function by price",
  "description": "This scenario consists of doing a filter by price\r\nall of the results are between the ranges",
  "id": "search-sail;successfully-validate-the-filter-function-by-price",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@story1"
    },
    {
      "line": 20,
      "name": "@case2"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "the user wants to filter by price",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "the user sets the ranges values",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the sails results amount are \"4 Results\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSailSteps.theUserWantsToFilterByPrice()"
});
formatter.result({
  "duration": 4142859000,
  "status": "passed"
});
formatter.match({
  "location": "SearchSailSteps.theUserSetsTheRangesValues()"
});
formatter.result({
  "duration": 2601764400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4 Results",
      "offset": 30
    }
  ],
  "location": "SearchSailSteps.theSailsResultsAmountAre(String)"
});
formatter.result({
  "duration": 1244846200,
  "status": "passed"
});
formatter.after({
  "duration": 7984987700,
  "status": "passed"
});
formatter.before({
  "duration": 6504502799,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "The User is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the user defines the parameters to search for sails",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the user confirms the searching to get results",
  "keyword": "And "
});
formatter.match({
  "location": "SearchSailSteps.theUserIsOnTheHomePage()"
});
formatter.result({
  "duration": 9112466300,
  "status": "passed"
});
formatter.match({
  "location": "SearchSailSteps.theUserDefinesTheParametersToSearchForSails()"
});
formatter.result({
  "duration": 10127675101,
  "status": "passed"
});
formatter.match({
  "location": "SearchSailSteps.theUserConfirmsTheSearchingToGetResults()"
});
formatter.result({
  "duration": 3823587100,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "successfully validate the filter function by price",
  "description": "This scenario consists of doing a filter by price\r\nall of the results are between the ranges",
  "id": "search-sail;successfully-validate-the-filter-function-by-price",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@story1"
    },
    {
      "line": 29,
      "name": "@case3"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "the user wants to sort by price",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "the results are ordered by \"price\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSailSteps.theUserWantsToSortByPrice()"
});
formatter.result({
  "duration": 637300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "price",
      "offset": 28
    }
  ],
  "location": "SearchSailSteps.theResultsAreOrderedBy(String)"
});
formatter.result({
  "duration": 20288800801,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.id: sortOption not found\u0027 (tried for 20 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat pageobjects.ResultFilters.testSortByPrice(ResultFilters.java:74)\r\n\tat steps.SearchSailSteps.theResultsAreOrderedBy(SearchSailSteps.java:92)\r\n\tat ✽.Then the results are ordered by \"price\"(SearchCruices.feature:34)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: #sortOption\\ not\\ found\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ERICKSALGUERO\u0027, ip: \u002710.0.75.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 79.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200720193547, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 7392, moz:profile: C:\\Users\\Erick Salguero\\App..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: f5e77667-1b5b-4764-a97e-017ee3c0c133\n*** Element info: {Using\u003did, value\u003dsortOption not found}\r\n\tat sun.reflect.GeneratedConstructorAccessor14.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat pageobjects.ResultFilters.testSortByPrice(ResultFilters.java:74)\r\n\tat steps.SearchSailSteps.theResultsAreOrderedBy(SearchSailSteps.java:92)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat runners.TestRunner.feature(TestRunner.java:32)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:133)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:584)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:172)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:804)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:145)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.util.ArrayList.forEach(ArrayList.java:1257)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:770)\r\n\tat org.testng.TestRunner.run(TestRunner.java:591)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:402)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:396)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:355)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:304)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1180)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1102)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1032)\r\n\tat org.testng.TestNG.run(TestNG.java:1000)\r\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:73)\r\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:123)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 9320334900,
  "status": "passed"
});
});