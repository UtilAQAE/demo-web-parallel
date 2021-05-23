package stepdefs;

import driver.DriverManager;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pageobject.HomePage;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import static org.junit.Assert.assertTrue;

public class HomeStepDef extends DriverManager {

    //     HomePage homePage;
//
//     HomeStepDef(HomePage homePage) {
//         this.homePage = homePage;
//     }

//    HomePage homePage = new HomePage(DriverManager.getDriver());


//    @Given("Step from {string} in {string} feature file")
//    public void step(String scenario, String file) throws InterruptedException {
//        DriverManager.getDriver().get("http://localhost:83/#!/home");
//        System.out.format("Thread ID - %2d - %s from %s feature file.\n",
//                Thread.currentThread().getId(), scenario,file);
//    }
//
//    @Given("Open home page")
//    public void openHomePage() throws InterruptedException {
//       DriverManager.getDriver().get("http://localhost:83/#!/home");
//
//        Thread.sleep(5000);
//        assertTrue(homePage.getExpertRegistrationButton().isDisplayed());
//    }

    @Given("Open home page")
    public void openHomePage() throws IOException, InterruptedException {
        startWebDriver("chrome");
        navigateTo("http://localhost:83/#!/home");
        WebElement element = getDriver().findElement(By.id("expertRegistration"));
        assertTrue(element.isDisplayed());
//        Thread.sleep(5000);
    }

    @Given("^I open the (.*) browser and navigate to (.*)")
    public void openBrowser(String browser, String url) throws IOException, InterruptedException {
        startWebDriver(browser);
        navigateTo(url);
        TimeUnit.SECONDS.sleep(5);

    }

    @Then("^the element on (.*) page is present$")
    public void elementIsPresent(String elementName) throws InterruptedException {
        switch (elementName) {
            case ("home"):
                WebElement element = getDriver().findElement(By.id("expertRegistration"));
                assertTrue(element.isDisplayed());
                break;
            case ("jobs"):
            case ("experts"):
            case ("organizations"):
            case ("funding"):
            case ("donors"):
                WebElement element1 = getDriver().findElement(By.xpath("//li[@class='title ng-binding']"));
                assertTrue(element1.isDisplayed());
                break;
        }

    }

//    @Given("^I open the (.*) browser and navigate to (.*)")
//    public void openBrowser2(String browser, String url) throws IOException {
//        startWebDriver(browser);
//        navigateTo(url);
//        WebElement element = driver.findElement(By.xpath("(//li[contains(@class, 'default-database active')])[1]"));
//        assertTrue(element.isDisplayed());
//    }


}
