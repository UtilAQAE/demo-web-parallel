package stepdefs;

import driver.DriverManager;
import io.cucumber.java.After;
import io.cucumber.java.Before;

import java.io.IOException;

public class Hook {

    @Before
    public void initBrowser() throws IOException {
        DriverManager.initDriver("firefox");
    }

    @After
    public void killBrowser() {
        if(DriverManager.getDriver() != null) {
            DriverManager.getDriver().quit();
        }
    }

}
