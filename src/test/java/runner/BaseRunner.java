//package runner;
//
//
//import driver.DriverManager;
//import io.cucumber.junit.CucumberOptions;
//import io.cucumber.testng.AbstractTestNGCucumberTests;
//import io.cucumber.testng.FeatureWrapper;
//import io.cucumber.testng.PickleWrapper;
//import io.cucumber.testng.TestNGCucumberRunner;
//import org.testng.annotations.*;
//
//import java.io.IOException;
//
//public class BaseRunner  {
//
//    private static final ThreadLocal<TestNGCucumberRunner> testNGCucumberRunner = new ThreadLocal<>();
//
//
//    public static TestNGCucumberRunner getRunner() {
//        return testNGCucumberRunner.get();
//    }
//
//    private static void setRunner(TestNGCucumberRunner testNGCucumberRunner1) {
//        testNGCucumberRunner.set(testNGCucumberRunner1);
//    }
//
//    @Parameters({"Type"})
//    @BeforeClass(alwaysRun = true)
//    public void steUpClass(String browser) throws IOException {
//
//        DriverManager.initDriver(browser);
//        setRunner(new TestNGCucumberRunner(this.getClass()));
//    }
//
//    @Test(groups = "cucumber", description = "Runs Cucumber Scenarios", dataProvider = "scenarios")
//    public void scenario(PickleWrapper pickle, FeatureWrapper cucumberFeature) throws Throwable {
//        getRunner().runScenario(pickle.getPickle());
//    }
//
//
//    @DataProvider
//    public Object[][] scenarios() {
//        return getRunner().provideScenarios();
//    }
//
//    @AfterClass(alwaysRun = true)
//    public void shutDownClass()  {
//        DriverManager.getDriver().quit();
//
//        try {
//            if (testNGCucumberRunner != null) {
//                getRunner().finish();
//            }
//        } catch (NullPointerException e) {
//            e.printStackTrace();
//        }
//    }
//
//
//    }
//
//
//
