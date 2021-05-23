package stepdefs;

import driver.DriverManager;
import io.cucumber.java.After;
import io.cucumber.java.Before;

import java.io.IOException;

public class Hook extends DriverManager {

    @Before
    public void startDriver() throws IOException {
//       DriverManager.startWebDriver("chrome");
    }

    @After
    public void quitDriver() {
       stopWebDriver();
    }

}
