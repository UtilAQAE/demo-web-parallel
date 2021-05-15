package stepdefs;

import driver.DriverManager;
import io.cucumber.java.en.Given;
import pageobject.HomePage;

import static org.junit.Assert.assertTrue;

public class HomeStepDef {

    HomePage homePage = new HomePage(DriverManager.getDriver());

    @Given("Open home page")
    public void openHomePage() throws InterruptedException {
       DriverManager.getDriver().get("http://localhost:83/#!/home");

        Thread.sleep(5000);
        assertTrue(homePage.getExpertRegistrationButton().isDisplayed());
    }

}
