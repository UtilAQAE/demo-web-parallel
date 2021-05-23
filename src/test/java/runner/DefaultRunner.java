package runner;

import io.cucumber.junit.Cucumber;
import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;
import org.junit.runner.RunWith;
import org.testng.annotations.DataProvider;

@CucumberOptions(
        plugin = {"pretty", "json:target/cucumber-reports/Cucumber.json",
                "junit:target/cucumber-reports/Cucumber.xml",
                "html:target/cucumber-reports"},
        features = {"src/test/resources/features/"},
        glue = {"stepdefs"},
        tags = "@Test",
        strict = true)

public class DefaultRunner extends AbstractTestNGCucumberTests {

    @DataProvider(parallel = true)
    public Object [] [] scenarios() {
      return super.scenarios();
  }

}
